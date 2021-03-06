/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";
import { Card, CardContent, CardActions, Button } from "@mui/material";
//import { Row } from "antd";

export const DetailRecommendCard = (props) => {
	const {item: { uid, title, company, salary, province, location },} = props;
	const URL = "http://localhost:3000/jobDetail/id=" + uid;

	// function doJump(url) {
	// 	console.log(url);
	// 	window.open(url);
	// }

	return (
		<Card sx={{ minWidth: 350, minHeight: 100 }} className="card-total" variant="outlined" >
			<CardContent>
				<div>
					<text className="card-title">{title}</text>
					<text className="card-salary">{salary}</text>
				</div>
				<div style={{marginLeft:"5px", marginTop:"10px"}}>
					<text style={{fontSize:"15px",fontWeight:"350", color:"#595959"}}>{company} · {province} {location}</text>
				</div>
			</CardContent>
			<CardActions>
				<Button onClick={()=>{
					console.log(URL);
					window.open(URL);
				}} style={{marginLeft:"5px", fontSize:"15px",fontWeight:"350", color:"#00C8AB"}}>
				了解更多
				</Button>
			</CardActions>
		</Card>
	);
};
