/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";
import { Card, CardContent, CardActions, Button } from "@mui/material";
//import { Row } from "antd";

export const DetailRecommendCard = (props) => {
	const {item: { id, title, company, salary, province, location },} = props;
	const URL = "http://localhost:3000/jobDetail/id=" + { id };

	function doJump() {
		console.log(props.item);
		window["filter"] = props.item;
		window.open(URL);
	}

	return (
		<Card sx={{ minWidth: 350, minHeight: 100 }} className="card-total" variant="outlined" >
			<CardContent>
				<text className="card-title">{title}</text>
				<text className="card-salary">{salary}</text>
				<div className="card-content">{company} · {province} {location}</div>
				
			</CardContent>
			<CardActions>
				<Button className="card-link" onClick={doJump}>
				了解更多
				</Button>
			</CardActions>
		</Card>
	);
};
