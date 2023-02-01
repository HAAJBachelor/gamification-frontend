import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Card from "../UI/Card";


const MainPaige = () => {

    return (
        <Card>
            <h2 className='text-white'>Wazzupppppp</h2>
            <h1 className='text-white'>Hello world</h1>
            <button className='text-white'>Helloooo<Link to='/editor'></Link></button>
            <Outlet/>
        </Card>
    );
};

export default MainPaige;