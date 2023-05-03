import React, {useEffect, useState} from "react";
import NewCard from "../UI/NewCard";
import {Title} from "../Title/Title";
import yellowFolk from "../../image/OXX_Yellowfolk.png";
import {Button} from "../UI/Button";
import {useNavigate} from "react-router-dom";
import RulesButton from "../RulesButton";
import RulesModal from "../UI/RulesModal";
import {Prize} from "../../image/Prize";
import {API} from "../../Constants";

const LandingPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sessionInProgress, setSessionInProgress] = useState(false);
  const [showList, setShowList] = useState(false);

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

  const handleList = () => {
      setShowList(prev => !prev)
  }

  const startSession = () => {
      API.createSession()
      .then((response) => {
        if (!response.ok) throw new Error("no data");
        return response;
      })
      .then((response) =>
        response.text().then((response) => {
          localStorage.setItem('EDITOR_CODE', JSON.stringify(''))
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
    <div className='justify-center flex mt-[1%] relative'>
      <NewCard>
        <Title title='Velkommen' />
        <div className="w-[35rem]">
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
      <Prize className={"cursor-pointer h-20 w-20 absolute left-2 top-0"} onClick={handleList}/>        
      {showList && <h1 className="text-zinc-50 absolute left-2 top-20">Heihei</h1>}
      <RulesButton openModal={openModal} />
      <RulesModal visible={modalIsOpen} onClose={closeModal} showConfetti={false} modalTitle={'Velkommen til OXX Game'}
                  modalText={'Test dine ferdigheter'} text={'Lukk'}/>
    </div>   
  );
};
export default LandingPage;
