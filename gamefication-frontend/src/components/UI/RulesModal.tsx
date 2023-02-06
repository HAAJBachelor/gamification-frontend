import React from 'react';
import {Button} from "./Button";

const RulesModal = (props: any) => {
    if (!props.visible) return null

    const handleOnClose = (e: any) => {
        if (e.target.id === 'container') props.onClose()
    }

    return (

        <div id='container'
             onClick={handleOnClose}
             className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm w-full flex justify-center items-center px-4 h-full md:h-auto">
            <div className='max-w-2xl rounded-lg relative dark:bg-gray-800'>
                <div className="flex justify-center items-center p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-yellow-500 text-xl lg:text-2xl font-semibold dark:text-white">
                        Terms of Service
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-yellow-400 text-base leading-relaxed dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for
                        its citizens, companies around the world are updating their terms of service agreements to
                        comply.
                    </p>
                    <p className="text-yellow-400 text-base leading-relaxed dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                        25 and is meant to ensure a common set of data rights in the European Union. It requires
                        organizations to notify users as soon as possible of high-risk data breaches that could
                        personally affect them.
                    </p>
                </div>
                <div
                    className="flex justify-center bspace-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Button handleOnClick={props.closeModal} text='Close'/>
                </div>

            </div>

        </div>
    );
};

export default RulesModal;