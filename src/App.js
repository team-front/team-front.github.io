import './App.css';
import Admin from './components/Admin';
import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Admin />}></Route>
					
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
