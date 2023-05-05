import React, {useState, useEffect} from "react";

type Props = {
    time: string
    alert: boolean
}

const Tid = (props: Props) => {
    const [time, setTime] = useState("10:00");
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        setTime(props.time)
        setAlert(props.alert)
    },[props.time, props.alert])

    return (
        <div className={"flex items-center flex-1"}>
            <span className={`text-4xl ${alert && "text-red-500 animate-shake"}`}>{time}</span>
        </div>
    );
};
export default Tid;
