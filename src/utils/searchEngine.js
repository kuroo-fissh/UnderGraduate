import {addHistory} from './indexDb';
export function doSearch(searchInput,setSearchResult,setGetToTal,page,pageSize){
	console.log("dosearchinput",searchInput);
	console.log("dosearchpage",page);
	console.log("dosearchpagesize",pageSize);
	//通过调用get的search接口与后端进行交互
	fetch('/search', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			searchMode: document.getElementById('modeButton').textContent === "职位信息" ? 1 : 2,
			searchInput: searchInput,
			page: page===undefined?1:page,
			pageSize: pageSize===undefined?10:pageSize
		})
	}).then(res => res.json())
		.then(res => {
			setSearchResult(res.data);
			setGetToTal(res.total);
		}
		).catch(err => {
			console.log(err);
		}
		);
	addHistory(searchInput);
	setSearchResult([]);
}

