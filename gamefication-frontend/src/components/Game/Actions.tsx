import React from 'react';


const Actions = (props: any) => {
    return (
        <div className='flex flex-row sm:flex-col justify-between'>

            <div className='m-8'>
                <button onClick={props.handleOnTestClick}
                        className="bg-gameComps hover:bg-hover text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded">
                    Test All
                </button>
            </div>

            <div className='m-8'>
                <button
                    onClick={props.handleOnClick}
                    className="bg-gameComps hover:bg-hover text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded">
                    {props.text}
                </button>
            </div>
            <div className='m-8'>
                <button
                    onClick={props.handleOnClickTest}
                    className="bg-gameComps hover:bg-hover text-yellow-500 font-semibold hover:text-yellow-300 py-2 px-4 border border-background hover:border-transparent rounded">
                    {props.test}
                </button>
            </div>
        </div>
    );
};

export default Actions;