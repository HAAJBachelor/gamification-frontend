import React, {forwardRef, useEffect, useRef, useState} from 'react';
import Editor, {Monaco} from "@monaco-editor/react";


type Props = {
    onChange: (value:string) => void
}

const GameEditor =  (props : Props)=> {
    const [boilerCode, setBoilerCode] = useState('')
    const handleEditorChange = (value: any, event: any) => {
        props.onChange(value)
    }

    useEffect(() => {
        fetch('https://localhost:7067/api/GetStartCode?language=java', {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        }).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        })
            .then(response => response.text()
                .then(response => {
                    setBoilerCode(response)
                    props.onChange(response)
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