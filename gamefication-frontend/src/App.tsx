import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import GamePage from './components/Pages/GamePage';
import LandingPage from "./components/Pages/LandingPage";
import TestTaskPage from "./components/Pages/TestTaskPage";


function App() {


    return (
        <>

            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                    <Route path="/TestTaskPage" element={<TestTaskPage/>}/>

                </Routes>
            </Router>

        </>
    );
}

export default App;
