import React, {useState} from 'react';

type Props = {
    onClick: (id: number) => void;
}

const TestCase = (props: any) => {
    const [ping, setPing] =useState(false)


    const onCLick = () => {
        props.onClick(props.id)
        setPing(!ping)
    }
    return (
        <div className=''>
            <button
                className={`bg-red-500 hover:bg-red-700 shadow-2xl shadow-red-500 text-white font-bold py-12 px-12 rounded-full transform hover:scale-125 transition ease-in-out delay-150 ${(ping === true)? '' : 'animate-pulse'}`}
                onClick={onCLick}>

            </button>
        </div>
    );
};

export default TestCase;