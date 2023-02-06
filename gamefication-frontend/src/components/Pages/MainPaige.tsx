import React from 'react';
import Header from "../Header/Header";
import NewCard from "../UI/NewCard";
import {Title} from '../Title/Title';
import yellowFolk from '../../image/OXX_Yellowfolk.png'
import {Button} from '../UI/Button';


const MainPaige = () => {
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
                    <Button text="Start"/>
                    {/*<div className='flex flex-col justify-center'>
                        <h2 className='text-center text-2xl font-bold text-white break-words my-3.5'>asdfasdasdasd</h2>
                        <div className='grid grid-cols-1 my-12'>
                            <div className='p-4'>
                                <h2 className='font-semibold text-white break-words my-3.5'>asdasdasdasd</h2>
                                <p className='text--sm mt-4 text-white break-words my-3.5'>asdasdasdasd</p>
                            </div>
                        </div>
                    </div>*/}
                </NewCard>
            </div>
        </>
    );
};

export default MainPaige;