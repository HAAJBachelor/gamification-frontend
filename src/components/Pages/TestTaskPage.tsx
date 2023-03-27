import React, {useEffect, useState} from 'react';
import {GameTask} from "../models";
import {useSearchParams} from "react-router-dom";
import CodeEditorPage from "./CodeEditorPage";
import {API} from "../../Constants";

const TestTaskPage = () => {
    const [task, setTask] = useState<GameTask>()
    const [params] = useSearchParams();

    useEffect(() => {
        const taskId = params.get("taskId")
        if (taskId) {
            fetchTask(taskId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchTask = (id: string) => {
        API.selectTaskForTestings(id)
            .then(response => {
                if (!response.ok)
                    throw new Error("no data")
                return response
            })
            .then(response => response.json()
                .then((response: GameTask) => {
                    setTask(response)
                    console.log(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }

    return (
        <>
            <div className={"flex items-center justify-center h-screen"}>
                <CodeEditorPage task={task} test={true}/>
            </div>
        </>
    )
};

export default TestTaskPage;