import React, {useState} from 'react';
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
import Header from "../Header/Header";
import ToolTip from "../ToolTip";
import LanguageSelector from "../Game/LanguageSelector";


const GamePage = () => {
    const [editor, setEditor] = useState(true);
    let code = ""
    const [task, setTask] = useState<GameTask>()
    const [taskResultCheck, setTaskResultCheck] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [buttonText, setButtonText] = useState('Submit')
    const [language, setLanguage] = useState('');
    const [bolerCode, setBoilerCode] = useState('')

    const setCode = (value: string) => {
        code = value
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
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
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
                    } else {
                        setTaskResultCheck(true)
                        setEditor(true)
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
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
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

        alert('language is ' + value)
    }

    const codeEditor = () => {
        return (
            <div className='min-h-screen max-h-screen max-w-screen'>
                <Header/>
                <div className='flex flex-col lg:flex-row justify-between items-stretch '>
                    <div
                        className='basis-2/6 max-h-[88vh] min-w-[400px] min-h-[400px] whitespace-pre-wrap overflow-x-hidden bg-gameComps resize-x p-4 shadow-2xl m-4 '>
                        <Problem description={String(task?.description)}
                                 input={String(task?.testCases[0].input)}
                                 output={String(task?.testCases[0].output)}
                                 error={String(task?.testCases[0].error)}
                        />
                    </div>
                    <div className='flex flex-col basis-4/6 max-h-[88vh] m-4'>
                        <div className='bg-gameComps'>
                            <div className='flex justify-end'>
                                <LanguageSelector onChange={languageHandleOnChange}/>
                            </div>
                        </div>
                        <div
                            className='overflow-auto resize h-screen shadow-2xl bg-gameComps p-4'>
                            <GameEditor onChange={setCode} editorCode={'yo'}/>
                        </div>

                        <div className='flex flex-col sm:flex-row '>
                            <div
                                className='flex flex-row items-center justify-center basis-4/6 overflow-auto overflow-y-hidden bg-gameComps mt-2 p-4'>
                                {task?.testCases.map((test, index) => {
                                    return (

                                        <div className='ml-8 px-4 flex-grow border-t border-gray-400'>
                                            <ToolTip
                                                message={"Input: " + task?.testCases[index].input + "\n" + "Output:" + task?.testCases[index].output}>
                                                <TestCases input={test.input} output={test.output}
                                                           onClick={() => testCaseHandler(index)}/>
                                            </ToolTip>
                                        </div>
                                    );
                                })}

                            </div>
                            <div className='justify-between basis-2/6 bg-gameComps mt-2 ml-2'>
                                <Actions text={buttonText} test='TestAll' handleOnClick={submitTaskHandler}
                                         handleOnClickTest={testCaseHandler}/>
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
                    <div className='pt-38'>
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
            <RulesButton openModal={openModal}/>
            <RulesModal visible={modalIsOpen} onClose={closeModal}/>
        </>
    );
};

export default GamePage;