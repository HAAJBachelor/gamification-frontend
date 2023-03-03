import React, {useEffect, useState} from 'react';

type Props = {
    onClick: (id: number) => void;
    successful : boolean

}

const TestCase = (props: any) => {
    const unsuccessfulStyle = "bg-red-500 hover:bg-red-700 shadow-2xl shadow-red-500 text-white font-bold py-12 px-12 rounded-full transform hover:scale-125 transition ease-in-out delay-150"
    const successfulStyle = "bg-green-500 hover:bg-green-700 shadow-2xl shadow-green-500 text-white font-bold py-12 px-12 rounded-full transform hover:scale-125 transition ease-in-out delay-150"
    const [state, setState] = useState(false)
    const [style, setStyle] = useState(unsuccessfulStyle)

    useEffect(() => {
        if(props.successful)
            setStyle(successfulStyle)
        else
            setStyle(unsuccessfulStyle)
    }, [props.successful])
    const onCLick = () => {
        props.onClick(props.id)
        setState(true)
        setStyle("bg-red-500 hover:bg-red-700 shadow-2xl shadow-red-500 text-white font-bold py-12 px-12 rounded-full transform hover:scale-125 transition ease-in-out delay-150 animate-pulse")
    }

    return (
            <button
                className={style}
                onClick={onCLick}>
            </button>
    );
};

export default TestCase;