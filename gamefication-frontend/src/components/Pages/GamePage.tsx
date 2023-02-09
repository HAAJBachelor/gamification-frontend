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
                <div>
                    <div className='flex flex-row justify-items-center'>
                        <div className='justify-center'>
                            <Problem/>
                        </div>
                        <div>
                            <GameEditor/>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Button handleOnClick={closeEditorHandler} text='click me'/>
                    </div>

                </div>}
        </>

    );
};

export default GamePage;