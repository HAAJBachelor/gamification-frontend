import React, {useEffect, useState} from "react";
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import yellowFolk from "../../image/OXX_Yellowfolk.png";
import {Button} from "../UI/Button";
import {useNavigate} from "react-router-dom";
import RulesButton from "../RulesButton";
import RulesModal from "../UI/RulesModal";
import LeaderBoard from "../LeaderBoard";
import {API} from "../../Constants";

const LandingPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sessionInProgress, setSessionInProgress] = useState(false);

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

  const startSession = () => {
      API.createSession()
      .then((response) => {
        if (!response.ok) throw new Error("no data");
        return response;
      })
      .then((response) =>
        response.text().then((response) => {
            localStorage.removeItem('EDITOR_CODE');
            console.log(response);
          navigate("game");
        })
      )
      .catch((error: Error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
      API.isGameSessionActive()
      .then((response) => {
        if (!response.ok) throw new Error("Unauthorized");
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        setSessionInProgress(response);
      });
  });

    return (
        <div className={"flex justify-center items-center h-screen w-screen"}>
            <div
                className='flex flex-row w-screen h-screen px-4 justify-center 2xl:w-[90rem] 2xl:pt-12'>
                <div className={"basis-1/4"}>
                    <LeaderBoard modalIsOpen={modalIsOpen}/>
                </div>
                <div className={"basis-3/4"}>
                    <NewCard>
                        <Title title='Velkommen'/>
                        <div className="flex flex-col justify-center items-center h-64">
                            <div className='flex justify-center'>
                                <img
                                    className='max-w-52 max-h-52 rounded-2xl hover:shadow-md hover:shadow-yellow-500'
                                    src={yellowFolk}
                                    alt='two OXX yellow folk'
                                />
                            </div>
                            <div className='flex flex-row justify-center items-center w-full gap-6 mt-4'>
                                {sessionInProgress && (
                                    <Button text='Fortsett spill' handleOnClick={handleContinueGame}/>
                                )}
                                <Button
                                    text='Start nytt spill'
                                    handleOnClick={startSession}
                                ></Button>
                            </div>
                        </div>
                    </NewCard>
                </div>
                <RulesButton openModal={openModal}/>
                <RulesModal visible={modalIsOpen} onClose={closeModal} onOk={closeModal} showConfetti={false}
                            modalTitle={'Velkommen til OXX Game'}
                            modalText={'Test dine ferdigheter'} okButtonText={'Lukk'}/>
            </div>
        </div>
    );
};
export default LandingPage;
