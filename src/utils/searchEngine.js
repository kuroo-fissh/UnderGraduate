import {addHistory} from './indexDb';
export function doSearch(searchInput,setSearchResult) {
	addHistory(searchInput);
	setSearchResult([]);
}
