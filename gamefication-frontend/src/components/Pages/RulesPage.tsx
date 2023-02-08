import React, {useEffect, useState} from "react";
import {Button} from "../UI/Button";
import Header from "../Header/Header";
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import Questions from "../Questions/Questions";
import ProgressBar from "../ProgressBar";

const RulesPage = () => {

    const [dogImage, setDogImage] = useState('')
    useEffect(() => {
        fetch('https://localhost:7067/api/CreateSession',).then(response => {

            if (!response.ok)
                throw new Error("no data")
            return response
        })
            .then(response => response.text()
                .then(response => {
                    setDogImage(response)
                })).catch((error: Error) => {
            console.log(error.message)
        })
    })

    const checkHint = () => {

    }


    console.log(dogImage)
    return (
        <div className='bg-black h-screen'>
            <Header/>
            <div>
                <p className='text-white'>here it is {dogImage}</p>
            </div>
            <NewCard>
                <div>
                    <Title title="Velg neste utfordring"/>
                    <Questions/>
                    <Button handleOnClick={checkHint} text='click me'/>

                </div>
                <ProgressBar/>
            </NewCard>

        </div>
    )

};

export default RulesPage;