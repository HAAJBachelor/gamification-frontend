import React from 'react';
import Editor from "@monaco-editor/react";
const GameEditor = () => {
    function handleEditorChange(value: any, event: any) {
        console.log("here is the current model value:", value);
    }
    return (
        <div >
            <Editor
                    height="100vh"
                    width="100VH"
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    onChange={handleEditorChange}
            />

        </div>
    );
};

export default GameEditor;