import React from 'react';

const Card = (props:any) => {
    //const classes = 'card ' + props.className;

    return <div className='h-screen bg-black flex justify-center'>
        <div className={'flex justify-center  border-4 border-yellow-500 p-48 m-32'}>{props.children}
        </div>
    </div>;

};

export default Card;