import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "@monaco-editor/react";
import GameEditor from "./components/CodeEditor/GameEditor";

function App() {

    return (
        <div>
            <GameEditor/>
        </div>
    );
}

export default App;
