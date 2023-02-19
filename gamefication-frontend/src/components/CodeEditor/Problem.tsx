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
                <h1 className='text-yellow-500 text-2xl text-center'>Solve this</h1>
                <br/>
                <p className='text-white'>{props.description}</p>
            </div>
            <div className='bg-background mt-20 text-start'>
                <div>
                    <div className='text-center text-yellow-500 uppercase m-10'>
                        <h1>Foreventet input og output</h1>
                    </div>
                    <p className='text-white '>{props.input}</p>
                </div>

                <div>
                    <p className='text-white'>{props.output}</p>
                </div>
            </div>
        </>
    );
};

export default Problem;