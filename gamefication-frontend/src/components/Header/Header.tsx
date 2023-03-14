import React from "react";
import Tid from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    className="flex items-center bg-background text-white font-bold  w-full">
                    <Logo/>
                    <Tid/>
                    <Liv/>
                </nav>
            </header>
        </>
    );
}