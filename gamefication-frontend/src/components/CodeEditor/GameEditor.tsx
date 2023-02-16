import React, {useState} from 'react';
import Editor from "@monaco-editor/react";

const GameEditor = (props: any) => {
    const [code, setCode] = useState('');
    const handleEditorChange = (value: any, event: any) => {
        setCode(value)
        props.onChange(code)
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