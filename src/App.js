import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobSearchPage from './pages/JobSearchPage';
import 'antd/dist/antd.min.css';
import './App.css';
import React from "react";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/jobSearch' element={<JobSearchPage />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;