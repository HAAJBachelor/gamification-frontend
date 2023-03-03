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
            console.log("hei")
        return (
            <div className='pt-38'>
                <NewCard>
                    <Title title="Velkommen til Gamification"/>
                    <div className='flex justify-center cursor-pointer'>
                        <img onClick={startSession} className="max-w-52 max-h-52 mb-6 rounded-2xl group-hover:shadow-md group-hover:shadow-yellow-500" src={yellowFolk} alt="two OXX yellow folk"/>
                    </div>
                    <div className='flex justify-center align-center'>
                       <Button text="Start" handleOnClick={startSession}></Button>
                        
                        {/* <svg className="group-hover:animate-bounce h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#FACC14"></path> 
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FACC14" stroke-width="2"></path> 
                                <path d="M12 8L12 16" stroke="#FACC14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                                <path d="M15 11L12.087 8.08704V8.08704C12.039 8.03897 11.961 8.03897 11.913 8.08704V8.08704L9 11" stroke="#FACC14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>*/}
                    </div>
                </NewCard>
                <RulesButton openModal={openModal}/>
                <RulesModal visible={modalIsOpen} onClose={closeModal}/>
            </div>
        );
    }
;
export default LandingPage