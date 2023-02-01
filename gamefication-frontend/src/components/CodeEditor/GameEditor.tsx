import React from 'react';
import Editor from "@monaco-editor/react";
const GameEditor = () => {
    function handleEditorChange(value: any, event: any) {
        console.log("here is the current model value:", value);
    }
    return (
        <div className='flex flex-row '>
            <div className='mx-auto justify-'>
                <h2>asdasdasdasdasd</h2>
            </div>
            <Editor
                    height="50vh"
                    width="90vh"
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    theme={"vs-dark"}
                    onChange={handleEditorChange}
            />

        </div>
    );
};

export default GameEditor;