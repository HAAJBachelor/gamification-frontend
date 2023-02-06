import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPaige from "./components/Pages/MainPaige";
import RulesPage from "./components/Pages/RulesPage";
import EditorPage from "./components/Pages/EditorPage";

import Modal from 'react-modal';
import { Container, Button } from 'react-floating-action-button';
import QuestionSelectorPage from './components/Pages/QuestionSelectorPage';
import GamePage from './components/Pages/GamePage';

Modal.setAppElement("#root");

function App() {
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
  }
    const modalStyle = "bg-blackm grid justify-items-center";
    
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
            <Modal      
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className={modalStyle}
                contentLabel="Rules"
            >
                <div className="w-full max-w-2xl px-4 h-full md:h-auto ">
                        <div className="bg-black rounded-lg shadow relative dark:bg-gray-700">
                            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-yellow-400 text-xl lg:text-2xl font-semibold dark:text-white">
                                    Terms of Service
                                </h3>                        
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-yellow-400 text-base leading-relaxed dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p className="text-yellow-400 text-base leading-relaxed dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                            <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={closeModal} type="button" className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                            </div>
                        </div>
                </div>
            </Modal>
            <Router>            
                <Routes>
                    <Route path="/" element={<MainPaige/>}/>                    
                    <Route path="/game" element={<GamePage/>}/>
                    <Route path="/question" element={<QuestionSelectorPage/>}/>
                    <Route path="/rules" element={<RulesPage/>}/>
                    <Route path="/editorPage" element={<EditorPage/>}/>
                </Routes>
            </Router>
        </>        
    );
}

export default App;
