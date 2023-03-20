import { useState } from "react";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import TestCaseContainer from "../CodeEditor/TestCaseContainer";
import Actions from "../Game/Actions";
import LanguageSelector from "../Game/LanguageSelector";
import { GameTask, TaskResult } from "../models";
import RulesModal from "../UI/RulesModal";
import { ConsoleData, ConsoleDisplayType } from "./GamePage";

type Props = {
    task?: GameTask
}

const CodeEditor = (props: Props) => {
    
    const [task, setTask] = useState<GameTask>()
    const [taskResultCheck, setTaskResultCheck] = useState(true)
    const [buttonText, setButtonText] = useState('Submit')
    const [language, setLanguage] = useState('java')
    const [modalIsOpen, setIsOpen] = useState(false)
    const [code, setCodeState] = useState<String>("")
    const [success, setSuccess] = useState(false)
    const [taskResultFail, setTaskResultFail] = useState<TaskResult>()
    const [taskResultSuccess, setTaskResultSuccess] = useState<TaskResult>()
    const [runAllTestCases, setRunAllTestCases] = useState(false)
    const [consoleOutput, setConsoleOutput] = useState<ConsoleData>({data: "", display: ConsoleDisplayType.DEFAULT})
    
    const setCode = (value: string) => {
        setCodeState(value)
    }

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const submitTaskHandler = () => {
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
                        setTaskResultFail(response)
                    } else {
                        setTaskResultCheck(true)
                        setIsOpen(true)
                        setSuccess(true)
                        setButtonText('Submit')
                        setTaskResultSuccess(response);
                    }
                    if (response.compilerError) {
                        setConsoleOutput({data: response.compilerErrorMessage, display: ConsoleDisplayType.ERROR})
                    }
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const testCaseHandler = (taskId: number) => {
        runTestCase(taskId).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        }).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const runTestCase = async (taskId: number) => {
        return await fetch(`https://localhost:7067/api/SubmitTestCase?index=${taskId}`, {
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
        <div className='max-w-screen my-2 flex justify-center'>
            <div
                className='flex flex-col sm:flex-row justify-between gap-2 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[90%] shadow-2xl mx-4'>
                <div
                    className='animate-scale-up-down-opacity h-screen min-w-[50vh] min-h-[400px] h-[89vh] whitespace-pre-wrap bg-gameComps p-4  rounded-bl-2xl rounded-tl-2xl scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                    {props.task && <Problem task={props.task}
                    />}
                </div>
                <div
                    className='flex flex-col min-w-[60vh] animate-scale-up-down-opacity w-full'>
                    <div className={"h-[60vh] flex flex-col bg-gameComps rounded-tr-2xl"}>
                        <div className='rounded-tr-2xl '>
                            <div className='flex justify-start'>
                                <LanguageSelector onChange={languageHandleOnChange}/>
                            </div>
                        </div>
                        <div
                            className='group overflow-auto h-full min-w-full min-h-[200px] bg-gameComps'>
                            <GameEditor onChange={setCode} lang={language}/>
                        </div>
                        <div className='w-full items-center flex pl-8'>
                            <h1 className={"text-yellow-500 text-2xl"}>Tester</h1>
                            <TestCaseContainer task={props.task ? props.task.testCases : []}
                                               testCaseHandler={runTestCase}
                                               runAllTestCases={runAllTestCases}
                                               setRunAllTestCases={setRunAllTestCases}
                                               setConsoleOutput={setConsoleOutput}
                            ></TestCaseContainer>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row h-[29vh] '>
                        <div className='flex flex-col h-full basis-11/12 '>

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
                        <div
                            className='bg-gameComps mt-2 ml-2 rounded-br-2xl basis-1/12 lg:mt-2 ml-2'>
                            <Actions text={buttonText} test='TestAll'
                                     handleOnClickSubmit={submitTaskHandler}
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

export default CodeEditor;