import {useEffect, useState} from 'react';
import rocket from '../../image/rocket.png';
import {State} from "../models";
import {API} from "../../Constants";


export const Liv = () => {
    const [lives, setLives] = useState(0);

    useEffect(() => {
        API.getState()
            .then(response => response)
            .then(response => {
                if (!response.ok) throw new Error("no data")
                return response
            })
            .then(response => response.json())
            .then((response: State) => {
                setLives(response._lives)
            })
            .catch((error: Error) => {
                console.log(error.message)
            })
    }, [])

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