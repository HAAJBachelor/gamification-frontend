import React from 'react';
import {Outlet, Link} from "react-router-dom";
import Card from "../UI/Card";

const MainPaige = () => {
    return (
        <Card className="flex items-center justify-center h-screen bg-black">
            <div className="border-4 border-yellow-500 p-48">
                <h1 className='text-white'>Hello world</h1>
            </div>

        </Card>

    );
};

export default MainPaige;