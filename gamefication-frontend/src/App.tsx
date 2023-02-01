import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GameEditor from "./components/CodeEditor/GameEditor";
import MainPaige from "./components/Pages/MainPaige";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPaige />}>
                    <Route path="/editor" element={<GameEditor/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
