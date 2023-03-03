import React, {useEffect, useState} from 'react';
import TestCase from "./TestCase";

type Props = {
    input: string,
    output: string,
    onClick: (id: number) => void;
    taskIndex : number,
    successful : boolean[]


}

const TestCases = (props:Props) => {
    const [state, setState] = useState(false)
    const [successful, setSuccessful] = useState(false)

    useEffect(() => {
        setSuccessful(props.successful[props.taskIndex])
        console.log("setting success")
    }, [props.successful])

    return (
        <div>
            <TestCase successful={successful} input={props.input} output={props.output} onClick={props.onClick} id={0} />
        </div>
    );
};

export default TestCases;