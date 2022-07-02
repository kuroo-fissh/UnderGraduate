import React from "react";

const jobDetail = () => {
	let receiver = window.opener["filter"];
	return (
		<div>
			<div>{receiver.title}</div>
			<div>{receiver.company}</div>
			<div>{receiver.salary}</div>
			<div>{receiver.city}</div>
			<div>{receiver.tags}</div>
			<div>没定的数据写死</div>
		</div>
	);
};

export default jobDetail;