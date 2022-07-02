/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import {createDb} from '../../utils/indexDb';
import {showMenu, choose} from '../../utils/pullDownContainer';
import {showSearchSueegst} from '../../utils/searchSuggestContainer';
import { doSearch } from '../../utils/searchEngine';

export const TopSearchArea = (props) => {
	const { setSearchResult } = props;
	const [searchInput, setSearchInput] = useState('');	
	createDb('jobDb');
	createDb('expDb');
	
	React.useEffect(() => {
		//这里实现和推荐引擎交互
		const getData = async () => {
			console.log(searchInput);
		};
		getData();
	}
	, [searchInput]);

	return (
		<div className="body">
			<div className='dropdown'>
				<button id="modeButton" className="choose" onClick={showMenu}>职位信息</button>
				<div id="myDropdown" className="dropdown-content">
					<a onClick={choose}>职位信息</a>
					<a onClick={choose}>面试经验</a>
				</div>
			</div>
			<input className="text" onClick={showSearchSueegst} onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
			<button className="search" onClick={()=>doSearch(searchInput,setSearchResult)}><SearchIcon /></button>
		</div>
	);
};