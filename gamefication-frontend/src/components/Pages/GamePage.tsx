import React, {useEffect, useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import ProgressBar from "../ProgressBar";
import TestCases from "../Game/TestCases";
import Actions from "../Game/Actions";
import {GameTask, TaskResult} from "../models";
import RulesModal from "../UI/RulesModal";
import RulesButton from "../RulesButton";

const GamePage = () => {
    const [state, setState] = useState(false);
    const [code, setCode] = useState('')
    const [task, setTask] = useState<GameTask>()
    const [results, setResults] = useState<TaskResult>()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Submit')
    const [testCases, setTestCases] = useState([
        {
            input: 'Hello',
            output: 'yoyo',
        },
        {
            input: 'dudu',
            output: 'didi',
        },
        {
            input: 'bibi',
            output: 'lolo',
        },

    ])

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
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
                    console.log(results?.success, ' her fra submit')

                    if (results?.success === false) {
                        setButtonText('prøv igjen')
                    }
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

            {state &&
                <NewCard>
                    <div>
                        <Title title="Velg neste utfordring"/>
                        <Questions onClick={fetchTask}/>
                    </div>
                    <ProgressBar/>
                </NewCard>}

            {!state &&

                <div
                    className='flex flex-col sm:flex-row justify-between items-stretch min-h-screen max-h-screen max-w-screen'>
                    <div
                        className='basis-2/6 max-h-[95vh] min-w-[300px] min-h-[400px] whitespace-pre-wrap overflow-x-hidden bg-gameComps resize-x p-4 shadow-2xl m-4 '>
                        <Problem description={String(task?.description)} input={String(task?.testCases[0].input)}
                                 output={String(task?.testCases[0].output)}/>
                    </div>
                    <div className='flex flex-col basis-4/6 max-h-[95vh] m-4'>
                        <div
                            className='p-4 overflow-auto resize h-screen shadow-2xl bg-gameComps'>
                            <GameEditor onChange={getCode} value=''/>
                        </div>

                        <div className='flex flex-col sm:flex-row overflow-auto overflow-x-hidden'>
                            <div className='flex flex-col items-stretch basis-4/6 '>
                                {testCases.map((test) => {
                                    return (
                                        <TestCases input={test.input} output={test.output}/>
                                    );
                                })}
                            </div>
                            <div className='justify-between basis-2/6'>
                                <Actions text={buttonText} handleOnClick={submitHandler}
                                         handleOnTestClick={testAllCases}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <RulesButton openModal={openModal}/>
            <RulesModal visible={modalIsOpen} onClose={closeModal}/>
        </>

    )
        ;
};

export default GamePage;