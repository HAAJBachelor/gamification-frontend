import React from "react";
import {Button} from "../UI/Button";
import Header from "../Header/Header";
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import ProgressBar from "../ProgressBar";

const RulesPage = () => {

    return (
        <>
            <Header/>
            <div>
                <p className='text-white'>here it is {}</p>
            </div>
            <NewCard>
                <div>
                    <Title title="Velg neste utfordring"/>
                    <Questions/>
                    <Button text='click me'/>

                </div>
                <ProgressBar/>
            </NewCard>

        </>
    )

};

export default RulesPage;