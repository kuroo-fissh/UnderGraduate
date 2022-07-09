/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../index.css';
import { Layout,Form,Row,Col,Card } from 'antd';
import { TopSearchArea } from '../component/Search/TopSearchArea';
import {TurnPage} from "../component/TurnPage/TurnPage.js";

const { Meta } = Card;
const InterviewExperience = () => {

	const [content, setContent] = useState('');
	const [check, setCheck] = useState(0);
	const [current, setCurrent] = useState('Search');


	const [getToTal, setGetToTal] = useState(100);
	const [getNowSize, setGetNowSize] = useState(10);
	const [getNowPage, setGetNowPage] = useState(1);

	const SearchContentChange = (item) => {
		setContent(item.target.value, console.log("content: " + content));
	};

	const ChangeStatus = () => {
		setCurrent('Search', console.log("current:",current, "content:",content));
	};

	const [searchResult, setSearchResult] = useState([
		{
			"uid":"1",
			"title":"java面经",
			"url":"http://localhost:3000/SearchPage",
		},
		{
			"uid":"2",
			"title":"jaassssssssssva面经",
			"url":"http://localhost:3000/SearchPage",
		},
		{
			"uid":"3",
			"title":"javdasa面经",
			"url":"http://localhost:3000/SearchPage",
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
			<div style={{padding: "10px",boxShadow: "0px 0px 3px #ccc",display:'flex',alignItems:'center',backgroundColor: "#fff"}}>
				<h2 style={{fontSize: "30px", color: '#4CE3C4',marginLeft:'20px',marginRight:'100px', marginBottom: '3px', fontWeight: 'bold'}}>Under Graduate</h2>
				<div>
					<TopSearchArea setSearchResult={setSearchResult} setGetToTal={setGetToTal} page={getNowPage} pageSize={getNowSize} />
				</div>
			</div>
			<Layout>
				<Row style={{marginTop : '20px', marginLeft: '20px'}}>
					{searchResult.map(item => (
						console.log("item:",item),
						<Col span={6} style={{padding: '10px 10px'}}>
							<Card
								cover={
									<img
										alt="example"
										src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
									/>
								}
								style={{ width: 300, height: 300 }}
								actions={[

									<h1 key="1" onClick={() => {window.open(item.link);}} style={{color:"#1baf8f", fontSize:"15px"}}>了解更多</h1>,
									
									
								]}
							>
								<Meta
									title={item.title}
									
								/>
							</Card>
						</Col>
					))}
				</Row>
				<div style={{padding: "10px 40px", display : "flex", flexDirection : "row", justifyContent : "center"}}>
					<TurnPage setSearchResult={setSearchResult} total={getToTal} setGetToTal={setGetToTal} setGetNowSize={setGetNowSize} setGetNowPage={setGetNowPage}/>
				</div>
			</Layout>
		</Form>
	);
};
export default InterviewExperience;