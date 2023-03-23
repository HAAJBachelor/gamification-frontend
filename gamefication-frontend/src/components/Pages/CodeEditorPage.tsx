import React, {useEffect, useState} from "react";
import GameEditor, {handler} from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import TestCaseContainer from "../CodeEditor/TestCaseContainer";
import Actions from "../Game/Actions";
import LanguageSelector from "../Game/LanguageSelector";
import {GameTask, TaskResult} from "../models";
import RulesModal from "../UI/RulesModal";
import {ConsoleData, ConsoleDisplayType} from "./GamePage";
import LoadingSpinner from "../UI/LoadingSpinner";

type Props = {
    task?: GameTask
    setSuccess?: (value: boolean) => void
    setIsOpen?: (value: boolean) => void
    test?: boolean
}

const CodeEditor = (props: Props) => {

    const [taskResultCheck, setTaskResultCheck] = useState(true)
    const [buttonText, setButtonText] = useState('Submit')
    const [language, setLanguage] = useState('java')
    const [code, setCodeState] = useState("")
    const [success, setSuccess] = useState(false)
    const [runAllTestCases, setRunAllTestCases] = useState(false)
    const [consoleOutput, setConsoleOutput] = useState<ConsoleData>({data: "", display: ConsoleDisplayType.DEFAULT})
    const [mousePosition, setMousePosition] = useState({X: 0, Y: 0})
    const fromEditor = React.useRef<handler>(null);
    const [boilerCode, setBoilerCode] = useState('');
    const [editorUpdate, setEditorUpdate] = useState(false)


    useEffect(() => {
        if (localStorage.getItem('EDITOR_CODE')) {
            const data = localStorage.getItem('EDITOR_CODE');
            if (data) setCodeState(JSON.parse(data))
            console.log(data, ' dette er data fra getItem')
        }
    }, []);

    useEffect(() => {
        if (code !== '')
            localStorage.setItem('EDITOR_CODE', JSON.stringify(code))
        console.log('fra useeffect ', code)
    }, [code]);


    useEffect(() => {
        fetchStartCode(language)
    }, [])

    const fetchStartCode = (lang: string) => {
        fetch(`https://localhost:7067/api/GetStartCode?language=${lang}&test=${!!props.test}`, {
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

                })).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const setCode = (value: string) => {
        setCodeState(value)
    }

    const resetConsoleOutput = () => {
        setConsoleOutput({data: "", display: ConsoleDisplayType.DEFAULT})
    }

    const submitTaskHandler = () => {
        resetConsoleOutput()
        fetch('https://localhost:7067/api/SubmitTask', {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify(code)
        }).then(response => {
            if (!response.ok)
                throw new Error("500")
            return response
        })
            .then(response => response.json()
                .then((response: TaskResult) => {
                    if (!response.success) {
                        setButtonText('prøv igjen')
                        console.log(success)
                        console.log(response)
                        setSuccess(false)
                    } else {
                        setTaskResultCheck(true)
                        props.setIsOpen?.(true)
                        props.setSuccess?.(true)
                        setButtonText('Submit')
                        localStorage.setItem('EDITOR_CODE', JSON.stringify(''))
                    }
                    if (response.compilerError) {
                        setConsoleOutput({data: response.compilerErrorMessage, display: ConsoleDisplayType.ERROR})
                    }
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const testCaseHandler = (taskId: number) => {
        resetConsoleOutput()
        runTestCase(taskId).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        }).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const runTestCase = async (taskId: number) => {
        const path = props.test ? 'SubmitTestTaskTestCase' : 'SubmitTestCase'
        return await fetch(`https://localhost:7067/api/${path}?index=${taskId}`, {
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
        fetchStartCode(lang)
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMousePosition({X: event.clientX, Y: event.clientY})
    }

    const resetCodeStubHandler = () => {
        setEditorUpdate(value => !value)
    }

    return (
        <div className='max-w-screen my-2 flex justify-center' onMouseMove={handleMouseMove}>
            <div
                className='flex flex-col sm:flex-row justify-between gap-2 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[90%] shadow-2xl mx-4'>
                <div
                    className='animate-scale-up-down-opacity h-screen max-w-xl min-w-[50vh] min-h-[400px] h-[89vh] whitespace-pre-wrap bg-gameComps p-4  rounded-bl-2xl rounded-tl-2xl scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                    {props.task && <Problem task={props.task}
                    />}
                </div>
                <div
                    className='flex flex-col min-w-[120vh] animate-scale-up-down-opacity w-full'>
                    <div className={"h-[60vh] flex flex-col bg-gameComps rounded-tr-2xl"}>
                        <div className='rounded-tr-2xl '>
                            <div className='flex flex-row justify-between'>
                                <LanguageSelector onChange={languageHandleOnChange}/>
                                <div className={'mr-1 mt-1'}>
                                    <button
                                        className={'border border-background hover:border-transparent rounded hover:scale-110 transition-all duration-300 text-left rounded-xl bg-gameComps shadow-lg shadow-yellow-900 transform hover:scale-125'}
                                        onClick={resetCodeStubHandler}
                                    >

                                        <svg width="30px"
                                             height="20px"
                                             viewBox="-2 -2 24.00 24.00"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="#ffeb3b"
                                             transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                               stroke="#CCCCCC#ffeb3b" stroke-width="0.4">
                                                <path
                                                    d="M17 9a1 1 0 01-1-1c0-.551-.448-1-1-1H5.414l1.293 1.293a.999.999 0 11-1.414 1.414l-3-3a.999.999 0 010-1.414l3-3a.997.997 0 011.414 0 .999.999 0 010 1.414L5.414 5H15c1.654 0 3 1.346 3 3a1 1 0 01-1 1zM3 11a1 1 0 011 1c0 .551.448 1 1 1h9.586l-1.293-1.293a.999.999 0 111.414-1.414l3 3a.999.999 0 010 1.414l-3 3a.999.999 0 11-1.414-1.414L14.586 15H5c-1.654 0-3-1.346-3-3a1 1 0 011-1z"
                                                    fill="#ffeb3b">
                                                </path>
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M17 9a1 1 0 01-1-1c0-.551-.448-1-1-1H5.414l1.293 1.293a.999.999 0 11-1.414 1.414l-3-3a.999.999 0 010-1.414l3-3a.997.997 0 011.414 0 .999.999 0 010 1.414L5.414 5H15c1.654 0 3 1.346 3 3a1 1 0 01-1 1zM3 11a1 1 0 011 1c0 .551.448 1 1 1h9.586l-1.293-1.293a.999.999 0 111.414-1.414l3 3a.999.999 0 010 1.414l-3 3a.999.999 0 11-1.414-1.414L14.586 15H5c-1.654 0-3-1.346-3-3a1 1 0 011-1z"
                                                    fill="#ffeb3b">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className='group overflow-auto h-full min-w-full min-h-[200px] bg-gameComps'>
                            <GameEditor onChange={setCode} lang={language} test={props.test} ref={fromEditor}
                                        boilerCode={boilerCode} update={editorUpdate}/>
                        </div>
                        <div className='w-full items-center flex pl-8'>
                            <h1 className={"text-yellow-500 text-2xl"}>Tester</h1>
                            <TestCaseContainer task={props.task ? props.task.testCases : []}
                                               testCaseHandler={runTestCase}
                                               runAllTestCases={runAllTestCases}
                                               setRunAllTestCases={setRunAllTestCases}
                                               setConsoleOutput={setConsoleOutput}
                                               mousePosition={mousePosition}
                            ></TestCaseContainer>
                            <div>
                                {
                                    runAllTestCases ?
                                        <div
                                            className={"w-fit h-fit flex items-center justify-center align-center bg-gray-900 text-xl text-yellow-500 p-2 rounded-full border shadow-lg shadow-yellow-900 border-black"}>
                                            <LoadingSpinner/>
                                        </div>
                                        :
                                        <>
                                            <button
                                                className={"w-fit h-fit flex items-center justify-center align-center bg-gray-900 text-xl text-yellow-500 p-2 rounded-full border shadow-lg shadow-yellow-900 border-black transition-all hover:scale-125 hover:border-white"}
                                                onClick={() => setRunAllTestCases(true)}
                                            >
                                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                       strokeLinejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path
                                                            d="M7 17.259V6.74104C7 5.96925 7.83721 5.48837 8.50387 5.87726L18.2596 11.5681C18.5904 11.761 18.5904 12.2389 18.2596 12.4319L8.50387 18.1227C7.83721 18.5116 7 18.0308 7 17.259Z"
                                                            stroke="#eab308" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row h-[29vh] '>
                        <div className={`flex flex-col h-full ${props.test ? "w-full" : "basis-11/12"} `}>

                            <div
                                className='bg-gameComps mt-2 p-4 h-full overflow-hidden'>
                                <div
                                    className={"bg-background h-full p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"}>
                                    <p className={`
                                    ${consoleOutput.display === ConsoleDisplayType.DEFAULT ? "text-white" : consoleOutput.display === ConsoleDisplayType.SUCCESS ? "text-green-500" : "text-red-500"} whitespace-pre-wrap`}>
                                        {
                                            consoleOutput.data
                                        }
                                    </p>
                                </div>

                            </div>
                        </div>
                        {!props.test &&
                            <div
                                className='bg-gameComps mt-2 ml-2 rounded-br-2xl basis-1/12 lg:mt-2 ml-2'>
                                <Actions text={buttonText} test='TestAll'
                                         handleOnClickSubmit={submitTaskHandler}
                                         handleOnClickTest={testCaseHandler}
                                         handleOnTestAllClick={() => setRunAllTestCases(true)}
                                />
                                {taskResultCheck && <RulesModal/>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeEditor;