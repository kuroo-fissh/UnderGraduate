/* eslint-disable no-unused-vars */
import {getSearchHistory} from './indexDb';
let searchHistory = [];
//实现搜索功能

//实现获取搜索历史功能
export async function showSearchSueegst() {
	showDropDownSuggestMenu();
	searchHistory = await getSearchHistory(document.getElementById("modeButton").textContent === "职位信息" ? 1 : 2);
	console.log(searchHistory);
	changeSuggestMenu(searchHistory);
}

export function showDropDownSuggestMenu() {
	//这里实现交互
	document.getElementById("suggestDropdown").classList.toggle("show");
}

export function changeSuggestMenu(suggestMenu){
	let suggestMenuDom = document.getElementById("suggestDropdown");
	//清除suggestDom
	while (suggestMenuDom.firstChild) {
		suggestMenuDom.removeChild(suggestMenuDom.firstChild);
	}
	//添加一个button，名为最近，宽度与高度与suggestDom一致
	suggestMenuDom.innerHTML = "";
	let button = document.createElement("button");
	button.textContent = "最近";
	button.style.width = '450px';
	button.style.height = '34px';
	button.style.border = 'none';
	button.style.textAlign = 'left';
	button.style.fontSize = '14px';
	button.style.color = '#8c8c8c';
	button.style.fontWeight = 'bold';
	button.style.paddingLeft = '10px';
	button.id = "SuggestFlagButton";

	suggestMenuDom.appendChild(button);
	suggestMenu.forEach(item => {
		let a = document.createElement("a");
		a.textContent = item;
		a.onclick = function () {
			document.getElementById("inputArea").value = item;
		};
		suggestMenuDom.appendChild(a);
	}
	);
}