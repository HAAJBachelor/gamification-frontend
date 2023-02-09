import {Capsule} from "../UI/Capsule";
import QuestionContainer from "../UI/QuestionContainer";
import {useState} from "react";

const Question = () => {
    const [task, setTask] = useState('');
    let yo = 'hello '

    const fetchData = () => {
        fetch('http://localhost:7067/api/SelectTask?taskId=0', {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
            }
        }).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        })
            .then(response => response.text()
                .then(response => {
                    setTask(response)
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
        console.log(task)
    }

    return (
        <QuestionContainer onClick={fetchData}>
            <Capsule bgcolor="bg-yellow-400" text="< />"/>
            <Capsule bgcolor="bg-yellow-400" text="EASY"/>
            <Capsule bgcolor="bg-yellow-400" text="3 min"/>
        </QuestionContainer>
    );
}

export default Question;