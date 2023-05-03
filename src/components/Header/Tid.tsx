import React, {useState} from "react";
import useWebSocket from "react-use-websocket";
import {useNavigate} from "react-router-dom";
import {API} from "../../Constants";

type Data = {
    type: DataTypes;
    data: string;
};

enum DataTypes {
    Time = "Time",
    StateChange = "StateChange",
    Skip = "Skip",
}

type Props = {
    skips: (skips: number) => void
}

const Tid = (props: Props) => {
    const [time, setTime] = useState("10:00");
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();


    useWebSocket(API.WEB_SOCKET_URL, {
        shouldReconnect: () => false,

        onMessage: (message) => {
            const data: Data = JSON.parse(message.data);
            if (data.type === DataTypes.Time) {
                setTime(formatTime(parseInt(data.data)));
                if (parseInt(data.data) <= 60) {
                    setAlert(true);
                } else {
                    setAlert(false);
                }
            }
            if (data.type === DataTypes.Skip) {
                props.skips(parseInt(data.data));
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
        <div className={"flex items-center"}>
            <span className={`text-4xl ${alert && "text-red-500 animate-shake"}`}>{time}</span>
        </div>
    );
};
export default Tid;
