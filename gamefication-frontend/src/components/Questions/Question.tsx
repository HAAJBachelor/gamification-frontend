import { useEffect, useState } from "react";
import { GameTask } from "../models";
import Capsule from "../UI/Capsule";
import LoadingSpinner from "../UI/LoadingSpinner";
import QuestionContainer from "../UI/QuestionContainer";

import rocket from '../../image/rocket.png'

type Props = {
    onClick: (id: number) => void;
    id: number;
    problemsList: GameTask[]
    
}
const Question = (props: Props) => {    
    const onCLick = () => {
        props.onClick(props.id)
    }

    
    const backgroundColorDifficulty = (difficulty: string) =>  {
        let bgcolor = "";
        if(difficulty.toUpperCase() === "EASY") {
            bgcolor = "bg-[#C8DF52]";
        }
        if(difficulty.toUpperCase() === "MID") {
            bgcolor = "bg-yellow-400";
        }
        if(difficulty.toUpperCase() === "HARD") {
            bgcolor = "bg-red-600";
        }
        return bgcolor;
    }

    return (
        <QuestionContainer onClick={onCLick}>
            {(props.problemsList.length === 0) && <LoadingSpinner />}            
            {(props.problemsList.length !== 0) &&  
            <>
                <Capsule 
                    bgcolor={backgroundColorDifficulty(props.problemsList[props.id].difficulty.toUpperCase())} 
                    text={props.problemsList[props.id].difficulty.toUpperCase()}/>
                <Capsule 
                    bgcolor="bg-yellow-400" 
                    text={props.problemsList[props.id].rewards.time + " min | " + 
                    props.problemsList[props.id].rewards.lives}
                />
                <Capsule bgcolor="bg-yellow-400" text={props.problemsList[props.id].rewards.lives}/>
            </>            
            }
        </QuestionContainer>
    );
}
export default Question;