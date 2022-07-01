import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';


export const TopSearchArea = (props) => {
	// eslint-disable-next-line react/prop-types
	const { setSearchResult } = props;
	const [searchInput, setSearchInput] = useState('');	

	React.useEffect(() => {
		const getData = async () => {
			console.log(searchInput);
		};
		getData();
		let tmp =[
			{
				"id": "3",
				"title": "前端开发工程师",
				"company": "百度",
				"salary": "10k-20k",
				"city": "北京",
			},
			{
				"id": "4",
				"title": "后端开发工程师",
				"company": "百度",
				"salary": "20k-30k",
				"city": "北京",
			},
		];
		//值回调给父级
		setSearchResult(tmp);
	}
	, [searchInput]);

	
	return (
		<div className="body">
			<button className="choose">职位信息</button>
			<input className="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
			<button className="search"><SearchIcon /></button>
		</div>
	);
};