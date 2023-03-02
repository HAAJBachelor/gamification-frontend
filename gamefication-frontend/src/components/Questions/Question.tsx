import {useEffect, useState} from "react";
import {GameTask} from "../models";
import Capsule from "../UI/Capsule";
import LoadingSpinner from "../UI/LoadingSpinner";
import QuestionContainer from "../UI/QuestionContainer";

import rocket from '../../image/rocket.png'

type Props = {
    onClick: (id: number) => void;
    id: number;
    problemsList: GameTask[];
}
const Question = (props: Props) => {
    const onCLick = () => {
        props.onClick(props.id)
    }


    const backgroundColorDifficulty = (difficulty: string) => {
        let bgcolor = "";
        if (difficulty.toUpperCase() === "EASY") {
            bgcolor = "bg-[#C8DF52]";
        }
        if (difficulty.toUpperCase() === "MID") {
            bgcolor = "bg-yellow-400";
        }
        if (difficulty.toUpperCase() === "HARD") {
            bgcolor = "bg-red-600";
        }
        return bgcolor;
    }

    const picture = <img className=" inline w-[25px] h-[25px] ml-[8px]" src={rocket} alt='yellow rocket'/>

    return (
        <>
            {(props.problemsList.length === 0) &&
                <>
                    <div
                        className="rounded-lg w-36  h-fit p-1 bg-[#57585B] m-2 cursor-pointer transition-all scale-75">
                        <div
                            className="items-center rounded-full max-w-none h-8 my-[5px] flex relative bg-gray-500 animate-pulse"></div>
                        <div
                            className="items-center rounded-full max-w-none h-8 my-[5px] flex relative bg-gray-500 animate-pulse delay-150"></div>
                        <div
                            className="items-center rounded-full max-w-none h-8 my-[5px] flex relative bg-gray-500 animate-pulse delay-300"></div>
                    </div>
                </>}
            {(props.problemsList.length !== 0) &&
                <>
                    <QuestionContainer onClick={onCLick}>
                        <Capsule
                            index={1}
                            bgcolor={backgroundColorDifficulty(props.problemsList[props.id].difficulty.toUpperCase()) + " border-red-800"}
                            text={props.problemsList[props.id].difficulty.toUpperCase()}/>
                        <Capsule
                            index={2}
                            bgcolor="bg-yellow-400 border-yellow-600"
                            text={props.problemsList[props.id].rewards.time + " min | " +
                                props.problemsList[props.id].rewards.lives + " X"}
                            picture={picture}
                        />
                        <Capsule index={3} bgcolor="bg-yellow-400 border-yellow-600"
                                 text={props.problemsList[props.id].rewards.lives}/>
                    </QuestionContainer>
                </>
            }
        </>
    );
}
export default Question;