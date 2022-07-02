import React,{useState} from "react";
import {TopSearchArea} from "../component/Search/TopSearchArea";
import {JobCard} from "../component/JobCard/JobCard";
import { Carousel, message} from 'antd';
import leetcodepic from "../image/leetcode.png";
import csdnpic from "../image/csdn.png";
import adpic from "../image/ad.png";

const LeetcodecontentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	backgroundImage: `url(${leetcodepic})` 
};
const CSDNcodeContentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	backgroundImage: `url(${csdnpic})` 
};
const AdcodeContentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	backgroundImage: `url(${adpic})` 
};
const key = 'updatable';
const info = () => {
	message.loading({ content: 'Try contacting...', key });
	setTimeout(() => {
		message.warn({ content: 'Unfortunately contact failed but im not really sorry about that lmao', key, duration: 2 });
	}, 1000);
};
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

	React.useEffect(() => {
		// 加载任务搜索结果
		const showData = async () => {
			console.log("search result:", searchResult);
		};
		showData();
	}, [searchResult]);


	return (
		<div style={{backgroundColor: "#F2F2F2"}}>
			<div style={{padding: "10px",boxShadow: "0px 0px 3px #ccc",display:'flex',alignItems:'center',backgroundColor: "#fff"}}>
				<h2 style={{fontSize: "30px", color: '#4CE3C4',marginLeft:'20px',marginRight:'100px', marginBottom: '3px', fontWeight: 'bold'}}>Under Graduate</h2>
				<div>
					<TopSearchArea setSearchResult={setSearchResult}/>
				</div>
			</div>
			<div style={{padding: "10px 40px"}}>
				<Carousel autoplay>
					<div onClick={() => {window.open("http://leetcode.cn/problemset/all/");} }>
						<h3 style={LeetcodecontentStyle}>.</h3>
					</div>
					<div onClick={() => {window.open("https://bbs.csdn.net");} }>
						<h3 style={CSDNcodeContentStyle}>.</h3>
					</div>
					<div onClick={info }>
						<h3 style={AdcodeContentStyle}>.</h3>
					</div>
				</Carousel>
			</div>
			<div style={{padding: "1px 40px"}}>
				{searchResult.map(item => (
					<JobCard key={item.id} item={item}/>
				))}
			</div>
		</div>
	);
};

export default JobSearchPage;