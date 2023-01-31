import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "@monaco-editor/react";

function App() {
    return (
        <div className="relative">
            <Editor className="absolute right-0 text-green-800"
                height="100vh"
                width="100VH"
                defaultLanguage="javascript"
                defaultValue="// some comment"
            />

        </div>
    )
        ;
}

export default App;
