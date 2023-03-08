import React, {useEffect, useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import ProgressBar from "../ProgressBar";
import Actions from "../Game/Actions";
import {GameTask, TaskResult} from "../models";
import RulesModal from "../UI/RulesModal";
import Header from "../Header/Header";
import LanguageSelector from "../Game/LanguageSelector";
import TestCaseContainer from "../CodeEditor/TestCaseContainer";

export enum ConsoleDisplayType {
    SUCCESS,
    ERROR,
    DEFAULT
}

export interface ConsoleData {
    data: string
    display: ConsoleDisplayType
}

const GamePage = () => {
    const [editor, setEditor] = useState(true);
    const [code, setCodeState] = useState<String>("")
    const [task, setTask] = useState<GameTask>()
    const [taskResultCheck, setTaskResultCheck] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [buttonText, setButtonText] = useState('Submit')
    const [language, setLanguage] = useState('java');
    const [boilerCode, setBoilerCode] = useState('')
    const [success, setSuccess] = useState(false);
    const [taskResultFail, setTaskResultFail] = useState<TaskResult>()
    const [taskResultSuccess, setTaskResultSuccess] = useState<TaskResult>()
    const [runAllTestCases, setRunAllTestCases] = useState(false)
    const [consoleOutput, setConsoleOutput] = useState<ConsoleData>({data: "", display: ConsoleDisplayType.DEFAULT})

    let taskLenght = 0;

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
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }

    const selectedTaskHandler = (id: number) => {
        fetch(`https://localhost:7067/api/SelectTask?taskId=${id}`, {
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
                    console.log(response)
                    setEditor(false)
                })).catch((error: Error) => {
            console.log(error.message)
        })

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

    useEffect(() => {
        console.log(consoleOutput)
    }, [consoleOutput])

    const languageHandleOnChange = (event: any) => {
        const lang = event.target.value
        setLanguage(lang)
    }

    const validateTestCase = async (taskId: number): Promise<boolean> => {
        let success = await runTestCase(taskId)
        let results = await success.json()
        return results.success
    }


    const nextAssignmentHandler = () => {
        setEditor(true)
        setSuccess(false)
    }

    const codeEditor = () => {
        return (
            <div className='max-w-screen'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div
                        className='animate-scale-up-down-opacity w-fit max-w-full max-h-[88vh] max-w-[60vh]  min-h-[400px] whitespace-pre-wrap bg-gameComps p-4 shadow-2xl m-4 rounded-2xl scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                        {task && <Problem task={task}
                        />}
                    </div>
                    <div
                        className='flex flex-col max-h-[88vh] m-4 animate-scale-up-down-opacity w-full'>
                        <div className='bg-gameComps rounded-tr-2xl'>
                            <div className='flex justify-start mb-1'>
                                <LanguageSelector onChange={languageHandleOnChange}/>
                            </div>
                        </div>
                        <div
                            className='group overflow-auto h-screen min-w-full min-h-[200px] shadow-2xl bg-gameComps pl-4 pb-4 pr-4 z-0'>
                            <GameEditor onChange={setCode} lang={language}/>
                        </div>

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
                                        className={"bg-background w-full h-[90px] max-h-[15rem] p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"}>
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
    return (
        <div className={"h-screen"}>
            <Header/>
            {editor &&
                <>
                    <div className='pt-38 flex justify-center items-center'>
                        <NewCard>
                            <div>
                                <Title title="Velg neste utfordring"/>
                                <Questions onClick={selectedTaskHandler}/>
                            </div>
                            <ProgressBar/>
                        </NewCard>
                    </div>
                </>}
            {!editor &&
                codeEditor()
            }
            {success &&
                <>
                    <RulesModal visible={modalIsOpen} onClose={nextAssignmentHandler} modalTitle={'Du vant'}
                                modalText={'Herlig'} text={'Neste'}/>
                </>
            }
        </div>
    );
};

export default GamePage;