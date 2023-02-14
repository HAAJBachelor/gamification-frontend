import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import Header from "../Header/Header";
import {Button} from "../UI/Button";
import ProgressBar from "../ProgressBar";


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
                <div className='flex flex-row justify-between items-stretch overflow-visible'>
                    <div
                        className='flex-grow-1 w-1/3 max-h-screen min-w-[400px] min-h-[400px] whitespace-pre-wrap overflow-y-scroll bg-gameComps resize rounded-md p-4 shadow-2xl mr-2 mt-4'>
                        <Problem/>
                    </div>

                    <div
                        className='p-4 w-2/3 overflow-auto resize rounded-md max-h-[450px] min-w-[400px] min-h-[400px] flex-grow-1 shadow-2xl bg-gameComps flex-wrap ml-2 mt-4'>
                        <GameEditor/>
                    </div>

                </div>
            }
        </>

    );
};

export default GamePage;