import React from 'react';
import TestCase from "./TestCase";

type Props = {
    input: string,
    output: string,
    onClick: (id: number) => void;
    ref: React.Ref<HTMLDivElement>
    distance: number
    success: number
    id: number
}

const TestCases: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <TestCase input={props.input} output={props.output} onClick={props.onClick} id={props.id} ref={ref}
                  distance={props.distance} success={props.success}/>
    );
});

export default TestCases;