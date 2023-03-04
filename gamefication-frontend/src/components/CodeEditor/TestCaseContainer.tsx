import TestCases from "../Game/TestCases";
import React, {RefObject, useEffect, useState} from "react";
import {TestCase} from "../models";

type Props = {
    task: TestCase[]
    testCaseHandler: (index: number) => void
    successfulTests: number[]
}

interface MousePosition {
    x: number;
    y: number;
}


const TestCaseContainer = (props: Props) => {
    const testCases = props.task
    const [elementRef, setElementRef] = useState<RefObject<HTMLDivElement>[]>([])
    let mousePosition: MousePosition = {x: 0, y: 0}
    const [mouseDistance, setMouseDistance] = useState<Array<number>>([]);

    useEffect(() => {
        setElementRef(refs => Array(5).fill([{}, {}, {}, {}, {}]).map((_, i) => refs[i] || React.createRef<HTMLDivElement>()))
    }, [testCases])

    const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        for (let i = 0; i < testCases.length; i++) {
            if (!elementRef[i])
                continue
            const {left, top, width, height} = elementRef[i].current!.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;
            mousePosition = {x: x, y: y}
            const centerX = width / 2;
            const centerY = height / 2;
            let dist = Math.abs(centerX - x) + Math.abs(centerY - y);
            dist /= 50;
            dist = 5 - dist;
            if (dist === mouseDistance[i] || dist < 1)
                continue
            mouseDistance[i] = Math.max(dist, 2)
        }
        setMouseDistance([...mouseDistance])
    }

    const handleOnMouseLeave = () => {
        for (let i = 0; i < mouseDistance.length; i++) {
            mouseDistance[i] = 2;
        }
        setMouseDistance([...mouseDistance])
    }

    return (
        <div
            className='flex flex-row justify-center gap-24 items-center bg-gameComps mt-2 px-4 py-20 w-[40rem] h-56 max-h-48 translate-all'
            onMouseMove={handleOnMouseMove} onMouseLeave={handleOnMouseLeave}>
            {testCases.map((test, index) => {
                return (
                    <TestCases ref={elementRef[index]} input={test.input} output={test.output}
                               onClick={() => props.testCaseHandler(index)}
                               distance={mouseDistance[index]}
                               success={props.successfulTests[index]}
                               id={index}
                    />
                );
            })}
        </div>)
}

export default TestCaseContainer;