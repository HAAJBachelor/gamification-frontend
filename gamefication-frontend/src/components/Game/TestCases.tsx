import React from 'react';
import TestCase from "./TestCase";

type Props = {
    input: string,
    output: string,
    onClick: (id: number) => void;

}

const TestCases = (props:Props) => {
    return (

        /*
            <div className='text-white shadow-2xl bg-gameComps p-4 mt-2 hover:bg-hover w-auto'>
                <TestCase input={props.input} output={props.output}/>

            </div>
*/
        <div>

            <TestCase input={props.input} output={props.output} onClick={props.onClick} id={0}/>
        </div>
    );
};

export default TestCases;