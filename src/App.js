import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobSearchPage from './pages/JobSearchPage';
import SearchPage from './pages/SearchPage';
import InterviewExperience from './pages/InterviewExperience';
import 'antd/dist/antd.min.css';
import './App.css';
import React from "react";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element = {<SearchPage/>}/>
				<Route path='/login' element = {<SearchPage/>}/>
				<Route path='/InterviewExperience' element = {<InterviewExperience/>}/>
				<Route path='/jobSearch' element={<JobSearchPage />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;
