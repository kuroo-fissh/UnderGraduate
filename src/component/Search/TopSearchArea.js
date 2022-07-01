import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';


export const TopSearchArea = (props) => {
	// eslint-disable-next-line react/prop-types
	const { setSearchResult } = props;
	const [searchInput, setSearchInput] = useState('');	

	React.useEffect(() => {
		const getData = async () => {
			console.log(searchInput);
		};
		getData();
		let tmp =[
			{
				"id": "3",
				"title": "前端开发工程师",
				"company": "百度",
				"salary": "10k-20k",
				"city": "北京",
				"tag": ["前端", "百度", "北京"],
			},
			{
				"id": "4",
				"title": "后端开发工程师",
				"company": "百度",
				"salary": "20k-30k",
				"city": "北京",
				"tag": ["前端", "百度", "北京"],
			},
		];
		//值回调给父级
		setSearchResult(tmp);
	}
	, [searchInput]);

	function doSearch() {
		//这里实现交互
		console.log(searchInput);
		console.log(document.getElementById("modeButton").textContent);
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