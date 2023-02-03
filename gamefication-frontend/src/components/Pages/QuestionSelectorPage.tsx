import React from 'react';
import Questions from '../Problems/Questions';
import Header from '../Header';
import NewCard from '../UI/NewCard';
import { Title } from '../Title/Title';

const QuestionSelectorPage = () => {
    return (
        <>  
            <Header />
            <NewCard>     
                <Title title="Velg neste utfordring"/>        
                <Questions />
            </NewCard>
        </>
    );
};

export default QuestionSelectorPage;