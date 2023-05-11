import React, {useEffect, useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import {GameTask, RunningState, State} from "../models";
import RulesModal from "../UI/RulesModal";
import Header from "../Header/Header";
import CodeEditor from './CodeEditorPage';
import {API} from "../../Constants";


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
    const [task, setTask] = useState<GameTask>()
    const [modalIsOpen, setIsOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    const openGameEditor = (task: GameTask) => {
        setTask(task)
        setGamePageComponent(GamePageComponent.Editor)
    }

    const selectedTaskHandler = (id: number) => {
        API.selectTask(id)
            .then(response => {
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

    const nextAssignmentHandler = () => {
        localStorage.removeItem("EDITOR_CODE")
        setGamePageComponent(GamePageComponent.TaskSelect)
        setSuccess(false)
    }

    const fetchGameTask = () => {
        API.getSelectedTask()
            .then(response => response.json())
            .then((response: GameTask) => {
                openGameEditor(response)
            })
            .catch((error: Error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        API.getState()
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
                console.log(error.message)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    </NewCard>
                </div>
            case GamePageComponent.Editor:
                return <CodeEditor
                    task={task}
                    setSuccess={setSuccess}
                    setIsOpen={setIsOpen}
                    nextAssignmentHandler={nextAssignmentHandler}
                />
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
                        <RulesModal visible={modalIsOpen} onClose={nextAssignmentHandler} onOk={nextAssignmentHandler}
                                    modalTitle={'Riktig Svar'}
                                    modalText={'Trykk neste for å prøve vår neste utfordring'} okButtonText={'Neste'}
                                    showConfetti={true}/>
                    </>
                }
            </div>
        </>
    );
};

export default GamePage;