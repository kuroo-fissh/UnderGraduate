import { Pagination } from 'antd';
import React from 'react';
import { doSearch } from '../../utils/searchEngine';

export const TurnPage = (props) => {
	// eslint-disable-next-line react/prop-types
	const { total, setSearchResult, setGetToTal,setGetNowPage,setGetNowSize,selectSalary,selectJob,selectSchool } = props;
	// eslint-disable-next-line react/prop-types
	const TurnPageOnChange = (current, pageSize) => {
		console.log(current, pageSize);
		setGetNowPage(current);
		setGetNowSize(pageSize);
		doSearch(document.getElementById('inputArea').value, setSearchResult, setGetToTal, current, pageSize,selectSalary,selectJob,selectSchool);
	};

	return (
		<div style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>
			<Pagination
				showSizeChanger
				showQuickJumper 
				total={total>1000?1000:total}
				onChange={TurnPageOnChange}
			/>
		</div>
	);
};
