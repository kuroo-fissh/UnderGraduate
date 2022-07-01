import React from "react";
import './style.css';

export const JobCard = (props) => {

	function jumpToRelatedJob(e) {
		console.log("dojump");
		e.preventDefault();
	}

	// eslint-disable-next-line react/prop-types
	const {item: { id,title, company, salary, city, tags}} = props;
	return (
		<div>
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
				// eslint-disable-next-line react/prop-types
					tags.map(item => (
						<button key={item} className="card-tag-item" onClick={jumpToRelatedJob}>{item}</button>
					))
				}
			</div>
		</div>
	);
};