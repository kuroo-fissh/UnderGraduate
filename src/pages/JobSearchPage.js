import React,{useState} from "react";

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
		const fetchData = async () => {
			const result = await fetch("/api/job/search");
			const data = await result.json();
			console.log(data);
			//由于现在data是空的, 所以这里用了个dataNew来替代
			let dataNew = [{
				"id": "1",
				"title": "前端开发工程师",
				"company": "字节",
				"salary": "10k-20k",
				"city": "北京",
			},
			{
				"id": "2",
				"title": "后端开发工程师",
				"company": "字节",
				"salary": "20k-30k",
				"city": "北京",
			},];
			setSearchResult(dataNew);
		};
		fetchData();
		//这里大括号里面的内容是在每次渲染的时候执行的，而不是在组件初始化的时候执行的
		//如果大括号为空，则这个函数只会执行一次
		//如果大括号内有具体的内容，则这个函数会每次渲染的时候都执行一次
		//上面的注释是github上的文档
		//https://reactjs.org/docs/hooks-effect.html
	}, []);
	return (
		<div>
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