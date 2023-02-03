import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Card from "../UI/Card";
import Header from "../Header/Header";
import NewCard from "../UI/NewCard";


const MainPaige = () => {
    const playHandler = () =>{

    }
    return (
        <>
            <div className='bg-gray-800 h-screen '>
                <Header/>
                <NewCard>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-center text-2xl font-bold text-white break-words my-3.5'>asdfasdasdasd</h2>
                        <div className='grid grid-cols-1 my-12'>
                            <div className='p-4'>
                                <h2 className='font-semibold text-white break-words my-3.5'>asdasdasdasd</h2>
                                <p className='text--sm mt-4 text-white break-words my-3.5'>asdasdasdasd</p>
                            </div>
                        </div>
                    </div>
                </NewCard>
            </div>
        </>
    );
};

export default MainPaige;