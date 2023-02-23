import Question from "./Question";
import React from "react";
import { GameTask } from "../models";

type Props = {
    onClick: (id: number) => void;
    //problemsList: GameTask[]

}
const Questions = (props: Props) => {
    return (
        <div className="flex flex-wrap justify-center" >
            <Question onClick={props.onClick} id={0} />
            <Question onClick={props.onClick} id={1} />
            <Question onClick={props.onClick} id={2} />            
        </div>
    );
}

export default Questions;