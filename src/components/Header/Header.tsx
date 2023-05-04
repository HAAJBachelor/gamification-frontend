import React, {useState} from "react";
import useWebSocket from "react-use-websocket";
import {useNavigate} from "react-router-dom";
import {API} from "../../Constants";
import Tid from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";
import Scores from "./Scores";

type Data = {
    type: DataTypes;
    data: string;
};

enum DataTypes {
    Time = "Time",
    StateChange = "StateChange",
    Skip = "Skip",
    Score = "Score"
}
export default function Header() {
    const [time, setTime] = useState("10:00");
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const [skips, setSkips] = useState(0);
    const [scores, setScores] = useState(0);

    useWebSocket(API.WEB_SOCKET_URL, {
        shouldReconnect: () => false,

        onMessage: (message) => {
            const data: Data = JSON.parse(message.data);
            if (data.type === DataTypes.Time) {
                setTime(formatTime(parseInt(data.data)));
                console.log("time: " + data.data)
                if (parseInt(data.data) <= 60) {
                    setAlert(true);
                } else {
                    setAlert(false);
                }
            }
            if (data.type === DataTypes.Skip) {
                setSkips(parseInt(data.data));
                console.log("skips: " + data.data)
            }
            if(data.type === DataTypes.Score){
                setScores(parseInt(data.data));
                console.log("scores: " + data.data)
            }
            if (data.type === DataTypes.StateChange) {
                localStorage.setItem('EDITOR_CODE', JSON.stringify(''))
                navigate('/EndGamePage');
                return;
            }

        },
        onError: (e) => console.log(e),
    });

    const formatTime = (seconds: number) => {
        let res = "";
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
        res += m < 10 ? "0" + m : m;
        res += ":";
        res += s < 10 ? "0" + s : s;
        return res;
    };
    return (
        <>
            <header>
                <nav
                    className="flex flex-row justify-between pl-2 pr-2 bg-background text-white font-bold text-center w-full">
                    <Logo/>
                    <Tid skips={setSkips}/>
                    <Liv skips={skips}/>
                </nav>
            </header>
        </>
    );
}