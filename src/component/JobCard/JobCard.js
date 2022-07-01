import React from "react";
import Card from '@mui/material/Card';
import { Tag } from "antd";
import './style.css';

export const JobCard = (props) => {

	// eslint-disable-next-line react/prop-types
	const {item: { id,title, company, salary, city, tag}} = props;
	return (
		<Card name={id} className="card-zone">
			<div className="card-content">
				<div className="card-title">{title}</div>
				<div className="card-subtitle">{company}</div>
				<div className="card-subtitle">{salary}</div>
				<div className="card-subtitle">{city}</div>
			</div>
			<div className="card-tag">
				{
					// eslint-disable-next-line react/prop-types
					tag.map((item, index) => {
						return <Tag key={index} color="#4CE3C4">{item}</Tag>;
					}
					)}
			</div>
		</Card>
	);
};