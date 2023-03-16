import {useEffect, useState} from 'react';
import rocket from '../../image/rocket.png';
import {State} from "../models";


export const Liv = () => {
    const [lives, setLives] = useState(0);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch("https://localhost:7067/api/GetState", {
                    credentials: 'include',
                    headers: {
                        'Access-Control-Allow-Headers': 'Authorization',
                    }
                })
                if (!response.ok) throw new Error("no data")
                const data: State = await response.json()
                console.log(data)

                setLives(data._lives)
            }
            fetchData();
        } catch (error: any) {
            console.log(error.message);
        }
    }, [])

    console.log(lives);
    return (
        <>
            <div className='flex flex-row items-center justify-center gap-2'>
                <img className="w-[40px] h-[40px]" src={rocket} alt='yellow rocket'/>
                <span className={"whitespace-nowrap"}> X</span>
                <div className=''>
                    <span className={"whitespace-nowrap text-2xl"}> {lives}</span>
                </div>
            </div>

        </>
    );
}