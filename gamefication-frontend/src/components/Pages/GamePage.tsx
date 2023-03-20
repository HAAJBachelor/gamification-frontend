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
import CodeEditor from './CodeEditorPage';
import LoadingSpinner from "../UI/LoadingSpinner";


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
    const [modalIsOpen, setIsOpen] = useState(false)

    const openGameEditor = (task: GameTask) => {
        setTask(task)
        setGamePageComponent(GamePageComponent.Editor)
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
                return <CodeEditor task={task}/>
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
                                    modalText={'Trykk neste for å prøve vår neste utfordring'} text={'Neste'}
                                    showConfetti={true}/>
                    </>
                }
            </div>
        </>
    );
};

export default GamePage;