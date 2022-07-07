import { Pagination } from 'antd';
import React from 'react';
import { doSearch } from '../../utils/searchEngine';

export const TurnPage = (props) => {
	// eslint-disable-next-line react/prop-types
	const { total, setSearchResult, setGetToTal,setGetNowPage,setGetNowSize } = props;
	// eslint-disable-next-line react/prop-types
	const TurnPageOnChange = (current, pageSize) => {
		console.log(current, pageSize);
		setGetNowPage(current);
		setGetNowSize(pageSize);
		doSearch(document.getElementById('inputArea').value, setSearchResult, setGetToTal, current, pageSize);
	};

	return (
		<div>
			<Pagination
				showSizeChanger
				showQuickJumper 
				total={total}
				onChange={TurnPageOnChange}
			/>
		</div>
	);
};
