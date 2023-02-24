import Question from "./Question";
import React, { useEffect, useState } from "react";
import { GameTask } from "../models";

type Props = {
    onClick: (id: number) => void;

}
const Questions = (props: Props) => {    
    const [problems, setProblems] = useState<GameTask[]>([]);

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

    console.log(problems);

    return (
        <div className="flex flex-wrap justify-center" >
            <Question onClick={props.onClick} id={0} problemsList={problems}/>
            <Question onClick={props.onClick} id={1} problemsList={problems}/>
            <Question onClick={props.onClick} id={2} problemsList={problems}/>            
        </div>
    );
}

export default Questions;