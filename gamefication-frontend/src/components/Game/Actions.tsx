import React from 'react';


const Actions = (props: any) => {
    return (
        <div className='flex flex-row sm:flex-col justify-between'>

            <div className='m-8'>
                <button onClick={props.handleOnTestAllClick}
                        className="text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded hover:scale-110 transition-all duration-300 mt-2 text-left rounded-2xl p-4 bg-gameComps shadow-lg shadow-yellow-900">
                    Test All
                </button>
            </div>

            <div className='m-8  '>
                <button
                    onClick={props.handleOnClickSubmit}
                    className="text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded hover:scale-110 transition-all duration-300 mt-2 text-left rounded-2xl p-4 bg-gameComps shadow-lg shadow-yellow-900">
                    {props.text}
                </button>
            </div>
            <div className='m-8'>
                <button
                    onClick={props.handleOnClickTest}
                    className="text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded hover:scale-110 transition-all duration-300 mt-2 text-left rounded-2xl p-4 bg-gameComps shadow-lg shadow-yellow-900">
                    {props.test}
                </button>
            </div>
        </div>
    );
};

export default Actions;