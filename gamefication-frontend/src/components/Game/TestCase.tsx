import React from 'react';

type Props = {
    onClick: (id: number) => void;
}

const TestCase = (props: any) => {

    const onCLick = () => {
        props.onClick(props.id)
    }
    return (
        /*<div className='flex flex-row justify-between items-center'>
            <p className='flex-none'>{props.input}</p>
            <h4 className='justify-items-center items-center'>{props.output} </h4>
            <button
                className="bg-background hover:bg-hover text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded">
                Play
            </button>
        </div>*/

        <div className='rounded-full'>
            <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-8 px-8 rounded-full border-2 border-background'
                onClick={onCLick}>

            </button>
        </div>
    );
};

export default TestCase;