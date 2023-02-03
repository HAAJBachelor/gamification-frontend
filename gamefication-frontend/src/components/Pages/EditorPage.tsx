import React from 'react';
import NewCard from "../UI/NewCard";
import Header from "../Header";
import GameEditor from "../CodeEditor/GameEditor";

const EditorPage = () => {
    return (

        <div className='bg-slate-800 h-screen'>
            <Header/>
            <NewCard>
                <GameEditor></GameEditor>
            </NewCard>
        </div>

    );
};

export default EditorPage;