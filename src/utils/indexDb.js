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

export function addHistory(value, userMode) {
	let mode = document.getElementById("modeButton").textContent === "职位信息" ? jobDbName : expDbName;
	if (userMode!==undefined){
		mode = userMode;
	}
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

export function createUser(){
	let request = window.indexedDB.open('person', 1);
	request.onsuccess = function (event) {
		let db = event.target.result;
		if (!db.objectStoreNames.contains('person')) {
			let objectStore = db.createObjectStore('person', { keyPath: 'id' });
			objectStore.add({id:1, intendedPosition:'前端',province:"浙江",location:"杭州",identity:"应届毕业生",education:"本科"});
		}
		console.log("11 create success");
	};
}
  
export function readUser(){
	let d = window.indexedDB.open('person', 1);
	d.onsuccess = function (e) {
		let db = e.target.result;
		let transaction = db.transaction(['person']);
		let objectStore = transaction.objectStore('person');
		let request = objectStore.get(1);

		request.onerror = function() {
			console.log('事务失败');
		};

		request.onsuccess = function() {
			if (request.result) {
				console.log('UserInfo: ' + request.result.intendedPosition);
				console.log(request.result);
				return request.result;
			} else {
				console.log('未获得数据记录');
			}
		};
	};
	
}

export function updateUser(intendedP,pro,loc,iden,edu){
	let db = window.indexedDB.open('person', 1);
	db.onsuccess = function (e) {
		let db = e.target.result;
		let request = db.transaction(['person'], 'readwrite')
			.objectStore('person')
			.put({id:1,intendedPosition:intendedP,province:pro,location:loc,identity:iden,education:edu});
		
		request.onsuccess = function () {
			console.log('数据更新成功');
		};
		
		request.onerror = function () {
			console.log('数据更新失败');
		};
	};
}