import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Button} from "../UI/Button";
import {Title} from "../Title/Title";


const EndGamePage = () => {

    const [username, setUsername] = useState('');

    const handleChange = (event:any) =>{
        setUsername(event.target.value)
    }
    const submitUserNameHandler = (e:any) => {
        e.preventDefault();
        fetch(`https://localhost:7067/api/SubmitUsername?username=${username}`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        }).then(response => {
            if (!response.ok)
                throw new Error("no data")
            return response
        })
            .then(response => response.json()
                .then((response) => {
                console.log(response)
                    console.log(username)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }
    console.log(username)

    return (
        <>
            <div className='pt-10'>
                <NewCard>
                    <div className='text-center mb-20'>
                        <Title title='Tiden er nå ferdig. Registrer brukernavn for å lagre score'/>
                    </div>
                    <div className="w-full max-w-xs mx-auto">

                        <form className="bg-gameComps shadow-2xl mb-20 rounded-2xl  p-8 ">
                            <p className={'text-xl text-yellow-500'}>Skriv inn ønsket brukernavn</p>
                            <div className="m-4">
                                <input
                                    type="text" id="username"
                                    onChange={handleChange}
                                    className="shadow-2xl text-yellow-500 font-light bg-gray-200 text-2xl border rounded-xl w-full py-2 border-yellow-500 border-4 focus:border-yellow-500"
                                />
                                <div className='pt-10'>
                                    <Button text='Lagre' handleOnClick={submitUserNameHandler}/>
                                    <div className={'pt-5'}>
                                        <Button text='Lagre Anonymt'/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </NewCard>

            </div>
        </>
    );
};

export default EndGamePage;