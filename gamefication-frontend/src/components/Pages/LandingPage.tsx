import React from 'react';
import Header from "../Header/Header";
import NewCard from "../UI/NewCard";
import {Title} from '../Title/Title';
import yellowFolk from '../../image/OXX_Yellowfolk.png'
import {Button} from '../UI/Button';
import {Link} from "react-router-dom";


const LandingPage = () => {
    const playHandler = () => {

    }
    return (
        <>
            <div className='bg-black h-screen '><Header/>
                <NewCard>
                    <Title title="Velkommen til Gamification"/>
                    <div className='flex justify-center'>
                        <img className="max-w-52 max-h-52" src={yellowFolk} alt="two OXX yellow folk"/>
                    </div>
                    <div>
                        <Link to='game'>
                            <Button text="Start"></Button>
                        </Link>
                    </div>

                </NewCard>
            </div>
        </>
    );
};

export default LandingPage