import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GameEditor from "./components/CodeEditor/GameEditor";
import MainPaige from "./components/Pages/MainPaige";
import RulesPage from "./components/Pages/RulesPage";
import EditorPage from "./components/Pages/EditorPage";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPaige/>}/>
                <Route path="/editor" element={<GameEditor/>}/>
                <Route path="/rules" element={<RulesPage/>}/>
                <Route path="/editorPage" element={<EditorPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
