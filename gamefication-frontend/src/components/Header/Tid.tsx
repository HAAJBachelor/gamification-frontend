import { useState } from "react";
import { State } from "../models";
import LoadingSpinner from "../UI/LoadingSpinner";

const Tid = () => {
    const [time, setTime] = useState<State>();
    /*try{
        const fetchData = async() => {
            const response = await fetch("https://localhost:7067/api/GetState", {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
            }
            })
            if(!response.ok) throw new Error("no data");
            const data = await response.json();
            setTime(data);
        }
        fetchData();
    }catch(error: any){
        console.log(error.message);
    }*/

    const today = new Date();
    const tid = today.toLocaleTimeString();  

    return (
        <>
            <div>Tid: {tid}</div>
            
        </>
    );
}

export default Tid;
