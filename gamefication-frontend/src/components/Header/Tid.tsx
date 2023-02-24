import { useState } from "react";
import { State } from "../models";
import LoadingSpinner from "../UI/LoadingSpinner";

const Tid = () => {

    const today = new Date();
    const tid = today.toLocaleTimeString();  

    return (
        <>
            <div>Tid: {tid}</div>
            
        </>
    );
}

export default Tid;
