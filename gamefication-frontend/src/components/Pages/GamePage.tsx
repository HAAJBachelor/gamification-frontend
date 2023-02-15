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

    const newEditorHandler = () => {
        setState(false)
    }
    const closeEditorHandler = () => {
        setState(true)
    }
    return (
        <>
            <Header/>
            {state &&
                <NewCard>
                    <div>
                        <Title title="Velg neste utfordring"/>
                        <Questions/>
                        <Button handleOnClick={newEditorHandler} text='click me'/>
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
                        <div className='flex flex-col'>
                            <div
                                className='p-4 w-2/3 overflow-auto resize w-[1250px] min-w-[400px] max-h-[450px] min-h-[400px] max-w-[1250px] flex-grow-1 shadow-2xl bg-gameComps flex-wrap ml-2 '>
                                <GameEditor/>
                            </div>
                            <div className='flex flex-col sm:flex-row'>
                                <TestCases/>
                                <div className='flex flex-col justify-center items-start w-1/3 space-x-4'>
                                    <Actions/>
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