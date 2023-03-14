import React, { useEffect, useState } from "react";
import NewCard from "../UI/NewCard";
import { Title } from "../Title/Title";
import yellowFolk from "../../image/OXX_Yellowfolk.png";
import { Button } from "../UI/Button";
import { useNavigate } from "react-router-dom";
import RulesButton from "../RulesButton";
import RulesModal from "../UI/RulesModal";
import { Prize } from "../../image/Prize";

const LandingPage = () => {
  const [gameSession, setGameSession] = useState("");
  const [session, setSession] = useState(false);
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

  const handleTilGamePage = () => {
    navigate('/game')
  }

  const handleList = () => {
    setShowList((prev) => {
      return (prev = !prev)
    });
  }

  const startSession = () => {
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
        console.log(error.message);
      });
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
              <Button text='Fortsett spill' handleOnClick={handleTilGamePage} />
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
      <RulesModal visible={modalIsOpen} onClose={closeModal} />
    </div>   
  );
};
export default LandingPage;
