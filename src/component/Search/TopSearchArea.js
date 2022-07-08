/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import {createDb} from '../../utils/indexDb';
import {showMenu, choose} from '../../utils/pullDownContainer';
import {showSearchSueegst, changeSuggestMenu} from '../../utils/searchSuggestContainer';
import { doSearch } from '../../utils/searchEngine';

export const TopSearchArea = (props) => {
	const { setSearchResult } = props;
	const { setGetToTal } = props;
	const { page } = props;
	const { pageSize } = props;
	const {selectSalary} = props;
	const {selectJob} = props;
	const {selectSchool} = props;
	const [searchInput, setSearchInput] = useState('');	
	createDb('jobDb');
	createDb('expDb');


	React.useEffect(() => {
		//这里实现和推荐引擎交互
		const getData = () => {
			changeSuggestMenu([]);
			fetch('http://localhost:8000/complement/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					searchInput: searchInput
				})
			}).then(res => res.json())
				.then(res => {
					console.log(res.data);
					changeSuggestMenu(res.data);
				})
				.catch(err => {
					console.log(err);
				}
				);
			const button = document.getElementById("SuggestFlagButton");
			button.textContent = '猜您想搜';
		};
	
		//防抖调用getdata
		const timer = setTimeout(() => {
			getData();
		}
		, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [searchInput]);

	const checkIfSearch = (e) => {
		if (e.keyCode === 13) {
			doSearch(searchInput, setSearchResult, setGetToTal ,page,pageSize ,selectSalary,selectJob,selectSchool);
		}
	};

	//useeffect，只在页面初加载调用
	React.useEffect(() => {
		//从url中解析input
		const url = window.location.href;
		//解析url
		const urlArray = url.split('/');
		//获取input
		const input = urlArray[urlArray.length - 1];
		//获取input的值
		const inputArray = input.split('=');
		const inputValue = decodeURIComponent(inputArray[inputArray.length - 1]);
		//设置input
		
		setSearchInput(inputValue);
		//调用搜索函数
		doSearch(inputValue, setSearchResult, setGetToTal ,page,pageSize,selectSalary,selectJob,selectSchool);
	}
	, []);

	function getModeName() {
		if (window.location.pathname.includes('/jobSearch')){
			return '职位信息';
		}
		if (window.location.pathname.includes('/InterviewExperience')){
			return '面试经验';
		}
	}


	return (
		<div className="body">
			<div className='dropdown'>
				<button id="modeButton" className="choose" onClick={showMenu}>{getModeName()}</button>
				<div id="myDropdown" className="dropdown-content">
					<a onClick={choose}>职位信息</a>
					<a onClick={choose}>面试经验</a>
				</div>
			</div>
			<div className="dropdown">
				<input id="inputArea" autoComplete="off" className="text" onKeyDown={checkIfSearch} onClick={showSearchSueegst} onChange={(e) => setSearchInput(e.target.value)} value={searchInput}></input>
				<div id="suggestDropdown" className="suggest-dropdown-content"/>
			</div>
			<button className="search" onClick={()=>doSearch(	document.getElementById("inputArea").value,setSearchResult,setGetToTal,page,pageSize,selectSalary,selectJob,selectSchool)}> <SearchIcon /></button>
		</div>
	);
};