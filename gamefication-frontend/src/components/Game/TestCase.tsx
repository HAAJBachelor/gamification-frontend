import React from 'react';

type Props = {
    onClick: (id: number) => void;
}

const TestCase = (props: any) => {

    const onCLick = () => {
        props.onClick(props.id)
    }
    return (
        <div className='rounded-full'>
            <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-8 px-8 rounded-full border-2 border-background'
                onClick={onCLick}>

            </button>
        </div>
    );
};

export default TestCase;