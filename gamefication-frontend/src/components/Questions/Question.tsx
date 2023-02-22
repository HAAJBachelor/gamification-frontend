import { useEffect, useState } from "react";
import { GameTask } from "../models";
import Capsule from "../UI/Capsule";
import LoadingSpinner from "../UI/LoadingSpinner";
import QuestionContainer from "../UI/QuestionContainer";

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

    return (
        <QuestionContainer onClick={onCLick}>
            {(problems.length === 0) && <LoadingSpinner />}            
            {(problems.length !== 0) &&  
            <>
                <Capsule bgcolor="bg-yellow-400" text={problems[props.id].difficulty.toUpperCase()}/>
                <Capsule bgcolor="bg-yellow-400" text={problems[props.id].rewards.time}/>
                <Capsule bgcolor="bg-yellow-400" text={problems[props.id].rewards.lives}/>
            </>            
            }
        </QuestionContainer>
    );
}
export default Question;