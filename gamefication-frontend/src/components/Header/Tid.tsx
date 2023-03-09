import React, {useState} from "react";
import useWebSocket from 'react-use-websocket';

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
    useWebSocket('wss://localhost:7067/ws', {
        onOpen: () => console.log('opened'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (message) => {
            const data: Data = JSON.parse(message.data);
            if (data.type === DataTypes.Update) {
                setTime(formatTime(parseInt(data.data)));
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
                <span className={"text-4xl"}>
                    {time}
                </span>
            </div>
        </>
    );
}

export default Tid;
