import React from "react";
import Tid from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    className="flex flex-row justify-between pl-2 pr-2 bg-background text-white font-bold text-center w-full ">
                    <Logo/>
                    <Tid/>
                    <Liv/>
                </nav>
            </header>
        </>
    );
}