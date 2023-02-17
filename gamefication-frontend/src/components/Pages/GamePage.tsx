import React, {useEffect, useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import Header from "../Header/Header";
import ProgressBar from "../ProgressBar";
import TestCases from "../Game/TestCases";
import Actions from "../Game/Actions";
import {GameTask, TaskResult} from "../models";

const GamePage = () => {
    const [state, setState] = useState(true);
    const [code, setCode] = useState('')
    const [task, setTask] = useState<GameTask>()
    const [results, setResults] = useState<TaskResult>()
    const [buttonText, setButtonText] = useState('Submit')
    const editorHandler = () => {
        setState(false)
    }
    const getCode = (code: any) => {
        setCode(code)
        console.log('fra parent', code)
    }
    useEffect(() => {
        fetch('https://localhost:7067/api/GenerateTasks', {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
            }
        }).then(response => {
            if (!response.ok)
                throw new Error("500")
            return response
        })
            .then(response => response.text()
                .then(response => {
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    })
    const submitHandler = () => {
        fetch('https://localhost:7067/api/SubmitTask', {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
            },
            body: JSON.stringify(code)
        }).then(response => {
            if (!response.ok)
                throw new Error("500")
            return response
        })
            .then(response => response.json()
                .then(response => {
                    console.log(response)
                    setResults(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }
    console.log(results, ' her er resultat')
    const fetchTask = (id: number) => {
        fetch(`https://localhost:7067/api/SelectTask?taskId=${id}`, {
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
            .then(response => response.json()
                .then(response => {
                    setTask(response)
                    console.log(response)
                    setState(false)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }
    const testAllCases = () => {
        fetch('https://localhost:7067/api/SelectTask?taskId=', {
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
            .then(response => response.json()
                .then(response => {
                    setTask(response)
                    console.log(response)
                    setState(false)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }
    return (
        <>
            <Header/>
            {state &&
                <NewCard>
                    <div>
                        <Title title="Velg neste utfordring"/>
                        <Questions onClick={fetchTask}/>
                    </div>
                    <ProgressBar/>
                </NewCard>}
            {!state &&
                <div>
                    <div
                        className='flex flex-col sm:flex-row justify-between items-stretch ml-2 mt-2 mr-2'>
                        <div
                            className='flex-grow-1 w-1/3 max-h-[92vh] min-w-[400px] min-h-[400px] max-width-[300px] whitespace-pre-wrap overflow-x-hidden bg-gameComps resize-x p-4 shadow-2xl mr-2 '>
                            <Problem description={String(task?.description)} input={String(task?.testCases[0].input)}
                                     output={String(task?.testCases[0].output)}/>
                        </div>
                        <div className='flex flex-col '>
                            <div
                                className='p-4 w-2/3 overflow-auto resize w-[1250px] min-w-[400px] max-h-[450px] min-h-[400px] max-w-[1250px] flex-grow-1 shadow-2xl bg-gameComps flex-wrap ml-2 '>
                                <GameEditor onChange={getCode} value=''/>
                            </div>
                            <div className='flex flex-col sm:flex-row'>
                                <TestCases/>
                                <div className='flex flex-col justify-center items-start w-1/3 space-x-4'>
                                    <Actions text={buttonText} handleOnClick={submitHandler}
                                             handleOnTestClick={testAllCases}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default GamePage;