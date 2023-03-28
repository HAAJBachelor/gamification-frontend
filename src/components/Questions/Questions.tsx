import Question from "./Question";
import React, {useEffect, useState} from "react";
import {GameTask} from "../models";
import {API} from "../../Constants";

type Props = {
    onClick: (id: number) => void;

}
const Questions = (props: Props) => {
    const [problems, setProblems] = useState<GameTask[]>([]);

    useEffect(() => {
        API.generateTasks()
            .then(response => {
                if (!response.ok)
                    throw new Error("no data")
                return response
            })
            .then(response => response.json()
                .then((response: GameTask[]) => {
                    setProblems(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            <Question onClick={props.onClick} id={0} problemsList={problems}/>
            <Question onClick={props.onClick} id={1} problemsList={problems}/>
            <Question onClick={props.onClick} id={2} problemsList={problems}/>
        </div>
    );
}

export default Questions;