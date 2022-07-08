import {addHistory} from './indexDb';
export function doSearch(searchInput,setSearchResult,setGetToTal,page,pageSize,selectSalary,selectJob,selectSchool) {
	const searchMode = document.getElementById('modeButton').textContent === "职位信息" ? 1 : 2;
	let body = JSON.stringify({
		searchMode: searchMode,
		searchInput: searchInput,
		page: page===undefined?1:page,
		pageSize: pageSize===undefined?10:pageSize,
		salary: selectSalary===undefined||selectSalary.length===0?['不限']:selectSalary,
		job: selectJob===undefined||selectJob.length===0?['不限']:selectJob,
		school: selectSchool===undefined||selectSchool.length===0?['不限']:selectSchool
	});
	console.log(body);
	if (!window.location.pathname.includes('input')) {
		window.location.href= document.getElementById('modeButton').textContent === "职位信息" ? '/jobSearch/input=' + searchInput : '/InterviewExperience/input=' + searchInput;	
	}
	else if (searchMode===1&&!window.location.pathname.includes('/jobSearch')) {
		window.location.href='/jobSearch'+'/input='+searchInput;
	}
	else if (searchMode===2&&!window.location.pathname.includes('/InterviewExperience')) {
		window.location.href='/InterviewExperience'+'/input='+searchInput;
	}
	//如果现在的input和url中的input不一样，则更新url
	else if (window.location.pathname.includes('input')&&searchInput!==decodeURIComponent(window.location.pathname.split('/')[window.location.pathname.split('/').length-1].split('=')[1])) {
		window.location.href= window.location.pathname.split('/')[window.location.pathname.split('/').length-1].split('=')[0]+'='+searchInput;
	}
	else {
		addHistory(searchInput);
		fetch('/search', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			body: body
		}).then(res => res.json())
			.then(res => {
				setSearchResult(res.data);
				setGetToTal(res.total);
			}
			).catch(err => {
				console.log(err);
			}
			);
	
	}	
}

