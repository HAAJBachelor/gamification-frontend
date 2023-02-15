import React from 'react';

const TestCase = (props: any) => {
    return (
        <div className='flex flex-row justify-between justify-center items-center '>
            <p className='flex-none'>{props.nr}</p>
            <h4 className='justify-items-center items-center'>{props.title} </h4>
            <button
                className="bg-background hover:bg-hover text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded">
                Play
            </button>
        </div>
    );
};

export default TestCase;