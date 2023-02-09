import React from 'react';

const NewCard = (props: any) => {
    const classes = 'card ' + props.className;
    return (
        <div className='text-center mx-52 my-10 overflow-visible mx-52 my-10 overflow-visible'>
            <div
                className={classes + 'mx-auto bg-black rounded-3xl border-4 border-yellow-400 relative py-10'}>{props.children}
            </div>
        </div>
    );
};
export default NewCard;

{/* <div className='p-52 overflow-visible'>{props.children}
            <div className='mx-auto bg-gray-900 rounded-md border-4 border-yellow-500'>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-center text-2xl font-bold text-white break-words my-3.5'>{props.title}</h2>
                    <div className='grid grid-cols-1 my-12'>
                        <div className='p-4'>
                            <h2 className='font-semibold text-white break-words my-3.5'>{props.text}</h2>
                            <p className='text--sm mt-4 text-white break-words my-3.5'>{props.description}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                    <button className='bg-yellow-500 text-white px-6 py-0.5 mb-2.5 rounded-full text-xl '>{props.button}</button>
                </div>
            </div>

        </div>*/}