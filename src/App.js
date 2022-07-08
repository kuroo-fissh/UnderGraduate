import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobSearchPage from './pages/JobSearchPage';
import SearchPage from './pages/SearchPage';
import InterviewExperience from './pages/InterviewExperience';
import JobDetail from './pages/JobDetail';
import 'antd/dist/antd.min.css';
import './App.css';
import React from "react";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element = {<SearchPage/>}/>
				<Route path='/login' element = {<SearchPage/>}/>
				<Route path='/InterviewExperience/:input' element = {<InterviewExperience/>}/>
				<Route path='/jobSearch/:input' element={<JobSearchPage />} />
				<Route path='/jobDetail/:id' element={<JobDetail />} />
				{/* <Route path='/jobDetail' element={<JobDetail />} /> */}
			</Routes>
		</BrowserRouter>
	);
}


export default App;
