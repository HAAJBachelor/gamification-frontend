import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import Header from "../Header/Header";
import {Button} from "../UI/Button";
import ProgressBar from "../ProgressBar";
import TestCases from "../Game/TestCases";
import Actions from "../Game/Actions";


const GamePage = () => {
    const [state, setState] = useState(true);
    const [code, setCode] = useState('')
    const editorHandler = () => {
        setState(false)
    }
    const getCode = (code: any) => {
        setCode(code)
        console.log('fra parent', code)
    }
    useState(() => {
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
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    })
    const submitHandler = () => {
        console.log('data sent to backend')

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
            .then(response => response.text()
                .then(response => {
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }


    return (
        <>
            <Header/>
            {state &&
                <NewCard>
                    <div>
                        <Title title="Velg neste utfordring"/>
                        <Questions/>
                        <Button handleOnClick={editorHandler} text='click me'/>
                    </div>
                    <ProgressBar/>
                </NewCard>}
            {!state &&
                <div>

                    <div
                        className='flex flex-col sm:flex-row justify-between items-stretch ml-2 mt-2 mr-2'>
                        <div
                            className='flex-grow-1 w-1/3 max-h-[92vh] min-w-[400px] min-h-[400px] max-width-[300px] whitespace-pre-wrap overflow-x-hidden bg-gameComps resize-x p-4 shadow-2xl mr-2 '>
                            <Problem/>
                        </div>
                        <div className='flex flex-col '>
                            <div
                                className='p-4 w-2/3 overflow-auto resize w-[1250px] min-w-[400px] max-h-[450px] min-h-[400px] max-w-[1250px] flex-grow-1 shadow-2xl bg-gameComps flex-wrap ml-2 '>
                                <GameEditor onChange={getCode}/>
                            </div>
                            <div className='flex flex-col sm:flex-row'>
                                <TestCases/>
                                <div className='flex flex-col justify-center items-start w-1/3 space-x-4'>
                                    <Actions handleOnClick={submitHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default GamePage;