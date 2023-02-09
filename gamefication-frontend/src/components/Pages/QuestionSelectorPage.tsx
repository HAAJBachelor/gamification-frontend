import React from 'react';
import Questions from '../Questions/Questions';
import Header from '../Header/Header';
import NewCard from '../UI/NewCard';
import {Title} from '../Title/Title';
import ProgressBar from '../ProgressBar';

const QuestionSelectorPage = () => {
    return (
        <>
            <Header/>
            <NewCard>
                <Title title="Velg neste utfordring"/>
                <Questions/>
                <ProgressBar/>
            </NewCard>
        </>
    );
};

export default QuestionSelectorPage;