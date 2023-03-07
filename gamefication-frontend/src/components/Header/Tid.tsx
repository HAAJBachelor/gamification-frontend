import React, {useState, useCallback, useEffect} from "react";
import useWebSocket, {ReadyState} from 'react-use-websocket';

const Tid = () => {
    const [time, setTime] = useState("00:00");
    useWebSocket('wss://localhost:7067/ws', {
        onOpen: () => console.log('opened'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (message) => message.data.arrayBuffer().then((buffer:any) => {
            let data = new Int32Array(buffer);
            setTime(formatTime(data[0]))
        }),
        onError: (e => console.log(e)),
    });

    const formatTime = (seconds: number) => {
        let res = "";
        let m = Math.floor(seconds/60);
        let s = seconds%60;
        res += m<10 ? "0"+m : m;
        res+= ":";
        res += s<10 ? "0"+s : s;
        return res;
    }

    return (
        <>
            <div>Tid: {time}</div>
        </>
    );
}

export default Tid;
