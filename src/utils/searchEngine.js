import {addHistory} from './indexDb';
export function doSearch(searchInput,setSearchResult) {
	console.log("dosearch",searchInput);
	addHistory(searchInput);
	setSearchResult([]);
}
