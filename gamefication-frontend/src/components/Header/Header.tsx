import React from "react";
import { Tid } from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";

export default function Header() {
    return (
        <>
            <nav className="relative flex flex-wrap items-center bg-black text-white font-bold relative">
                <Logo/>
                <Tid />
                <Liv />
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        
                    </div>
                </div>
            </nav>
        </>
    );
}