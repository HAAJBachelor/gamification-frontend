import React, {useEffect, useState} from 'react';

type Props = {
    onClick: (id: number) => void;
    distance: number
    ref: React.Ref<HTMLDivElement>
    input: string
    output: string
    id: any
    success: number
}

interface MousePosition {
    x: number;
    y: number;
}

const TestCase = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const [ping, setPing] = useState(false)
    const [running, setRunning] = useState(false)
    const [openDialog, setOpenDialog] = useState(true)
    const [hover, setHover] = useState(false)
    const [mouseDistance, setMouseDistance] = useState<number>(2);


    const handleOnMouseEnter = () => {
        console.log("enter")
        setHover(true)
    }

    const handleOnMouseLeave = () => {
        console.log("leave")
        setHover(false)
    }

    const handleRunTestCaseOnClick = () => {
        setHover(false)
        setRunning(true)
        setOpenDialog(false)
        setPing(true)
        props.onClick(props.id)
    }

    useEffect(() => {
        setMouseDistance(props.distance)
    }, [props.distance])

    useEffect(() => {
        setOpenDialog(true)
        setRunning(false)
        setHover(false)
        setPing(false)
    }, [props.success])

    return (
        <>
            <div className={"group"}
                 ref={ref}>
                <div style={{transform: `scale(${Math.max(mouseDistance, 2)})`}} className={"flex justify-center"}>
                    <div
                        className={`${props.success == 1 ? "bg-green-500 shadow-green-500 animate-blow-up" : "bg-red-500 shadow-red-500"} flex justify-center items-center shadow-2xl z-0 transition-[width,height] duration-300 text-white rounded-full h-4 w-4 ${hover && openDialog && " h-[3rem] w-[3.8rem] translate-y-4 opacity-0 "}`}
                        onMouseEnter={handleOnMouseEnter}>
                        <p className={"text-sm"}>{props.id + 1}</p>
                    </div>
                    {running &&
                        <div
                            className={`${props.success == 1 ? "bg-green-500 shadow-green-500 animate-blow-up" : "bg-red-500 shadow-red-500"} ${ping ? "animate-ping" : ""} absolute shadow-2xl transition-[width,height] duration-300 text-white rounded-full h-4 w-4 ${hover && openDialog && " h-[4rem] w-[4rem] opacity-0"}`}
                        >
                        </div>
                    }
                </div>

                {hover && !running &&
                    <div onMouseLeave={handleOnMouseLeave} className={"z-10"}>
                        <div className={`flex justify-center items-center`}>
                            <div
                                className={`bg-background opacity-0  shadow-2xl shadow-red-500 text-white font-bold h-24 rounded-full hover:scale-x-110`}>
                            </div>
                            <div
                                className={`group border-2 ${props.success == 1 ? "border-green-500" : "border-red-500"} bg-background p-4 rounded-2xl h-fit w-48 animate-blow-up absolute z-10`}
                            >
                                <div className={"flex flex-row gap-2 justify-center items-center"}>
                                    <button type="button"
                                            className={"border-2 border-green-500 bg-gameComps text-white rounded-md p-1 mb-2 animate-scale-up-down-opacity hover:scale-125 transition-all hover:border-white"}
                                            onClick={handleRunTestCaseOnClick}
                                    >
                                        Kjør
                                    </button>
                                    <button type="button"
                                            className={"border-2 border-yellow-500 bg-gameComps text-white rounded-md p-1 mb-2 animate-scale-up-down-opacity hover:scale-125 transition-all hover:border-white"}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className=" icon icon-tabler icon-tabler-arrows-maximize" width="24"
                                             height="24"
                                             viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M16 4l4 0l0 4"></path>
                                            <path d="M14 10l6 -6"></path>
                                            <path d="M8 20l-4 0l0 -4"></path>
                                            <path d="M4 20l6 -6"></path>
                                            <path d="M16 20l4 0l0 -4"></path>
                                            <path d="M14 14l6 6"></path>
                                            <path d="M8 4l-4 0l0 4"></path>
                                            <path d="M4 4l6 6"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className={"flex flex-col gap-2"}>
                                    <div
                                        className={"bg-gameComps rounded-md overflow-hidden text-white animate-scale-up-down-opacity"}>
                                        <h1 className={"w-full bg-gray-900 text-yellow-400 text-center"}>INPUT</h1>
                                        <p className={"px-2 pt-2 pb-4 whitespace-pre  max-w-[10rem] pb-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"}>{props.input}</p>
                                    </div>
                                    <div
                                        className={"bg-gameComps rounded-md overflow-hidden text-white animate-scale-up-down-opacity"}>
                                        <h1 className={"w-full bg-gray-900 text-yellow-400 text-center"}>OUTPUT</h1>
                                        <p className={"px-2 pt-2 pb-4 whitespace-pre  max-w-[10rem] pb-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"}>{props.output}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </>
    );
});

export default TestCase;