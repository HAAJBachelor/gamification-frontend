import React from 'react';
import {GameTask} from "../models";

type Props = {
    task: GameTask
}

const parseText = (data: string) => {
    interface token {
        bold: boolean,
        highlight: boolean,
        data: string
    }

    let output: token[] = [];
    let bold = false;
    let highlight = false;
    let currentData = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '<' && data[i + 1] === '<') {
            if (currentData.length > 0) {
                output.push({bold: bold, highlight: highlight, data: currentData});
                currentData = "";
            }
            bold = true;
            i++;
            continue;
        }
        if (data[i] === '[' && data[i + 1] === '[') {
            if (currentData.length > 0) {
                output.push({bold: bold, highlight: highlight, data: currentData});
                currentData = "";
            }
            highlight = true;
            i++;
            continue;
        }
        if (data[i] === '>' && data[i + 1] === '>') {
            if (currentData.length > 0) {
                output.push({bold: bold, highlight: highlight, data: currentData});
                currentData = "";
            }
            bold = false;
            i++;
            continue;
        }
        if (data[i] === ']' && data[i + 1] === ']') {
            if (currentData.length > 0) {
                output.push({bold: bold, highlight: highlight, data: currentData});
                currentData = "";
            }
            highlight = false;
            i++;
            continue;
        }
        currentData += data[i];
    }
    if (currentData.length > 0)
        output.push({bold: bold, highlight: highlight, data: currentData});
    return output.map(t => {
        if (t.bold && !t.highlight)
            return <span className="font-bold text-white rounded">{t.data}</span>
        if (t.highlight && !t.bold)
            return <span className="bg-blue-600 text-white px-1 rounded">{t.data}</span>
        if (t.highlight && t.bold)
            return <span className="bg-blue-600 font-bold text-white px-1 rounded">{t.data}</span>
        return <span className="text-white">{t.data}</span>
    })
}

const Descriptions = (title: string, task: string, color: string, delay: string) => {
    if (!title || !task)
        return <></>
    const animate = "animate-[scaleupdownopacity_" + delay + "s_ease-in-out_1]"
    return <div className={'mx-10 mb-4 pt-4 ' + animate}>
        <h1 className="text-left text-yellow-500 uppercase ">{title}</h1>
        <div
            className={"hover:scale-110 transition-all duration-300 mt-2 text-left rounded-2xl p-4 bg-gameComps shadow-lg " + color}>
            {parseText(task)}
        </div>
    </div>;
}

const dataView = (title: string, data: string) => {
    return (
        <>
            <div className="mx-10 animate-scale-up-down-opacity ">
                <h3 className='text-yellow-500 pl-2 mb-2'>{title}</h3>
                <div
                    className="bg-gameComps rounded-2xl py-2  shadow-green-900 shadow-lg hover:scale-110 duration-300 transition-all">
                    <p className='text-white pl-4'>{data}</p>
                </div>
            </div>
        </>
    )
}


const Problem = (props: Props) => {
    const task = props.task

    return (
        <>
            <div>
                <h1 className='text-yellow-500 text-2xl text-center'>{task.title != null ? task.title : "No title"}</h1>
                <br/>
                <div className={"pt-4 px-10"}>
                    {parseText(task.description)}
                </div>
            </div>
            <div className='bg-background mt-20 text-start pb-8 rounded-2xl'>
                {Descriptions("Forklaring av input", task.inputDescription, "shadow-green-900", "0.8")}
                {Descriptions("Forklaring av output", task.outputDescription, "shadow-blue-900", "1")}
                {Descriptions("Forklaring av begrensinger", task.constraints, "shadow-yellow-900", "1.2")}
            </div>
            <div className='bg-background mt-5 text-start pb-8 rounded-2xl'>
                <div className={""}>
                    <div className='text-center text-yellow-500 uppercase mx-10 mb-4 pt-4'>
                        <h1>Testeksempel</h1>
                    </div>
                    {dataView("Input", task.testCases[0].input)}
                </div>

                <div className="mt-4">
                    {dataView("Output", task.testCases[0].output)}
                </div>


            </div>
        </>
    );
};

export default Problem;