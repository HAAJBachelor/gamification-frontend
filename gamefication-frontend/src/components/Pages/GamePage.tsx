import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import Header from "../Header/Header";
import {Button} from "../UI/Button";


const GamePage = () => {

    const [state, setState] = useState(true);

    const newEditorHandler = () => {
        setState(false)
    }
    const closeEditorHandler = () => {
        setState(true)
    }
    return (
        <div className='bg-black h-screen'>
            <Header/>
            {state &&
                <NewCard>
                    <div>
                        <Title title="Velg neste utfordring"/>
                        <Questions/>
                        <div className='py-4'>
                            <button onClick={newEditorHandler}
                                    className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">Click mee
                            </button>
                        </div>
                    </div>
                </NewCard>}
            {!state && <NewCard>
                <div className='flex flex-row justify-items-center'>
                    <div>
                        <Problem/>
                    </div>
                    <div>
                        <GameEditor/>
                    </div>

                </div>
                <div className='py-4'>
                    <Button onClickHandler={closeEditorHandler} text='clickme'/>
                </div>
            </NewCard>}
        </div>
    );
};

export default GamePage;