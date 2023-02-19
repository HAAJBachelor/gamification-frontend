import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RulesPage from "./components/Pages/RulesPage";
import GamePage from './components/Pages/GamePage';
import RulesModal from "./components/UI/RulesModal";
import RulesButton from "./components/RulesButton";
import LandingPage from "./components/Pages/LandingPage";


function App() {


    return (
        <>

            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                    <Route path="/rules" element={<RulesPage/>}/>

                </Routes>
            </Router>

        </>
    );
}

export default App;
