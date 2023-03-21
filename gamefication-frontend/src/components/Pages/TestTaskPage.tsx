import React, {useEffect, useState} from 'react';
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import Actions from "../Game/Actions";
import {GameTask} from "../models";
import RulesModal from "../UI/RulesModal";
import Header from "../Header/Header";
import LanguageSelector from "../Game/LanguageSelector";
import TestCaseContainer from "../CodeEditor/TestCaseContainer";
import {useSearchParams} from "react-router-dom";
import CodeEditorPage from "./CodeEditorPage";

export enum ConsoleDisplayType {
    SUCCESS,
    ERROR,
    DEFAULT
}

export interface ConsoleData {
    data: string
    display: ConsoleDisplayType
}

const TestTaskPage = () => {
    const [code, setCodeState] = useState<String>("")
    const [task, setTask] = useState<GameTask>()
    const [language, setLanguage] = useState('java');
    const [runAllTestCases, setRunAllTestCases] = useState(false)
    const [consoleOutput, setConsoleOutput] = useState<ConsoleData>({data: "", display: ConsoleDisplayType.DEFAULT})
    const [params] = useSearchParams();
    const [showEditor, setShowEditor] = useState(false)

    useEffect(() => {
        const taskId = params.get("taskId")
        if (taskId) {
            fetchTask(taskId)
        }
    }, [])

    const fetchTask = (id: string) => {
        fetch(`https://localhost:7067/api/SelectTaskForTesting?taskId=${id}`, {
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
            .then(response => response.json()
                .then((response: GameTask) => {
                    setTask(response)
                    setShowEditor(true)
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const setCode = (value: string) => {
        setCodeState(value)
    }

    const testCaseHandler = (taskId: number) => {
        runTestCase(taskId).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        })
            .then(response => response.json()
                .then(response => {
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }
    const runTestCase = async (taskId: number) => {
        return await fetch(`https://localhost:7067/api/SubmitTestTaskTestCase?index=${taskId}`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify(code)
        })
    }

    const languageHandleOnChange = (event: any) => {
        const lang = event.target.value
        setLanguage(lang)
    }

    return (
        <>
            <div className={"flex items-center justify-center h-screen"}>
                <CodeEditorPage task={task} test={true}/>
            </div>
        </>
    )
};

export default TestTaskPage;