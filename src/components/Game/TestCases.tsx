import React from 'react';
import TestCase from "./TestCase";
import {ConsoleData} from "../Pages/GamePage";

type Props = {
    input: string,
    output: string,
    onClick: (id: number) => Promise<Response>
    ref: React.Ref<HTMLDivElement>
    distance: number
    id: number
    setRunning: (index: number, val: boolean) => void
    running: boolean
    setConsoleOutput: (val: ConsoleData) => void
    setRunAllTestCases: (val: boolean) => void

}

const TestCases: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <TestCase input={props.input} output={props.output} onClick={props.onClick} id={props.id} ref={ref}
                  distance={props.distance} setRunning={props.setRunning} running={props.running}
                  setConsoleOutput={props.setConsoleOutput}
                  setRunAllTestCases={props.setRunAllTestCases}
        />
    );
});

export default TestCases;