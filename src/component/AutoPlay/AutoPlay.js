import React from 'react';
import { Carousel, message} from 'antd';
import leetcodepic from "../../image/leetcode.png";
import csdnpic from "../../image/csdn.png";
import adpic from "../../image/ad.png";

export const AutoPlay = () => {

	const AdcodeContentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		backgroundImage: `url(${adpic})` 
	};

  
	const LeetcodecontentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		backgroundImage: `url(${leetcodepic})` 
	};
	const CSDNcodeContentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		backgroundImage: `url(${csdnpic})` 
	};


	const key = 'updatable';
	const info = () => {
		message.loading({ content: 'Try contacting...', key });
		setTimeout(() => {
			message.warn({ content: 'Unfortunately contact failed but im not really sorry about that lmao', key, duration: 2 });
		}, 1000);
	};
	return (
		<div style={{padding: "10px 40px"}}>
			<Carousel autoplay>
				<div onClick={() => {window.open("http://leetcode.cn/problemset/all/");} }>
					<h3 style={LeetcodecontentStyle}>.</h3>
				</div>
				<div onClick={() => {window.open("https://bbs.csdn.net");} }>
					<h3 style={CSDNcodeContentStyle}>.</h3>
				</div>
				<div onClick={info }>
					<h3 style={AdcodeContentStyle}>.</h3>
				</div>
			</Carousel>
		</div>
	);
};