import React, {useEffect, useState} from 'react';
import Editor from "@monaco-editor/react";


type Props = {
    onChange: (value: string) => void
    lang: string,

}

const GameEditor = (props: Props) => {
    const [boilerCode, setBoilerCode] = useState('')

    const handleEditorChange = (value: any, event: any) => {
        props.onChange(value)
    }

    useEffect(() => {
        fetchStartCode()
    }, [props.lang])


    const fetchStartCode = () => {
        fetch(`https://localhost:7067/api/GetStartCode?language=${props.lang}`, {
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
    }

    return (
        <>
            <Editor
                options={{
                    automaticLayout: true,
                    minimap: {enabled: false},
                    showUnused: false,
                    wordWrap: 'on',
                    folding: false,
                    colorDecorators: true,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    mouseWheelZoom: true,
                    quickSuggestions: true,
                    quickSuggestionsDelay: 100,
                    selectionHighlight: true,
                }}
                language={props.lang ? props.lang : 'java'}
                defaultValue='//'
                theme={"vs-dark"}
                onChange={handleEditorChange}
                value={boilerCode}
            />
        </>
    );
};
export default GameEditor;