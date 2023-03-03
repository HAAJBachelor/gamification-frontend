import React, {useEffect, useState} from 'react';

type Props = {
    onClick: (id: number) => void;
    distance: number
    ref: React.Ref<HTMLDivElement>
    input: any
    output: any
    id: any
}

interface MousePosition {
    x: number;
    y: number;
}

const TestCase = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const [ping, setPing] = useState(false)
    const [hover, setHover] = useState(false)
    const [manhattanDistance, setManhattanDistance] = useState<number>(2);


    const handleOnMouseEnter = () => {
        setHover(true)
    }

    const handleOnMouseLeave = () => {
        setHover(false)
    }

    useEffect(() => {
        setManhattanDistance(props.distance)
        console.log(props.distance)
    }, [props.distance])

    return (
        <>
            <div className={`flex justify-center items-center max-w-[5rem] max-h-[5rem] min-w-[4rem] min-h-[4rem]`}
                 ref={ref}>
                {!hover ?
                    <div style={{transform: `scale(${manhattanDistance})`}}
                         className={`bg-red-500  shadow-2xl shadow-red-500 text-white font-bold rounded-full h-4 w-4`}
                         onMouseEnter={handleOnMouseEnter}>
                    </div>
                    :
                    <>
                        <div
                            className={`bg-red-500 opacity-0  shadow-2xl shadow-red-500 text-white font-bold h-48 w-48 rounded-full `}
                            onMouseEnter={handleOnMouseEnter}>
                        </div>
                        <div className={`bg-red-500 rounded-2xl h-48 w-48 animate-blow-up absolute z-10`}
                             onMouseLeave={handleOnMouseLeave}>
                            <div className={"flex flex-row gap-4"}>
                                <div className={"bg-black text-white animate-scale-up-down-opacity"}>
                                    sadsadas
                                </div>
                                <div className={"bg-black text-white animate-scale-up-down-opacity"}>
                                    sadsadas
                                </div>
                            </div>
                        </div>
                    </>

                }
            </div>
        </>
    );
});

export default TestCase;