import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPaige from "./components/Pages/MainPaige";
import RulesPage from "./components/Pages/RulesPage";
import EditorPage from "./components/Pages/EditorPage";

import Modal from 'react-modal';
import {Button, Container} from 'react-floating-action-button';

import GamePage from './components/Pages/GamePage';
import QuestionSelectorPage from "./components/Pages/QuestionSelectorPage";
import RulesModal from "./components/UI/RulesModal";

Modal.setAppElement("#root");

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
            <Container>            
                <Button
                icon="fa fab-plus"
                rotate={true}
                onClick={openModal}
                styles={{"background": "#FACC14", "font-weight": "bold", "font-size": "1.5rem"}}
                >?</Button>
            </Container>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPaige/>}/>
                    <Route path='/game' element={<GamePage/>}/>
                    <Route path="/question" element={<QuestionSelectorPage/>}/>
                    <Route path="/rules" element={<RulesPage/>}/>
                    <Route path="/editorPage" element={<EditorPage/>}/>

                </Routes>

            </Router>
            <RulesModal visible={modalIsOpen} closeModal={closeModal} onClose={closeModal}/>
        </>        
    );
}

export default App;
