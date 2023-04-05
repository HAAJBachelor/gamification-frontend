import React, {useEffect, useState} from "react";
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import yellowFolk from "../../image/OXX_Yellowfolk.png";
import {Button} from "../UI/Button";
import {useNavigate} from "react-router-dom";
import RulesButton from "../RulesButton";
import RulesModal from "../UI/RulesModal";
import LeaderBoard from "../LeaderBoard";

const LandingPage = () => {
    const [gameSession, setGameSession] = useState("");
    const [session, setSession] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [sessionInProgress, setSessionInProgress] = useState(false);
    const [showList, setShowList] = useState(false);
    const [loadingSession, setLoadingSession] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let navigate = useNavigate();
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const handleContinueGame = () => {

        navigate('/game')
    }

    const handleLeaderboard = () => {
        setShowList((prev) => {
            return (prev = !prev)
        });
    }

    const startSession = () => {
        setLoadingSession(true)
        fetch("https://localhost:7067/api/CreateSession", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers":
                    "Content-Type, Authorization, Set-Cookie",
            },
        })
            .then((response) => {
                if (!response.ok) throw new Error("no data");
                return response;
            })
            .then((response) =>
                response.text().then((response) => {
                    setGameSession(response);
                    console.log(response);
                    setSession(true);
                    navigate("game");
                })
            )
            .catch((error: Error) => {
                setErrorMessage("Kunne ikke koble til serveren. Prøv igjen senere.");
                console.log(error.message);
            }).finally(() => setLoadingSession(false));
    };

    useEffect(() => {
        fetch("https://localhost:7067/api/IsGameSessionActive", {
            method: "GET",
            credentials: "include",
            headers: {
                "Access-Control-Allow-Headers": "Authorization",
            },
        })
            .then((response) => {
                if (!response.ok) throw new Error("Unauthorized");
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                setSessionInProgress(response);
            });
    });

    const handleErrorButton = () => {
        setErrorMessage("");
    }

    return (
        <div className={"flex justify-center items-center h-screen w-screen"}>
            <div
                className='flex flex-row w-screen h-screen px-4 justify-center items-center 2xl:w-[90rem]'>
                <div className={"basis-1/4"}>
                    <LeaderBoard modalIsOpen={modalIsOpen}/>
                </div>
                <div className={"basis-3/4"}>
                    <NewCard>
                        <div>
                            <Title title='Velkommen'/>
                            <div className="flex flex-col justify-center items-center">
                                <div className='flex justify-center'>
                                    <img
                                        className='max-w-52 max-h-52 rounded-2xl hover:shadow-md hover:shadow-yellow-500'
                                        src={yellowFolk}
                                        alt='two OXX yellow folk'
                                    />
                                </div>
                                {errorMessage !== "" ?
                                    <div className="flex justify-center flex-col items-center mt-4">
                                        <div
                                            className="text-red-500 text-center absolute bottom-20">{errorMessage}</div>
                                        <Button handleOnClick={handleErrorButton} text={"Ok"}/>
                                    </div>
                                    :
                                    loadingSession ?
                                        <div className="flex justify-center items-center mt-4">
                                            <p className={"text-2xl text-white"}>Venter på server...</p>
                                        </div>
                                        :
                                        <div className='flex flex-row justify-center items-center w-full gap-6 mt-4'>
                                            {sessionInProgress && (
                                                <Button text='Fortsett spill' handleOnClick={handleContinueGame}/>
                                            )}
                                            <Button
                                                text='Start nytt spill'
                                                handleOnClick={startSession}
                                            ></Button>
                                        </div>
                                }
                            </div>
                        </div>
                    </NewCard>
                </div>
                <RulesButton openModal={openModal}/>
                <RulesModal visible={modalIsOpen} onClose={closeModal} showConfetti={false}
                            modalTitle={'Velkommen til OXX Game'}
                            modalText={'Test dine ferdigheter'} text={'Lukk'}/>
            </div>
        </div>
    );
};
export default LandingPage;
