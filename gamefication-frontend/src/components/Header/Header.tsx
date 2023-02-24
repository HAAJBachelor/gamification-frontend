import React from "react";
import Tid from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";

export default function Header() {
    return (
        <>
            <nav
                className="flex flex-wrap items-center bg-background text-white font-bold relative w-full z-20 top-0 left-0">
                <Logo/>
                <Tid/>
                <Liv/>
            </nav>
        </>
    );
}