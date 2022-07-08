/* eslint-disable react/prop-types */
import React from "react";
import './style.css';
import { Row } from "antd";
export const DetailHeadline = (props) => {
	const {title} = props;
	const { salary } = props;
	const { company } = props;
	const { province } = props;
	const { location } = props;
	const { academicBg } = props;
	const URL = "http://localhost:3000/SearchPage" ;

	function doJump() {
		console.log(props.item);
		//window["filter"] = props.item;
		window.open(URL);
	}


	return (
		<div style={{backgroundColor:'#52D9B3'}}>
			<Row>
				<div className="head-white">{title}</div>
				<div className="head-yellow">{salary}</div>
				<div className="head-title" onClick={doJump} >Under Graduate</div>
			</Row>

			<Row>
				<div className="sub-head">{company}</div>
				<div className="sub-head" style={{fontWeight:'bolder'}}> | </div>
				<div className="sub-head">{province} {location}</div>
				<div className="sub-head" style={{fontWeight:'bolder'}}> | </div>
				<div className="sub-head">{academicBg}</div>
			</Row>
		</div>
	);
};