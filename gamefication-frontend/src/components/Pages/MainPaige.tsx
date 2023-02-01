import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Card from "../UI/Card";


const MainPaige = () => {

    return (
        <Card className="flex items-center justify-center h-screen bg-black">
            <div className="border-4 border-yellow-500 p-48">
                <h1 className='text-white'>Hello world</h1>

                <button className='text-white border-1 border-white-500'>Helloooo<Link to='/editor'></Link></button>
                <Outlet/>
            </div>

        </Card>

    );
};

export default MainPaige;