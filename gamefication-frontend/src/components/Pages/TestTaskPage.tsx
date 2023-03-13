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
    const [taskResultCheck, setTaskResultCheck] = useState(true)
    const [buttonText, setButtonText] = useState('Submit')
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

    useEffect(() => {
        console.log(consoleOutput)
    }, [consoleOutput])

    const languageHandleOnChange = (event: any) => {
        const lang = event.target.value
        setLanguage(lang)
    }

    const codeEditor = () => {
        return (
            <div className='max-w-screen'>
                <div className='flex flex-col lg:flex-row justify-between gap-2'>
                    <div
                        className='animate-scale-up-down-opacity max-h-[85vh] w-[80vh]  min-h-[400px] whitespace-pre-wrap bg-gameComps p-4 shadow-2xl my-4 ml-4 rounded-bl-2xl rounded-tl-2xl rounded scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                        {task && <Problem task={task}
                        />}
                    </div>
                    <div
                        className='flex flex-col max-h-[85vh] my-4 mr-4 animate-scale-up-down-opacity w-full'>
                        <div className='bg-gameComps rounded-tr-2xl'>
                            <div className='flex justify-start mb-1'>
                                <LanguageSelector onChange={languageHandleOnChange}/>
                            </div>
                        </div>
                        {showEditor &&
                            <div
                                className='group overflow-auto h-screen min-w-full min-h-[200px] shadow-2xl bg-gameComps pl-4 pb-4 pr-4 z-0'>
                                <GameEditor onChange={setCode} lang={language} test={true}/>
                            </div>
                        }

                        <div className='flex flex-col sm:flex-row '>
                            <div className='flex flex-col h-max basis-5/6 '>
                                <div className='basis-2/4 '>
                                    <TestCaseContainer task={task ? task.testCases : []}
                                                       testCaseHandler={runTestCase}
                                                       runAllTestCases={runAllTestCases}
                                                       setRunAllTestCases={setRunAllTestCases}
                                                       setConsoleOutput={setConsoleOutput}
                                    ></TestCaseContainer>
                                </div>
                                <div
                                    className='bg-gameComps mt-2 p-4 w-full h-full basis-2/4'>
                                    <h1>Her kommer consoll output</h1>
                                    <div
                                        className={"bg-background w-full h-[120px] max-h-[15rem] p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"}>
                                        <p className={`
                                        ${consoleOutput.display == ConsoleDisplayType.DEFAULT ? "text-white" : consoleOutput.display == ConsoleDisplayType.SUCCESS ? "text-green-500" : "text-red-500"} whitespace-pre-wrap`}>
                                            {
                                                consoleOutput.data
                                            }
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div
                                className='justify-between bg-gameComps mt-2 ml-2 rounded-br-2xl basis-1/6 lg:mt-2 ml-2 rounded bl-2xl'>
                                <Actions text={buttonText} test='TestAll'
                                         handleOnClickTest={testCaseHandler}
                                         handleOnTestAllClick={() => setRunAllTestCases(true)}
                                />
                                {taskResultCheck && <RulesModal/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
    return (
        <div className={"h-screen max-h-screen"}>
            <Header/>
            {codeEditor()}
        </div>
    );
};

export default TestTaskPage;