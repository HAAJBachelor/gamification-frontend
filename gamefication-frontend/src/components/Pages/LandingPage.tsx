import React, {useState} from 'react';
import Header from "../Header/Header";
import NewCard from "../UI/NewCard";
import {Title} from '../Title/Title';
import yellowFolk from '../../image/OXX_Yellowfolk.png'
import {Button} from '../UI/Button';
import {Link} from "react-router-dom";

const LandingPage = () => {
        const [gameSession, setGameSession] = useState('')
        const fetchData = () => {
            fetch('https://localhost:7067/api/CreateSession', {
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
                        setGameSession(response)
                        console.log(response)
                    })).catch((error: Error) => {
                console.log(error.message)
            })
        }
        return (
            <>
                <div>
                    <Header/>
                    <NewCard>
                        <Title title="Velkommen til Gamification"/>
                        <div className='flex justify-center'>
                            <img className="max-w-52 max-h-52" src={yellowFolk} alt="two OXX yellow folk"/>
                        </div>
                        <div>
                            <Link to='game'>
                                <Button text="Start" handleOnClick={fetchData}></Button>
                            </Link>
                        </div>
                    </NewCard>
                </div>
            </>
        );
    }
;
export default LandingPage