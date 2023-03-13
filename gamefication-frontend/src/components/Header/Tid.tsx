import React, {useState} from "react";
import useWebSocket from "react-use-websocket";

type Data = {
    type: DataTypes
    data: string
}

enum DataTypes {
    Update = "Update",
    StateChange = "StateChange"
}

const Tid = () => {
    const [time, setTime] = useState("00:00");
    const [alert, setAlert] = useState(false);

    useWebSocket('wss://localhost:7067/ws', {
        onOpen: () => console.log('opened'),
        shouldReconnect: (closeEvent) => false,

        onMessage: (message) => {
            const data: Data = JSON.parse(message.data);
            if (data.type === DataTypes.Update) {
                setTime(formatTime(parseInt(data.data)));
            }
            if(parseInt(data.data) <= 60){
                setAlert(true);
            }else{
                setAlert(false);
            }
        },
        onError: (e => console.log(e)),
    });

    const formatTime = (seconds: number) => {
        let res = "";
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
        res += m < 10 ? "0" + m : m;
        res += ":";
        res += s < 10 ? "0" + s : s;
        return res;
    }

    return (
        <>
            <div className={"w-full flex items-center justify-center"}>
                {alert ? (<span className={"text-4xl text-red-500 animate-shake" }>
                    {time}
                </span>) : (<span className={"text-4xl"}>
                    {time}
                </span>)}
            </div>
        </>
    );
}
export default Tid;
