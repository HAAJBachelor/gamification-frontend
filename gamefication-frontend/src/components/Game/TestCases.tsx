import React from 'react';
import TestCase from "./TestCase";

type Props = {
    input: string,
    output: string,
    onClick: (id: number) => void;
    ref: React.Ref<HTMLDivElement>
    distance: number
}

const TestCases: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div className={""}>
            <TestCase input={props.input} output={props.output} onClick={props.onClick} id={0} ref={ref}
                      distance={props.distance}/>
        </div>
    );
});

export default TestCases;