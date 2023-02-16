import {Capsule} from "../UI/Capsule";
import QuestionContainer from "../UI/QuestionContainer";
import {useState} from "react";

interface rewards {
    Lives: number,
    Time: number,
    Points: number,

}

interface GameTask {
    Description: string,
    StartCode: string,
    TestCases: [],
    Rewards: rewards,
}

const Question = (props: any) => {
    const [task, setTask] = useState<GameTask[]>([]);

    const fetchData = () => {
        fetch('https://localhost:7067/api/SelectTask?taskId=0', {
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
            .then(response => response.json()
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