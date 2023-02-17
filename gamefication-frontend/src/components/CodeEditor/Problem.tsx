import React from 'react';

type Props = {
    description: string,
    input: string,
    output: string,

}
const Problem = (props: Props) => {
    return (
        <>
            <div>
                <h1 className='text-white text-2xl'>Solve this</h1>
                <br/>
                <p className='text-white'>{props.description}</p>
            </div>
            <div>
                <p className='text-white pt-20'>{props.input}</p>
            </div>

            <div>
                <p className='text-white'>{props.output}</p>
            </div>
        </>
    );
};

export default Problem;