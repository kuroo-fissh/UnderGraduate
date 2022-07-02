import {getSearchHistory} from './indexDb';
let searchHistory = [];
//实现搜索功能

//实现获取搜索历史功能
export function showSearchSueegst() {
	searchHistory = getSearchHistory(document.getElementById("modeButton").textContent==="职位信息"?1:2);
	console.log("search history:",searchHistory);
}