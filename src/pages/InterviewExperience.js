/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import { Navigate } from 'react-router-dom';
import { Input,Radio,Layout,Form,Row,Col, Space, Carousel, Divider, Card, Tag, Button,Popconfirm } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { FrownOutlined , QuestionCircleOutlined } from '@ant-design/icons';
import { Cascader, Select } from 'antd';
import { TopSearchArea } from '../component/Search/TopSearchArea';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const InterviewExperience = () => {

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
			"title": "阿里、腾讯、字节、快手、美团 | Java开发岗 | 2020…",
			"tags": ["面试经验","Java", "4+"],
		},
		{
			"id": "2",
			"title": "后端开发工程师",
			"tags": ["面试经验","Java", "5+"],
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

	return (
		<Form>
			<Row>
				<h2 style={{fontSize: "30px", color: '#4CE3C4',marginLeft:'20px',marginRight:'20px', marginBottom: '3px', fontWeight: 'bold'}}>Under Graduate</h2>
				<div>
					<TopSearchArea setSearchResult={setSearchResult}/>
				</div>
			</Row>
			<Layout>
				<Row style={{marginTop : '10px', marginLeft: '10px'}} gutter={10}>
					{searchResult.map(item => (
						<Col span={5}>
							<Card
								title={item.title}
							>
								{item.tags.map(tag => (
									<Tag color="cyan">{tag}</Tag>))
								}	
							</Card>
						</Col>
					))}
				</Row>
			</Layout>
		</Form>
	);
};
export default InterviewExperience;