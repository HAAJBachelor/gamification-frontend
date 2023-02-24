import { useEffect, useState } from 'react';
import rocket from '../../image/rocket.png';
import { State } from "../models";


export const Liv = () => {    
    const [lives, setLives] = useState(0);

    useEffect(() => {
        try{
            const fetchData = async() => {
                const response = await fetch("https://localhost:7067/api/GetState", {
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Set-Cookie',
                    }
                })
                if (!response.ok) throw new Error("no data")
                const data: State = await response.json()
                console.log(data)
        
                setLives(data._lives)    
            }
            fetchData();
        }catch(error: any){
            console.log(error.message);
        }},[])

        console.log(lives);
    return(
        <>
            <div className='inline-flex absolute right-2 '>Liv: 
                <img className="w-[25px] h-[25px] ml-[8px]" src={rocket} alt='yellow rocket'/>
                X {lives}
            </div>
        
        </>
    );        
}