import React, {useState} from 'react';
import NewCard from "../UI/NewCard";
import {Button} from "../UI/Button";
import {Title} from "../Title/Title";
import {useNavigate} from "react-router-dom";


const EndGamePage = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    const handleChange = (event: any) => {
        setUsername(event.target.value)
    }
    const submitUserNameHandler = (e: any) => {
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
                    navigate('/')
                })).catch((error: Error) => {
            console.log(error.message)
        })
    }
    console.log(username)

    return (
        <>
            <div className="absolute top-5 right-0 h-16 w-16 ...">

                <svg xmlns="http://www.w3.org/2000/svg" width="40p" height="40">
                    <path
                        d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/>
                </svg>

            </div>
            <div className='mx-auto pt-10'>
                <NewCard>
                    <div className='text-center mb-4'>
                        <Title title='Tiden er nå ferdig. Registrer brukernavn for å lagre score'/>
                    </div>
                    <div className="w-full max-w-xs mx-auto">
                        <form className="bg-gameComps shadow-2xl mb-20 rounded-2xl  p-8 ">
                            <p className={'text-xl text-yellow-500'}>Skriv inn ønsket brukernavn</p>
                            <div className="m-4">
                                <input
                                    type="text" id="username"
                                    onChange={handleChange}
                                    className="shadow-md shadow-yellow-500 hover:border-yellow-400 outline-yellow-500 text-center border-transparent border-2 font-light bg-gray-200 text-2xl border rounded-xl w-full py-2 border-4 focus:border-yellow-500"
                                />
                                <div className='pt-10'>
                                    <Button text='Lagre' handleOnClick={submitUserNameHandler}/>

                                </div>
                                <div className={'pt-5 '}>
                                    <Button text='Lagre Anonymt'/>
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