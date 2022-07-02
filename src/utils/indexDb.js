const jobDbName = 'jobDb';
const expDbName = 'expDb';
let returnValue = [	];

export function createDb(mode){
	let db = window.indexedDB.open(mode, 1);
	db.onupgradeneeded = function (e) {
		let db = e.target.result;
		if (!db.objectStoreNames.contains(mode===jobDbName ? 'jobHistory' : 'expHistory')) {
			db.createObjectStore(mode===jobDbName ? 'jobHistory' : 'expHistory', { autoIncrement: true });
		}
	};
}

export function addHistory(value) {
	let mode = document.getElementById("modeButton").textContent === "职位信息" ? jobDbName : expDbName;
	let db = window.indexedDB.open(mode, 1);
	db.onsuccess = function (e) {
		let db = e.target.result;
		let transaction = db.transaction(mode===jobDbName ? 'jobHistory' : 'expHistory', 'readwrite');
		let store = transaction.objectStore(mode===jobDbName ? 'jobHistory' : 'expHistory');
		store.add(value);
	};
}


export function getSearchHistory(mode){
	return new Promise((resolve) => {
		returnValue = [];
		let db = window.indexedDB.open(mode===1 ? jobDbName : expDbName, 1);
		db.onsuccess = function (e) {
			let db = e.target.result;
			let transaction = db.transaction(mode===1 ? 'jobHistory' : 'expHistory', 'readonly');
			let store = transaction.objectStore(mode===1 ? 'jobHistory' : 'expHistory');
			let request = store.openCursor();
			request.onsuccess = function (e) {
				let cursor = e.target.result;
				if (cursor) {
					if (cursor.value.length > 0) {
						returnValue.unshift(cursor.value);
					}
					cursor.continue();
				} else {
					resolve(returnValue);
				}
			};
		};
	});
}