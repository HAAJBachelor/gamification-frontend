import Question from "./Question";
import React from "react";
import { GameTask } from "../models";

type Props = {
    onClick: (id: number) => void;
    problemsList: GameTask[]

}
const Questions = (props: Props) => {
    return (
        <div className="flex flex-wrap justify-center" >
            <Question onClick={props.onClick} id={0} problemsList={props.problemsList}/>
            <Question onClick={props.onClick} id={1} problemsList={props.problemsList}/>
            <Question onClick={props.onClick} id={2} problemsList={props.problemsList}/>            
        </div>
    );
}

export default Questions;