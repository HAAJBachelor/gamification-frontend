import React from 'react';
import {Button} from "./Button";


const RulesModal = (props: any) => {
    if (!props.visible) return null

    const handleOnClose = (e: any) => {
        if (e.target.id === 'container') props.onClose();
    }

    return (

        <div id='container'
             onClick={handleOnClose}
             className="fixed inset-0 bg-gameComps bg-opacity-60 backdrop-blur-sm w-full flex justify-center items-center px-4 h-full md:h-auto">
            <div className='max-w-2xl rounded-lg relative bg-background'>
                <div className="flex justify-center items-center p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white">
                        {props.modalTitle}
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-400">
                        {props.logo}
                    </p>
                    <p className="text-base leading-relaxed text-gray-400">
                        {props.modalText}
                    </p>
                </div>
                <div
                    className="flex justify-center bspace-x-2 items-center p-6 border-t rounded-b border-gray-600">
                    <Button handleOnClick={props.onClose} text={props.text}></Button>
                </div>
            </div>

        </div>
    );
};

export default RulesModal;