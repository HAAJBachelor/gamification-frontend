import React from 'react';
import NewCard from "../UI/NewCard";
import {Button} from "../UI/Button";
import {Title} from "../Title/Title";

const EndGamePage = () => {
    return (
        <div className='pt-10'>


            <NewCard>
                <div className='text-center'>
                    <Title title='Tiden er nå ferdig, registrer ditt brukernavn for å lagre'/>
                </div>
                <div className="w-full max-w-xs mx-auto">
                    <form className="bg-gameComps shadow-md rounded-2xl  p-8 ">
                        <div className="m-4">
                            <input
                                className="shadow  caret-blue-500 focus:caret-indigo-500 text-2xl border rounded w-full py-2 focus:outline-none focus:shadow-outline"
                             />
                            <div className='pt-10'>
                            <Button text='Lagre'/>
                                <div className={'pt-5'}>
                                <Button text='Lagre Anonymt'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </NewCard>

        </div>
    );
};

export default EndGamePage;