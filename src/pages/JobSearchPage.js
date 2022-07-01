import React,{useState} from "react";
import {TopSearchArea} from "../component/Search/TopSearchArea";
import Card from '@mui/material/Card';
import {JobCard} from "../component/JobCard/JobCard";
const JobSearchPage = () => {
	// 任务搜索结果
	const [searchResult, setSearchResult] = useState([
		{
			"id": "1",
			"title": "前端开发工程师",
			"company": "百度",
			"salary": "10k-20k",
			"city": "北京",
			"tag": ["前端", "百度", "北京"],
		},
		{
			"id": "2",
			"title": "后端开发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "北京",
			"tag": ["后端", "百度", "北京"],
		},
	]);

	React.useEffect(() => {
		// 加载任务搜索结果
		const showData = async () => {
			console.log(searchResult);
		};
		showData();
	}, [searchResult]);


	return (
		<div>
			<Card style = {{display: "flex", justifyContent: "left", alignItems: "center"}}>
				<h2 style={{fontSize: "40px", color: '#4CE3C4',marginLeft:'20px',marginRight:'40px',marginBottom:'-5px'}}>Under Graduate</h2>
				<div>
					<TopSearchArea setSearchResult={setSearchResult}/>
				</div>
			</Card>
			<div>
				{searchResult.map(item => (
					<JobCard key={item.id} item={item}/>
				))}
			</div>
      
		</div>
	);
};

export default JobSearchPage;