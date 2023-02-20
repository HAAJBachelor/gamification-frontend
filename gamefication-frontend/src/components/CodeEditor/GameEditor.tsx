import React, {useEffect, useState} from 'react';
import Editor from "@monaco-editor/react";

const GameEditor = (props: any) => {
    const [editorValue, setEditorValue] = useState('');
    const [boilerCode, setBoilerCode] = useState('')

    const handleEditorChange = (value: any, event: any) => {
        setEditorValue(value)
        props.onChange(editorValue)

    }
    useEffect(() => {
        fetch('https://localhost:7067/api/GetStartCode?language=java', {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
            }
        }).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        })
            .then(response => response.text()
                .then(response => {
                    setBoilerCode(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    })
    return (
        <>
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
                defaultValue={boilerCode}
                theme={"vs-dark"}
                onChange={handleEditorChange}
            />
        </>
    );
};
export default GameEditor;