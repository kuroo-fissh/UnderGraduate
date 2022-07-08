/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import 'antd/dist/antd.min.css';
import pic from "../image/img.png";
import { Navigate } from 'react-router-dom';
import { Input,Radio,Layout,Form,Row,Col, Space, Carousel, Avatar} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Cascader, Select } from 'antd';
import { MainSearchArea } from '../component/MainSearch/MainSearchArea.js';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select;
const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
);

const onChange = item => {
	console.log(item);
};

const selectBefore = (
	<Select defaultValue="职位信息" className="select-before">
		<Option value="job">职位信息</Option>
		<Option value="interview">面试经验</Option>
	</Select>
);

let sectionStyle = {
	width: '100%',
	height: '100%',
	// makesure here is String确保这里是一个字符串，以下是es6写法
	backgroundImage: `url(${pic})` 
};

const SearchPage = () => {

	const [content, setContent] = useState('');
	const [check, setCheck] = useState(0);
	const [current, setCurrent] = useState('Search');


	const SearchContentChange = (item) => {
		setContent(item.target.value, console.log("content: " + content));
	};

	const ChangeStatus = () => {
		setCurrent('Search', console.log("current:",current, "content:",content));
	};

	const [homepageRecommend, sethomepageRecommend] = useState([
		{
			"id" : "",
			"title" : "",
			"salary" : "",
			"location" : "",
			"company" : "",
		}
	]);

	const [userInfo, setUserInfo] = useState({
		"intendedPosition": "前端",
		"province":"浙江",
		"location":"杭州",
		"identity":"应届毕业生",
		"education":"本科",              
	});

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
		{
			"id": "3",
			"title": "后端开发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "北",
		},
		{
			"id": "4",
			"title": "后端开发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "京",
		},
		{
			"id": "5",
			"title": "端开发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "北京",
		},
		{
			"id": "6",
			"title": "后端发工程师",
			"company": "百度",
			"salary": "20k-30k",
			"city": "北京",
		},
	]);

	React.useEffect(() => {
		const SearchContentChangeTmp = async () => {
			//setContent(item.target.value);
			console.log("content: " + content);
		};
		SearchContentChangeTmp();
		// const getData = async () => {
		// 	fetch('/homepageRecommend', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: body
		// 	}).then(res => res.json())
		// 		.then(res => {
		// 			sethomepageRecommend(res);
		// 		}
		// 		).catch(err => {
		// 			console.log(err);
		// 		}
		// 		);
		// };
		// getData();

		const postUserInfo = async (userInfo) => {
			console.log("post info execute");
			axios({
				method: 'post',
				url: 'http://localhost:8000/homepageRecommend/',
				data: {
					"intendedPosition": userInfo.intendedPosition,
					"province": userInfo.province,
					"location": userInfo.location,
					"identity": userInfo.identity,
					"education": userInfo.education,
				}
			}).then(data => {
				console.log(data);
			}).catch(function (error) {
				console.log(error);
			});
		};
		postUserInfo(userInfo);

		const ChangeStatusTmp = async () => {
			console.log("current:",current, "content:",content);
		};
		ChangeStatusTmp();

		const changeColor = () => {
			const modeButtoncolor = document.getElementById("modeButton");
			modeButtoncolor.style.backgroundColor = "#E29E30";
			const inputAreacolor = document.getElementById("inputArea");
			inputAreacolor.style.border = "white";
			const searchIconcolor = document.getElementById("searchIcon");
			searchIconcolor.style.color = "#4CE3C4";
			searchIconcolor.style.backgroundColor = "white";
			const searchButtoncolor = document.getElementById("searchButton");
			searchButtoncolor.style.backgroundColor = "white";
			searchButtoncolor.style.border = "none";
			searchButtoncolor.style.height = "25px";
			searchButtoncolor.style.width = "30px";
			const searchAreacolor = document.getElementById("searchArea");
			searchAreacolor.style.backgroundColor = "white";
		};
		changeColor();

	}, [content], [current]);

	if (current === 'Search') {
		return (
			<Form name="basic"
				initialValues={{ remember: true }}
				autoComplete="off"
				style={sectionStyle}> 
				<div style={{marginLeft: "1350px", padding:"10px"}} onClick = {() => {window.open("http://leetcode.cn/problemset/all/");}}>
					<Avatar size={50} icon={<UserOutlined />} style = {{backgroundColor: '#87d068'}}/>
				</div>
				<div style={{display : "flex", flexDirection : "row", justifyContent : "center", marginTop: "-80px"}}>
					<Form.Item style={{width : 1000, border :1}}>
						<br/>
						<br/>
						<br/>
						<h1 style={{display : "flex", flexDirection : "row", justifyContent : "center", fontWeight : 'bolder', color : "white", fontSize : "80px"}} >Under Graduate</h1>
						<Form.Item name="content"
							style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>

							<div style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>
								<MainSearchArea setSearchResult={setSearchResult} />
							</div>

							{/* <Search 
								addonBefore={selectBefore}	
								placeholder = "What are you looking for..." 
								enterButton = "搜索"
								onChange={(e)=>setContent(e.target.value)}
								onSearch={()=>setCurrent('InterviewExperience')}/> */}
						</Form.Item>
						<br/>
						<Form.Item style={{padding: "0px 70px"}}> 
							<div >
								<Row gutter={15}>
									{searchResult.map(item => (
										<Col style={{padding : "20px 20px"}}>
											<Card sx={{ width: 250 }}>
												<CardHeader
													action={
														// <IconButton aria-label="settings">
														// 	<MoreVertIcon />
														// </IconButton>
														<Typography sx={{ fontSize: 23 }} color="#FAAD00">
															{item.salary}
														</Typography>
													}
													title = {
														<h5>{item.title}</h5>
													}
													subheader = {
														<h5>{item.city + '·' + item.company}</h5>
													}>
												</CardHeader>
												<CardActions>
													<Button size="small" >learn more</Button>
												</CardActions>
											</Card>
											
										</Col>
									))}
								</Row>
							</div>
						</Form.Item>
						
					</Form.Item>
				</div>
				/</Form>
		);
	}
	else if (current === "InterviewExperience"){
		return (
			<Navigate to = '/InterviewExperience'/>
		);
	}
};

export default SearchPage;