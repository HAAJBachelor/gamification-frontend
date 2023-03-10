import TestCases from "../Game/TestCases";
import React, {RefObject, useEffect, useState} from "react";
import {TestCase} from "../models";
import {ConsoleData, ConsoleDisplayType} from "../Pages/GamePage";

type Props = {
    task: TestCase[]
    testCaseHandler: (index: number) => Promise<Response>
    runAllTestCases: boolean
    setRunAllTestCases: (val: boolean) => void
    setConsoleOutput: (val: ConsoleData) => void
}

interface MousePosition {
    x: number;
    y: number;
}

const TestCaseContainer = (props: Props) => {
    const testCases = props.task
    const [elementRef, setElementRef] = useState<RefObject<HTMLDivElement>[]>([])
    let mousePosition: MousePosition = {x: 0, y: 0}
    const [mouseDistance, setMouseDistance] = useState<Array<number>>([])
    const [running, setRunning] = useState<boolean[]>([])

    useEffect(() => {
        setElementRef(refs => Array(testCases.length).fill([{}]).map((_, i) => refs[i] || React.createRef<HTMLDivElement>()))
    }, [testCases])

    const setRunningCase = (index: number, val: boolean, done?: boolean) => {
        if (index === testCases.length || done) {
            props.setRunAllTestCases(false)
            for (let i = 0; i < running.length; i++)
                running[i] = false
            setRunning([...running])
            return
        }
        running[index] = val
        setRunning([...running])
    }

    useEffect(() => {
        if (props.runAllTestCases) {
            setRunningCase(0, true)
            props.setConsoleOutput({data: "", display: ConsoleDisplayType.DEFAULT})
        }
    }, [props.runAllTestCases])

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
            className='flex flex-row justify-center gap-24 items-center bg-gameComps mt-2 px-4 py-20 h-80 max-h-48 translate-all'
            onMouseMove={handleOnMouseMove} onMouseLeave={handleOnMouseLeave}>
            {testCases.map((test, index) => {
                return (
                    <TestCases ref={elementRef[index]} input={test.input} output={test.output}
                               onClick={() => props.testCaseHandler(index)}
                               distance={mouseDistance[index]}
                               id={index}
                               setRunning={setRunningCase}
                               running={running[index]}
                               setConsoleOutput={props.setConsoleOutput}
                    />
                );
            })}
        </div>)
}

export default TestCaseContainer;