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
import { Cascader } from 'antd';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { TopSearchArea } from '../component/Search/TopSearchArea';
import { color, padding } from '@mui/system';
import { createUser, updateUser, addInitialUser, readUser } from '../utils/indexDb';
import { CardContent, Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { TextField } from '@mui/material';
import { DialogActions } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { Select } from '@mui/material';

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

const count = 0;


const selectBefore = (
	<Select defaultValue="职位信息" className="select-before">
		<Option value="job">职位信息</Option>
		<Option value="interview">面试经验</Option>
	</Select>
);

let sectionStyle = {
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

	// const [userInfo, setUserInfo] = useState({
	// 	"intendedPosition": "前端",
	// 	"province":"浙江",
	// 	"location":"杭州",
	// 	"identity":"应届毕业生",
	// 	"education":"本科",              
	// });

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

	//用户画像初始化
	//createUser();
	//const [userInfo,setUserInfo]=useState(readUser())
	const [intendedP,setIntendedP]=useState("前端");
	const [loc,setLoc]=useState("杭州");
	const [pro,setPro]=useState("浙江");
	const [edu,setEdu]=useState("本科");
	const [iden,setIden]=useState("应届毕业生");

	const handleChangePro = (event) =>{
		setPro(event.target.value);
	};
	const handleChangeLoc = (event) =>{
		setLoc(event.target.value);
	};
	const handleChangeInten = (event) =>{
		setIntendedP(event.target.value);
	};
	const handleChangeIden = (event) =>{
		setIden(event.target.value);
	};
	const handleChangeEdu = (event) =>{
		setEdu(event.target.value);
	};
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	
	function readUserInfo(){
		let result=readUser();
		
		setIntendedP(result.intendedPosition);
		setLoc(result.location);
		setPro(result.province);
		setIden(result.identity);
		setEdu(result.education);
		console.log("result"+result);
	}
	function updateUserInfo(intendedP,pro,loc,iden,edu){
		updateUser(intendedP,pro,loc,iden,edu);
		//readUserInfo();
		//postUserInfo();
	}

	const LinkToJobDetail = (id) => {
		console.log("http://localhost:3000/jobDetail/id=" + id);
		window.open("http://localhost:3000/jobDetail/id=" + id);
	};

	const postUserInfo = async () => {
		//let userInfo = readUser();
		console.log("post info execute");
		axios({
			method: 'post',
			url: 'http://localhost:8000/homepageRecommend/',
			data: {
				"intendedPosition": intendedP,
				"province": pro,
				"location": loc,
				"identity": iden,
				"education": edu,
			}
		}).then(data => {
			console.log(data.data.jobs);
			sethomepageRecommend(data.data.jobs);
		}).catch(function (error) {
			console.log(error);
		});
	};

	const handleClose = () => {
		setOpen(false);
		postUserInfo();
		//updateUserInfo(intendedP,pro,loc,iden,edu);
		
	};
	React.useEffect(() => {
		//createUser();
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

		// const postUserInfo = async () => {
		// 	//let userInfo = readUser();
		// 	console.log("post info execute");
		// 	axios({
		// 		method: 'post',
		// 		url: 'http://localhost:8000/homepageRecommend/',
		// 		data: {
		// 			"intendedPosition": intendedP,
		// 			"province": pro,
		// 			"location": loc,
		// 			"identity": iden,
		// 			"education": edu,
		// 		}
		// 	}).then(data => {
		// 		console.log(data.data.jobs);
		// 		sethomepageRecommend(data.data.jobs);
		// 	}).catch(function (error) {
		// 		console.log(error);
		// 	});
		// };
		postUserInfo();

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
		};
		changeColor();


	}, [content], [current],[homepageRecommend]);

	if (current === 'Search') {
		return (
			<div style={{backgroundImage: `url(${pic})`,width:'100%',height:'48.75rem', backgroundSize:"cover"}}>
				<Form name="basic"> 
					<div style={{marginLeft: "1350px", padding:"10px"}} onClick = {handleClickOpen}>
						<Avatar size={50} icon={<UserOutlined />} style = {{backgroundColor: '#87d068'}}/>
					</div>
					<div style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>
						<Form.Item style={{width : 1000, border :1}}>
							<br/>
							<h1 style={{display : "flex", justifyContent : "center", fontWeight : 'bolder', color : "white", fontSize : "80px",marginBottom: "0px"}} >Under Graduate</h1>
							<Form.Item name="content"
								style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>
								<div style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>
									<TopSearchArea setSearchResult={setSearchResult} />
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
								<Carousel autoplay >
									<div>
										<Row gutter={15}>
											{homepageRecommend.slice(0,6).map(item => (
												<Col style={{padding : "20px 20px"}}>
													<Card sx={{ width: 250, height:200 }}>
														<CardContent>
															<div style={{color:"#595959", fontSize:'20px'}} >
																{item.title}
															</div>
															<div style={{color:"#FAAD00", fontSize:'18px'}} >
																{item.salary}
															</div>
															<div style={{color:"#595959", fontSize:'14px'}} >
																{item.location + '·' + item.company}
															</div>
														</CardContent>
											
														<CardActions>
															<Button size="small" onClick={()=>LinkToJobDetail(item.uid)} style={{fontSize:"14px", color:"#00C8AB"}}>了解更多</Button>
														</CardActions>
													</Card>
												</Col>
											))}
											
										</Row>
									</div>
									<div>
										<Row gutter={15}>
											{homepageRecommend.slice(0,6).map(item => (
												<Col style={{padding : "20px 20px"}}>
													<Card sx={{ width: 250, height:200 }}>
														<CardContent>
															<div style={{color:"#595959", fontSize:'20px'}} >
																{item.title}
															</div>
															<div style={{color:"#FAAD00", fontSize:'18px'}} >
																{item.salary}
															</div>
															<div style={{color:"#595959", fontSize:'14px'}} >
																{item.location + '·' + item.company}
															</div>
														</CardContent>
											
														<CardActions>
															<Button size="small" onClick={()=>LinkToJobDetail(item.uid)} style={{ fontSize:"14px",color:"#00C8AB"}}>了解更多</Button>
														</CardActions>
													</Card>
												</Col>
											))}
										</Row>
									</div>
								</Carousel>
							
							</Form.Item>
						
						</Form.Item>
					</div>
					<Dialog open={open} onClose={handleClose}>
						<DialogTitle style={{color:'#71D9BB', fontSize:'25px', textAlign:'center' }}>用户信息</DialogTitle>
						<DialogContent>
							<DialogContentText>
								请填写您的用户画像，以便于我们为您准备个性化推荐~
							</DialogContentText>
							<div style={{marginBottom:'10px', marginTop:'10px'}}>
								<TextField
									autoFocus
									margin="normal"
									id="province"
									label="省份(ex.浙江)"
									variant="standard"
									value={pro}
									onChange={handleChangePro}
								/>
								<TextField
									autoFocus
									margin="normal"
									id="city"
									label="城市(ex.杭州)"
									variant="standard"
									value={loc}
									onChange={handleChangeLoc}
								/>
							</div>
							<div style={{marginBottom:'10px', marginTop:'10px'}}>
								<Select
									labelId="education"
									id="education"
									label="Age"
									value={edu}
									onChange={handleChangeEdu}
									variant="standard"
								>
									<MenuItem value={"大专"}>大专</MenuItem>
									<MenuItem value={"本科"}>本科及以上</MenuItem>
								</Select>
								<Select
									labelId="education"
									id="education"
									label="Age"
									value={iden}
									onChange={handleChangeIden}
									variant="standard"
								>
									<MenuItem value={"在校生"}>在校生</MenuItem>
									<MenuItem value={"应届毕业生"}>应届毕业生</MenuItem>
									<MenuItem value={"社招人士"}>社招人士</MenuItem>
								</Select>
							</div>
							
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>保存</Button>
						</DialogActions>
					</Dialog>
				/</Form>
			</div>
			
		);
	}
	else if (current === "InterviewExperience"){
		return (
			<Navigate to = '/InterviewExperience'/>
		);
	}
};

export default SearchPage;