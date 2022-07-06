import React,{useState} from "react";
import {TopSearchArea} from "../component/Search/TopSearchArea";
import {JobCard} from "../component/JobCard/JobCard";
import {TurnPage} from "../component/TurnPage/TurnPage.js";
import {AutoPlay} from "../component/AutoPlay/AutoPlay";

const JobSearchPage = () => {
	// 任务搜索结果
	const [searchResult, setSearchResult] = useState([
		{
			"id": "1",
			"title": "前端开发工程师",
			"company": "百度",
			"salary": "10k-20k",
			"city": "北京",
			"tags": ["前端", "百度", "北京"],
		},
		{
			"id": "2",
			"title": "后端开发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "北京",
			"tags": ["后端", "百度", "北京"],
		},
	]);

	const [getToTal, setGetToTal] = useState(100);
	const [getNowSize, setGetNowSize] = useState(10);
	const [getNowPage, setGetNowPage] = useState(1);

	React.useEffect(() => {
		// 加载任务搜索结果
		const showData = async () => {
			console.log("total",getToTal);
			console.log("search result:", searchResult);
		};
		showData();
	}, [searchResult]);


	return (
		<div style={{backgroundColor: "#F2F2F2"}}>
			<div style={{padding: "10px",boxShadow: "0px 0px 3px #ccc",display:'flex',alignItems:'center',backgroundColor: "#fff"}}>
				<h2 style={{fontSize: "30px", color: '#4CE3C4',marginLeft:'20px',marginRight:'100px', marginBottom: '3px', fontWeight: 'bold'}}>Under Graduate</h2>
				<div>
					<TopSearchArea setSearchResult={setSearchResult} setGetToTal={setGetToTal} page={getNowPage} pageSize={getNowSize}/>
				</div>
			</div>		
			<AutoPlay/>			
			<div style={{padding: "1px 40px"}}>
				{searchResult.map(item => (
					<JobCard key={item.id} item={item}/>
				))}
			</div>
			<div style={{padding: "10px 40px"}}>
				<TurnPage setSearchResult={setSearchResult} total={getToTal} setGetToTal={setGetToTal} setGetNowSize={setGetNowSize} setGetNowPage={setGetNowPage}/>
			</div>
		</div>
	);
};

export default JobSearchPage;