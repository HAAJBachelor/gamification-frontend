import React, {useEffect, useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import ProgressBar from "../ProgressBar";
import Actions from "../Game/Actions";
import {GameTask, RunningState, State, TaskResult} from "../models";
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

enum GamePageComponent {
    Editor,
    TaskSelect,
    None
}

const GamePage = () => {
    const [gamePageComponent, setGamePageComponent] = useState<GamePageComponent>(GamePageComponent.None);
    const [code, setCodeState] = useState<String>("")
    const [task, setTask] = useState<GameTask>()
    const [taskResultCheck, setTaskResultCheck] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [buttonText, setButtonText] = useState('Submit')
    const [language, setLanguage] = useState('java');

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

    const openGameEditor = (task: GameTask) => {
        setTask(task)
        setGamePageComponent(GamePageComponent.Editor)
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
                    openGameEditor(response);
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

    const validateTestCase = async (taskId: number): Promise<boolean> => {
        let success = await runTestCase(taskId)
        let results = await success.json()
        return results.success
    }


    const nextAssignmentHandler = () => {
        setGamePageComponent(GamePageComponent.TaskSelect)
        setSuccess(false)
    }

    const fetchGameTask = () => {
        fetch("https://localhost:7067/api/GetSelectedTask", {
            credentials: 'include',
        })
            .then(response => response.json())
            .then((response: GameTask) => {
                openGameEditor(response)
            })
            .catch((error: Error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetch('https://localhost:7067/api/GetState', {
            credentials: 'include',
        })
            .then(response => response.json())
            .then((response: State) => {
                if (response._runningState === RunningState.InTask) {
                    fetchGameTask()
                } else if (response._runningState === RunningState.TaskSelect) {
                    setGamePageComponent(GamePageComponent.TaskSelect)
                }
            })
            .catch((error: Error) => {
                setGamePageComponent(GamePageComponent.TaskSelect)
            })
    }, [])

    const codeEditor = () => {
        return (
            <div className='max-w-screen my-2 flex justify-center'>
                <div
                    className='flex flex-col sm:flex-row justify-between gap-2 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[90%] shadow-2xl mx-4'>
                    <div
                        className='animate-scale-up-down-opacity h-screen min-w-[50vh] min-h-[400px] h-[89vh] whitespace-pre-wrap bg-gameComps p-4  rounded-bl-2xl rounded-tl-2xl scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                        {task && <Problem task={task}
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
                                <TestCaseContainer task={task ? task.testCases : []}
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

    const renderGamePageComponent = () => {
        switch (gamePageComponent) {
            case GamePageComponent.TaskSelect:
                return <div
                    className='pt-38 flex justify-center items-center animate-scale-up-down-opacity'>
                    <NewCard>
                        <div>
                            <Title title="Velg neste utfordring"/>
                            <Questions onClick={selectedTaskHandler}/>
                        </div>
                        <ProgressBar/>
                    </NewCard>
                </div>
            case GamePageComponent.Editor:
                return codeEditor()
            case GamePageComponent.None:
                return <></>
        }
    }

    return (
        <>
            <div className={"h-screen max-h-screen"}>
                <Header/>
                {renderGamePageComponent()}
                {success &&
                    <>
                        <RulesModal visible={modalIsOpen} onClose={nextAssignmentHandler} modalTitle={'Riktig Svar'}
                                    modalText={'Trykk neste for å prøve vår neste utfordring'} text={'Neste'} showConfetti={true}/>
                    </>
                }
            </div>
        </>
    );
};

export default GamePage;