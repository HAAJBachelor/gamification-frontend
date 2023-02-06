import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import GameEditor from "../CodeEditor/GameEditor";
import Problem from "../CodeEditor/Problem";
import Header from "../Header/Header";


const GamePage = () => {

    const [state, setState] = useState(true);

    const newEditorHandler = () => {
        setState(false)
    }
    const closeEditorHandler = () => {
        setState(true)
    }
    return (
        <div className='bg-zinc-800 h-screen'>
            <Header/>
            {state &&
                <NewCard>
                    <div>
                        <Title title="Velg neste utfordring"/><Questions/>
                        <div className='py-4'>
                            <button onClick={newEditorHandler}
                                    className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">Click mee
                            </button>
                        </div>
                    </div>
                </NewCard>}
            {!state && <NewCard>
                <div className='flex flex-row justify-space-between'>
                    <Problem/>
                    <GameEditor/>
                </div>
                <div className='py-4'>
                    <button onClick={closeEditorHandler}
                            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">Click me
                    </button>
                </div>
            </NewCard>}
        </div>
    );
};

export default GamePage;