/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Search/style.css';
import {createDb} from '../../utils/indexDb';
import {showMenu, choose} from '../../utils/pullDownContainer';
import {showSearchSueegst, changeSuggestMenu} from '../../utils/searchSuggestContainer';
import { doSearch } from '../../utils/searchEngine';

export const MainSearchArea = (props) => {
	const { setSearchResult } = props;
	const [searchInput, setSearchInput] = useState('');	
	createDb('jobDb');
	createDb('expDb');


	React.useEffect(() => {
		//这里实现和推荐引擎交互

		// const getData = () => {
		// 	fetch('/complement', {
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			searchInput: searchInput
		// 		})
		// 	}).then(res => res.json())
		// 		.then(res => {
		// 			changeSuggestMenu(res.data);
		// 		})
		// 		.catch(err => {
		// 			console.log(err);
		// 		}
		// 		);
		// 	const button = document.getElementById("SuggestFlagButton");
		// 	button.textContent = '猜您想搜';
		// };

	
		//防抖调用getdata
		const timer = setTimeout(() => {
			// getData();
		}
		, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [searchInput]);

	return (
		<div className="body">
			<div className='dropdown'>
				<button id="modeButton" className="choose" onClick={showMenu}>职位信息</button>
				<div id="myDropdown" className="dropdown-content">
					<a onClick={choose}>职位信息</a>
					<a onClick={choose}>面试经验</a>
				</div>
			</div>
			<div className="dropdown">
				<input id="inputArea" autoComplete="off" className="text" onClick={showSearchSueegst} onChange={(e) => setSearchInput(e.target.value)} value={searchInput}></input>
				<div id="suggestDropdown" className="suggest-dropdown-content"/>
			</div>
			<div className="search" id="searchArea">
				<button id="searchButton" onClick={()=>doSearch(	document.getElementById("inputArea").value,setSearchResult)}>
					<SearchIcon id="searchIcon"/>
				</button>
			</div>
		</div>
	);
};