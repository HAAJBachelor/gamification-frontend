import React from 'react';


type Props = {
    text: string
    test: string
    handleOnTestAllClick: () => void
    handleOnClickSubmit: () => void
}

const actionButton = (callback: any, text: string) => {
    return (
        <button onClick={callback}
                className="overflow-hidden whitespace-nowrap  xl:p-2  md:text-[12px] md:p-1 lg:text-md xl:text-xl max-h-fit max-w-fit text-yellow-500 font-semibold hover:text-yellow-300 border border-background hover:border-transparent rounded hover:scale-110 transition-all duration-300 mt-2 text-left rounded-2xl bg-gameComps shadow-lg shadow-yellow-900 transform hover:scale-125">
            {text}
        </button>
    );
}


const Actions = (props: Props) => {
    return (
        <div className='flex flex-row sm:flex-col justify-evenly items-center  h-full'>
            {actionButton(props.handleOnTestAllClick, "Test alle")}
            {actionButton(props.handleOnClickSubmit, "Fullfør")}
            {actionButton(null, "Nullstill")}
        </div>
    );
};

export default Actions;