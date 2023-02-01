import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import GameEditor from "./components/CodeEditor/GameEditor";
import MainPaige from "./components/Pages/MainPaige";
import RulesPage from "./components/Pages/RulesPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPaige />}>
                    <Route path="/editor" element={<GameEditor/>} />
                    <Route path="/rules" element={<RulesPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
