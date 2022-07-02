/* eslint-disable react/prop-types */
import React from "react";
import './style.css';

export const JobCard = (props) => {
	const {item: { id,title, company, salary, city, tags}} = props;
	const URL = "http://localhost:3000/jobDetail/id=" + props.item.id;
	function jumpToRelatedJob(e) {
		console.log("dojump");
		e.preventDefault();
	}

	function doJump() {
		console.log(props.item);
		window["filter"] = props.item;
		window.open(URL);
	}


	return (
		<div onClick={doJump}>
			<div name={id} className="card-zone">
				<div className="card-content">
					<div className="card-title">{title}</div>
					<div className="card-name">{company}</div>
				</div>
				<div className="card-content">
					<div className="card-salary">{salary}</div>
					<div className="card-base">{city}</div>
				</div>
			</div>
			<div className="card-tag">
				{
					tags.map(item => (
						<button key={item} className="card-tag-item" onClick={jumpToRelatedJob}>{item}</button>
					))
				}
			</div>
		</div>
	);
};