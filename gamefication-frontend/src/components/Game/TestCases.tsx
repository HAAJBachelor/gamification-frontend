import React from 'react';
import TestCase from "./TestCase";

type Props = {
    input: string,
    output: string,
}

const TestCases = (props:Props) => {
    return (

            <div className='text-white shadow-2xl bg-gameComps p-4 m-2 hover:bg-hover w-auto'>
                <TestCase input={props.input} output={props.output}/>
            </div>

    );
};

export default TestCases;