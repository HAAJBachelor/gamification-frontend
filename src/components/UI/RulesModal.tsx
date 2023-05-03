import React from 'react';
import {Button} from "./Button";
import Confetti from "react-confetti";

type Props = {
    visible?: boolean,
    onClose?: (e: any) => void,
    onOk?: () => void,
    modalTitle?: string,
    modalText?: string,
    okButtonText?: string,
    cancelButtonText?: string,
    showConfetti?: boolean
    logo?: string
}

const RulesModal = (props: Props) => {
    if (!props.visible) return null
    let colors = ['#FFEB3B'];
    const confetti = props.showConfetti;

    const handleOnClose = (e: any) => {
        if (e.target.id === 'container')
            if (props.onClose) {
                props.onClose(e);
            }
    }

    return (

        <div id='container'
             onClick={handleOnClose}
             className="fixed inset-0 bg-gameComps bg-opacity-60 backdrop-blur-sm w-full flex justify-center items-center px-4 h-full md:h-auto mx-auto z-[1000]">
            {confetti &&
                <Confetti numberOfPieces={350} width={window.innerWidth} height={window.innerHeight} colors={colors}/>
            }
            <div className='max-w-2xl rounded-lg relative bg-background w-[600px] '>


                <div className="flex justify-center items-center p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl lg:text-4xl font-semibold text-white">
                        {props.modalTitle}
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-400 text-2xl">
                        {props.logo}
                    </p>
                    <p className="text-base leading-relaxed text-white text-2xl">
                        {props.modalText}
                    </p>
                </div>
                <div className={"flex flex-row"}>
                    {props.cancelButtonText &&
                        <div
                            className="flex justify-center bspace-x-2 items-center p-6 border-t rounded-b border-gray-600">
                            <Button handleOnClick={props.onClose!} text={props.cancelButtonText}></Button>
                        </div>
                    }
                    <div
                        className="flex justify-center bspace-x-2 items-center p-6 border-t rounded-b border-gray-600">
                        <Button handleOnClick={props.onOk!} text={props.okButtonText}></Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RulesModal;