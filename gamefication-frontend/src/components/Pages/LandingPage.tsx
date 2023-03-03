import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Title} from '../Title/Title';
import yellowFolk from '../../image/OXX_Yellowfolk.png'
import {Button} from '../UI/Button';
import {useNavigate} from "react-router-dom";
import RulesButton from "../RulesButton";
import RulesModal from "../UI/RulesModal";


const LandingPage = () => {
        const [gameSession, setGameSession] = useState('')
        const [session, setSession] = useState(false)
        const [modalIsOpen, setIsOpen] = useState(false);

        let navigate = useNavigate();
        const openModal = () => {
            setIsOpen(true);
        }
        const closeModal = () => {
            setIsOpen(false);
        }

        const startSession = () => {
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
                        setSession(true)
                        navigate('game')
                    })).catch((error: Error) => {
                console.log(error.message)
            })
        }

        return (
            <div className='pt-38'>
                <NewCard>
                    <Title title="Velkommen til Gamification"/>
                    <div className='flex justify-center'>
                        <img className="group-hover:animate-pulse max-w-52 max-h-52 rounded-2xl " src={yellowFolk} alt="two OXX yellow folk"/>
                    </div>
                    <div>
                        <Button text="Start" handleOnClick={startSession}></Button>
                    </div>
                </NewCard>
                <RulesButton openModal={openModal}/>
                <RulesModal visible={modalIsOpen} onClose={closeModal}/>
            </div>
        );
    }
;
export default LandingPage