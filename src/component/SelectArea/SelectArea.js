/* eslint-disable react/prop-types */
import React from "react";
import { Select } from 'antd';
const { Option } = Select;

export const SelectArea = (props) => {

	const { selectItem } = props;
	const { setSelectItem } = props;
	const { selectDesc } = props;

	const children = [];
	for (let i = 0; i < selectItem.length; i++) {
		children.push(<Option key={i} value={selectItem[i]}>{selectItem[i]}</Option>);
	}

	const handleChange = (value) => {
		setSelectItem(value);
		console.log(value);
	};
  
	return (
		
		<Select
			mode="multiple"
			allowClear
			style={{ width: '460px' , padding : "0px 10px"}}
			placeholder={selectDesc}
			onChange={handleChange}
		>
			{children}
		</Select>
	);
};