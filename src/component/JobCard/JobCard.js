/* eslint-disable react/prop-types */
import React from "react";
import './style.css';

export const JobCard = (props) => {
	const {item: { uid,title, company, salary, city, tags}} = props;
	const URL = "http://localhost:3000/jobDetail/id=" + props.item.uid;
	function jumpToRelatedJob(e) {
		console.log("dojump");
		e.preventDefault();
	}

	function doJump() {
		window.open(URL);
	}


	return (
		<div onClick={doJump}>
			<div name={uid} className="card-zone">
				<div className="card-content">
					<div className="card-title" dangerouslySetInnerHTML={{ __html: title }}></div>
					<div className="card-name" dangerouslySetInnerHTML={{ __html: company }}></div>
				</div>
				<div className="card-content">
					<div className="card-salary" dangerouslySetInnerHTML={{ __html: salary }}></div>
					<div className="card-base" dangerouslySetInnerHTML={{ __html: city }}></div>
				</div>
			</div>
			<div className="card-tag">
				{
					tags.map(item => (
						<button key={item} className="card-tag-item" onClick={jumpToRelatedJob} dangerouslySetInnerHTML={{ __html: item }}></button>
					))
				}
			</div>
		</div>
	);
};