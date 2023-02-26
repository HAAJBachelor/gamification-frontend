import React from 'react';
import TestCase from "./TestCase";

type Props = {
    input: string,
    output: string,
    onClick: (id: number) => void;

}

const TestCases = (props:Props) => {
    return (
        <div>

            <TestCase input={props.input} output={props.output} onClick={props.onClick} id={0}/>
        </div>
    );
};

export default TestCases;