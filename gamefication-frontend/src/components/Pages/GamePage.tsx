import React, {RefObject, useEffect, useState} from 'react';
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
import Header from "../Header/Header";
import LanguageSelector from "../Game/LanguageSelector";

interface MousePosition {
    x: number;
    y: number;
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
    const [elementRef, setElementRef] = useState<RefObject<HTMLDivElement>[]>([])
    let mousePosition: MousePosition = {x: 0, y: 0}
    const [manhattanDistance, setManhattanDistance] = useState<Array<number>>([]);

    useEffect(() => {
        setElementRef(refs => Array(5).fill([{}, {}, {}, {}, {}]).map((_, i) => refs[i] || React.createRef<HTMLDivElement>()))
        console.log("!!!!!", elementRef)
    }, [task?.testCases])

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
                .then(response => {
                    setTask(response)
                    console.log(response)
                    setEditor(false)
                })).catch((error: Error) => {
            console.log(error.message)
        })

    }

    const testCaseHandler = (taskId: number) => {
        fetch(`https://localhost:7067/api/SubmitTestCase?index=${taskId}`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify(code)
        }).then(response => {
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
    const languageHandleOnChange = (event: any) => {
        let value = event.target.value
        setLanguage(value)
        fetch('https://localhost:7067/api/GetStartCode?language=' + value, {
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

    const testAllHandler = () => {
        for (let i = 0; i < taskLenght; i++) {
            testCaseHandler(i);

        }
    }

    const nextAssignmentHandler = () => {
        setEditor(true)
        setSuccess(false)
    }

    const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!task)
            return
        for (let i = 0; i < task.testCases.length; i++) {
            const {left, top, width, height} = elementRef[i]?.current!.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;
            mousePosition = {x: x, y: y}
            const centerX = width / 2;
            const centerY = height / 2;
            let md = Math.abs(centerX - x) + Math.abs(centerY - y);
            md /= 50;
            md = 5 - md;
            if (md === manhattanDistance[i] || md < 1)
                continue
            manhattanDistance[i] = md
            console.log(manhattanDistance)
        }
        setManhattanDistance([...manhattanDistance])
    }

    const codeEditor = () => {
        return (
            <div className='min-h-screen max-h-screen max-w-screen'>
                <Header/>
                <div className='flex flex-col lg:flex-row justify-between items-stretch '>
                    <div
                        className='animate-scale-up-down-opacity basis-2/6 max-h-[88vh] min-w-[400px] min-h-[400px] whitespace-pre-wrap overflow-x-hidden bg-gameComps resize-x p-4 shadow-2xl m-4 rounded-2xl scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                        {task && <Problem task={task}
                        />}
                    </div>
                    <div className='flex flex-col basis-4/6 max-h-[88vh] m-4 animate-scale-up-down-opacity '>
                        <div className='bg-gameComps rounded-tr-2xl'>
                            <div className='flex justify-start mb-1'>
                                <LanguageSelector onChange={languageHandleOnChange}/>
                            </div>
                        </div>
                        <div className='group overflow-auto resize h-screen shadow-2xl bg-gameComps pl-4 pb-4 pr-4 z-0'>
                            <GameEditor onChange={setCode} editorCode={boilerCode} lang={language}/>
                        </div>

                        <div className='flex flex-col sm:flex-row'>
                            <div className='flex flex-col '>
                                <div
                                    className='flex flex-row justify-center gap-12 items-center  bg-gameComps mt-2 px-4 py-20 w-[40rem] max-h-48 translate-all overflow-visible'
                                    onMouseMove={handleOnMouseMove}>
                                    {task?.testCases.map((test, index) => {
                                        return (

                                            <TestCases ref={elementRef[index]} input={test.input} output={test.output}
                                                       onClick={() => testCaseHandler(index)}
                                                       distance={manhattanDistance[index]}
                                            />
                                        );
                                    })}
                                </div>
                                <div
                                    className='basis-2/4 overflow-x-hidden bg-gameComps mt-2  p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900'>
                                    <h1>Her kommer consoll output</h1>
                                </div>
                            </div>
                            <div className='justify-between basis-2/6 bg-gameComps mt-2 ml-2 rounded-br-2xl'>
                                <Actions text={buttonText} test='TestAll'
                                         handleOnClickSubmit={submitTaskHandler}
                                         handleOnClickTest={testCaseHandler}
                                         handleOnTestAllClick={testAllHandler}
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
        <>
            {editor &&
                <>
                    <Header/>
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
        </>
    );
};

export default GamePage;