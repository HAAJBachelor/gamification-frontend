import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/Pages/LandingPage";
import RulesPage from "./components/Pages/RulesPage";

import GamePage from './components/Pages/GamePage';
import QuestionSelectorPage from "./components/Pages/QuestionSelectorPage";
import RulesModal from "./components/UI/RulesModal";
import RulesButton from "./components/RulesButton";


function App() {
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
        console.log('her er jeg')
    }
    const closeModal = () => {
        setIsOpen(false);
  }
    return (
        <>
            <RulesButton openModal={openModal}/>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                    <Route path="/question" element={<QuestionSelectorPage/>}/>
                    <Route path="/rules" element={<RulesPage/>}/>

                </Routes>
            </Router>
            <RulesModal visible={modalIsOpen} closeModal={closeModal} onClose={closeModal}/>
        </>
    );
}

export default App;
