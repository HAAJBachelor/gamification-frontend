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
    mousePosition: { X: number, Y: number }
}

const TestCaseContainer = (props: Props) => {
    const testCases = props.task
    const [elementRef, setElementRef] = useState<RefObject<HTMLDivElement>[]>([])
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.runAllTestCases])

    const handleOnMouseMove = () => {
        for (let i = 0; i < testCases.length; i++) {
            if (!elementRef[i])
                continue
            const {left, top, width, height} = elementRef[i].current!.getBoundingClientRect();
            const x = props.mousePosition.X - left;
            const y = props.mousePosition.Y - top;
            const centerX = width / 2;
            const centerY = height / 2;
            let dist = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
            dist /= 50;
            dist = 5 - dist;
            if (dist === mouseDistance[i])
                continue
            mouseDistance[i] = dist
        }
        setMouseDistance([...mouseDistance])
    }

    useEffect(() => {
        handleOnMouseMove()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.mousePosition])

    const handleOnMouseLeave = () => {
        for (let i = 0; i < mouseDistance.length; i++) {
            mouseDistance[i] = 2;
        }
        setMouseDistance([...mouseDistance])
    }

    return (
        <>
            <div
                className='flex flex-row justify-evenly items-center bg-gameComps h-24 max-h-48 translate-all w-[70%]'
                onMouseLeave={handleOnMouseLeave}>
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
            </div>
        </>
    )
}

export default TestCaseContainer;