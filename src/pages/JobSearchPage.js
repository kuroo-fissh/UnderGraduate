import React,{useState} from "react";
import {TopSearchArea} from "../component/Search/TopSearchArea";

const JobSearchPage = () => {
	// 任务搜索结果
	const [searchResult, setSearchResult] = useState([
		{
			"id": "1",
			"title": "前端开发工程师",
			"company": "百度",
			"salary": "10k-20k",
			"city": "北京",
		},
		{
			"id": "2",
			"title": "后端开发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "北京",
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
			<TopSearchArea setSearchResult={setSearchResult}/>
			<h1>任务搜索结果</h1>
			<ul>
				{searchResult.map(item => (
					<li key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.company}</p>
						<p>{item.salary}</p>
						<p>{item.city}</p>
					</li>
				))}
			</ul>
      
		</div>
	);
};

export default JobSearchPage;