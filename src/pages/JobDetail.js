import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import '../component/Details/style.css';
import {Grid,Divider,Card, CardActions, Button, CardContent} from '@mui/material';
import { DetailHeadline } from '../component/Details/DetailHeadline';
import { DetailRecommendCard } from '../component/DetailRecommendCard/DetailRecommendWork';
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post["Content-Type"] = "application/json";


const jobDetail = () => {
	//从url中获取id
	const id = window.location.href.split("=")[1];

	// useEffect(() => {
	// 	upload();
	// });
	
	
	const [detail,setDetail]=useState({
		"uid": "1",
		"title": "前端开发工程师",
		"company": "百度",
		"salary": "10k-20k",
		"location": "中南海",
		"academic_bg": "本科及以上",
		"exp_bg": "工作三年及以上",
		"corporation_scale": "10000人以上",
		"business_scope": "社交软件、游戏开发、音乐平台",
		"time": "2022.6.23",
		"url": "http://localhost:3000/SearchPage",
		"province": "北京",
		"source": "牛客网",
		"requirement": "这里是任职要求",
		"responsibility": "这里是工作职责",
	});

	const [recommendWork,setRecommendWork]=useState([{
		"uid": "1",
		"title": "前端开发工程师",
		"company": "阿里",
		"salary": "15k-20k",
		"province": "浙江",
		"location": "杭州",
	},{
		"uid": "2",
		"title": "前端开发工程师",
		"company": "阿里",
		"salary": "150k-200k",
		"province": "浙江",
		"location": "杭州",
	},]);

	const [recommendEx, setRecommendEx] = useState([
		{
			"uid":"1",
			"title":"java面经",
			"url":"http://localhost:3000/SearchPage",
		},
		{
			"uid":"2",
			"title":"Python面经",
			"url":"http://localhost:3000/SearchPage",
		},
	]);


	useEffect(()=>{
		console.log("start");
		const getData = async (id) => {
			axios({
				method: 'get',
				url: 'http://localhost:8000/showTitleInfo/'+id+'/',
			}).then(data => {
				console.log(data);
				setDetail(data.data);
			}).catch(function (error) {
				console.log(error);
			});
		};
		getData(id);
		const getRecommendJob = async (id) => {
			axios({
				method: 'get',
				url: 'http://localhost:8000/similarJobs/'+id+'/',
			}).then(data => {
				console.log(data);
				setRecommendWork(data.data.jobs);
			}).catch(function (error) {
				console.log(error);
			});
		};
		getRecommendJob(id);
		const getRecommendEx = async (id) => {
			axios({
				method: 'get',
				url: 'http://localhost:8000/relatedExperiences/'+id+'/',
			}).then(data => {
				console.log(data);
				setRecommendEx(data.data.experiences);
			}).catch(function (error) {
				console.log(error);
			});
		};
		getRecommendEx(id);
	},[]);

	// const detail = {
	// 	"id": "1",
	// 	"title": "前端开发工程师",
	// 	"company": "百度",
	// 	"salary": "10k-20k",
	// 	"location": "中南海",
	// 	"academic_bg": "本科及以上",
	// 	"exp_bg": "工作三年及以上",
	// 	"corporation_scale": "10000人以上",
	// 	"business_scope": "社交软件、游戏开发、音乐平台",
	// 	"time": "2022.6.23",
	// 	"url": "http://localhost:3000/SearchPage",
	// 	"province": "北京",
	// 	"source": "牛客网",
	// 	"requirement": "这里是任职要求",
	// 	"responsibility": "这里是工作职责",
	// };

	// const recommendWork = [
	// 	{
	// 		"id": "1",
	// 		"title": "前端开发工程师",
	// 		"company": "阿里",
	// 		"salary": "15k-20k",
	// 		"province": "浙江",
	// 		"location": "杭州",
	// 	},{
	// 		"id": "2",
	// 		"title": "前端开发工程师",
	// 		"company": "阿里",
	// 		"salary": "150k-200k",
	// 		"province": "浙江",
	// 		"location": "杭州",
	// 	},
	// ];

	// const recommendEx = [
	// 	{
	// 		"id":"1",
	// 		"title":"java面经",
	// 		"url":"http://localhost:3000/SearchPage",
	// 	},
	// 	{
	// 		"id":"2",
	// 		"title":"Python面经",
	// 		"url":"http://localhost:3000/SearchPage",
	// 	},
	// ];

	function doJumpEx(url) {
		window.open(url);
	}

	function doJump() {
		console.log(detail);
		window.open(detail.url);
	}

	return (
		<>
			<DetailHeadline title={detail.title} company={detail.company} salary={detail.salary} academicBg={detail.academic_bg} province={detail.province} location={detail.location}/>
			
			<Grid container>
				<Grid item xs={8} style={{marginRight:'10px'}}>
					<div className='small-head'>
						职位描述
					</div>
					<div style={{marginTop:'15px', marginBottom:'15px'}}>
						<text className='content-head'>
							【公司规模】
						</text>
						<text className='content'>
							{detail.corporation_scale}
						</text>
					</div>
					<div style={{marginTop:'15px', marginBottom:'15px'}}>
						<text className='content-head' >
							【公司业务范畴】
						</text>
						<text className='content'>
							{detail.business_scope}
						</text>
					</div>
					<div style={{marginTop:'15px', marginBottom:'15px'}}>
						<text className='content-head'>
							【发布时间】
						</text>
						<text className='content'>
							{detail.time}
						</text>
					</div>
					<div className='content-head'>
						【工作经历要求】
					</div>
					<div className='content'>
						{detail.exp_bg}
					</div>
			
					<div className='content-head'>
						【工作职责】
					</div>
					<div className='content'>
						{detail.responsibility}
					</div>
					<div className='content-head'>
						【任职要求】
					</div>
					<div className='content'>
						{detail.requirement}
					</div>
					<Button style={{marginLeft:"20px", fontSize:"18px",fontWeight:"350", color:"#00C8AB"}} onClick={doJump}>
						【查看原招聘链接，了解更多】
					</Button>
					
				</Grid>
				<Divider orientation="vertical" flexItem variant="middle"></Divider>
				<Grid item xs={3.5}>
					<div className='small-head'>相似职位</div>
					{recommendWork.map(item => (
						<DetailRecommendCard key={item.uid} item={item}/>
					))}
					
					<div className='small-head'>面试经验</div>
					{recommendEx.map(item =>(
						<Card key={item.id} sx={{ minWidth: 350 , minHeight: 100}} style={{marginLeft:'30px',marginRight:'10px', marginBottom:'15px', backgroundColor:'#ffffff'}} variant="outlined">
							<CardContent>
								<div style={{marginRight:'50px', fontSize:'21px', color:'#595959'}}>
									{item.title}
								</div>
							</CardContent>
							<CardActions>
								<Button style={{fontSize:"15px",fontWeight:"350", color:"#00C8AB"}} onClick={doJumpEx(item.link)}>了解更多</Button>
							</CardActions>
						</Card>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default jobDetail;