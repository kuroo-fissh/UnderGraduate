/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import 'antd/dist/antd.min.css';
import pic from "../image/img.png";
import { Navigate } from 'react-router-dom';
import { Input,Radio,Layout,Form,Row,Col, Space, Carousel, Divider} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Select } from 'antd';
import axios from 'axios';
import { TopSearchArea } from '../component/TopSearchArea';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

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
	width: "1440px",
	height: "780px",
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
		const SearchContentChangeTmp = async () => {
			//setContent(item.target.value);
			console.log("content: " + content);
		};
		SearchContentChangeTmp();

		const ChangeStatusTmp = async () => {
			console.log("current:",current, "content:",content);
		};
		ChangeStatusTmp();
	}, [content], [current]);

	if (current === 'Search') {
		return (
			<Form name="basic"
				initialValues={{ remember: true }}
				autoComplete="off"
				style={sectionStyle}> 
				
				<div style={{display : "flex", flexDirection : "row", justifyContent : "center"}}>
					<Form.Item style={{width : 700, border :1}}>
						<br/>
						<br/>
						<br/>
						<h1 style={{display : "flex", flexDirection : "row", justifyContent : "center", fontWeight : 'bolder', color : "white", fontSize : "80px"}} >Under Graduate</h1>
						<Form.Item name="content"
							style={{display : "flex", flexDirection : "row", justifyContent : "center"}}
							rules = {[
								{
									required : true,
									message : '请输入搜索内容'
								},
							]}>
							<Search 
								addonBefore={selectBefore}	
								placeholder = "What are you looking for..." 
								enterButton = "搜索"
								onChange={(e)=>setContent(e.target.value)}
								onSearch={()=>setCurrent('InterviewExperience')}/>
						</Form.Item>
						<br/>
						<Form.Item>
							<Row gutter={10}>
								{searchResult.map(item => (
									<Col span={9}>
										<Card sx={{ maxWidth: 700 }}>
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