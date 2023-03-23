import React, {useEffect, useState} from 'react';
import Editor, {Monaco} from "@monaco-editor/react";


type Props = {
    onChange: (value: string) => void
    lang: string,
    test?: boolean
    boilerCode: string,
    update: boolean,
}
export type handler = {
    start: () => void;
}

const GameEditor = React.forwardRef<handler, Props>((props, ref) => {

    const [boilerCode, setBoilerCode] = useState('');
    const [editor, setEditor] = useState<any>(null)


    const handleEditorChange = (value: any, event: any) => {
        props.onChange(value)
    }
    const beforeMount = (monaco: Monaco) => {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
            ['declare function readline(): string;',
            ].join('\n'));
    }
    useEffect(() => {
        setBoilerCode(props.boilerCode)
        if (editor) {
            editor.setValue(props.boilerCode)
        }

    }, [props.update, props.boilerCode])

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
                beforeMount={beforeMount}
                onChange={handleEditorChange}
                value={boilerCode}
                saveViewState={false}
                onMount={(editor) => {
                    setEditor(editor);
                }}

            />
        </>
    );
});
export default GameEditor;