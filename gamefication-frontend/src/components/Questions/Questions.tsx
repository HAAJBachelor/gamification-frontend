import Question from "./Question";
import React from "react";

type Props = {
    onClick: (id: number) => void;
}
const Questions = (props: Props) => {
    return (
        <div className="flex flex-wrap justify-center">
            <Question onClick={props.onClick} id={0}/>
            <Question onClick={props.onClick} id={1}/>
            <Question onClick={props.onClick} id={2}/>
            <p></p>
        </div>
    );
}

export default Questions;