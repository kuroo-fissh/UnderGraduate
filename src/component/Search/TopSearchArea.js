import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';


export const TopSearchArea = (props) => {
	// eslint-disable-next-line react/prop-types
	const { setSearchResult } = props;
	const [searchInput, setSearchInput] = useState('');	
	//初始化数据库
	const jobDbName = 'jobDb';
	const expDbName = 'expDb';
	let returnValue = [];
	createDb(jobDbName);
	createDb(expDbName);
	
	function createDb(mode){
		let db = window.indexedDB.open(mode, 1);
		db.onupgradeneeded = function (e) {
			let db = e.target.result;
			if (!db.objectStoreNames.contains(mode===jobDbName ? 'jobHistory' : 'expHistory')) {
				db.createObjectStore(mode===jobDbName ? 'jobHistory' : 'expHistory', { autoIncrement: true });
			}
		};
	}

	function addHistory(value) {
		let mode = document.getElementById("modeButton").textContent === "职位信息" ? jobDbName : expDbName;
		let db = window.indexedDB.open(mode, 1);
		db.onsuccess = function (e) {
			let db = e.target.result;
			let transaction = db.transaction(mode===jobDbName ? 'jobHistory' : 'expHistory', 'readwrite');
			let store = transaction.objectStore(mode===jobDbName ? 'jobHistory' : 'expHistory');
			let result = store.add(value);
			result.onsuccess = function () {
				console.log(mode===jobDbName ? 'jobHistory' : 'expHistory');
				console.log(searchHistory);
			};
			let searchHistory = getAll(mode===jobDbName ? 1 : 2);
		
		};
	}

	function getAll(mode){
		let db = null;
		db = window.indexedDB.open(mode === 1 ? jobDbName : expDbName, 1);
		returnValue = [];
		db.onsuccess = function (e) {
			let db = e.target.result;
			let transaction = db.transaction(mode === 1 ? 'jobHistory' : 'expHistory', 'readonly');
			let store = transaction.objectStore(mode === 1 ? 'jobHistory' : 'expHistory');
			let cursor = store.openCursor();
			cursor.onsuccess = function (e) {
				let cursor = e.target.result;
				if (cursor) {
					returnValue.push(cursor.value);
					cursor.continue();
				}
			};
		};
		return returnValue;
	}

	//这是搜索框输入改变的useeffect，主要用于推荐
	React.useEffect(() => {
		const getData = async () => {
			console.log(searchInput);
		};
		getData();
	}
	, [searchInput]);

	//这是按下搜索按钮的时间，这里实现搜索功能
	function doSearch() {
		addHistory(searchInput);
		setSearchResult([]);
	}

	function showMenu() {
		//这里实现交互
		document.getElementById("myDropdown").classList.toggle("show");
	}

	window.onclick = function(event) {
		if (!event.target.matches('.choose')) {
			let dropdowns = document.getElementsByClassName("dropdown-content");
			let i = 0;
			for (i = 0; i < dropdowns.length; i++) {
				let openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	};

	function choose(e) {
		document.getElementById("modeButton").textContent = e.target.textContent;
	}
	
	return (
		<div className="body">
			<div className='dropdown'>
				<button id="modeButton" className="choose" onClick={showMenu}>职位信息</button>
				<div id="myDropdown" className="dropdown-content">
					<a onClick={choose}>职位信息</a>
					<a onClick={choose}>面试经验</a>
				</div>
			</div>
			<input className="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
			<button className="search" onClick={doSearch}><SearchIcon /></button>
		</div>
	);
};