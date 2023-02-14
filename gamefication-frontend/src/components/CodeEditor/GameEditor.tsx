import React from 'react';
import Editor from "@monaco-editor/react";

const GameEditor = () => {
    function handleEditorChange(value: any, event: any) {
        console.log("here is the current model value:", value);
    }
    return (
        <div className='h-full'>
            <Editor
                options={{
                    automaticLayout: true,
                    minimap: {enabled: false},
                    showUnused: false,
                    wordWrap: 'on',
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                }}
                defaultLanguage="java"
                defaultValue="// some comment"
                theme={"vs-dark"}
                onChange={handleEditorChange}
            />

        </div>
    );
};
export default GameEditor;