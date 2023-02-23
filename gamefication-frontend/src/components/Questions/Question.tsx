import { useEffect, useState } from "react";
import { GameTask } from "../models";
import Capsule from "../UI/Capsule";
import LoadingSpinner from "../UI/LoadingSpinner";
import QuestionContainer from "../UI/QuestionContainer";

import rocket from '../../image/rocket.png'

type Props = {
    onClick: (id: number) => void;
    id: number;
    
}
const Question = (props: Props) => {    
    
    const [problems, setProblems] = useState<GameTask[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        try{
            const fetchData = async() => {
                const response = await fetch('https://localhost:7067/api/GenerateTasks', {
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
                    }
                })
                if(!response.ok) throw new Error("500")
                const data = await response.json();
                setProblems(data);            
            }
            fetchData(); 
        }catch(error: any){
            console.log(error.message); 
        }                     
    }, []);

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
            {(problems.length === 0) && <LoadingSpinner />}            
            {(problems.length !== 0) &&  
            <>
                <Capsule bgcolor={backgroundColorDifficulty(problems[props.id].difficulty.toUpperCase())} text={problems[props.id].difficulty.toUpperCase()}/>
                <Capsule 
                    bgcolor="bg-yellow-400" 
                    text={problems[props.id].rewards.time + " min | " + problems[props.id].rewards.lives}
                />
                <Capsule bgcolor="bg-yellow-400" text={problems[props.id].rewards.lives}/>
            </>            
            }
        </QuestionContainer>
    );
}
export default Question;