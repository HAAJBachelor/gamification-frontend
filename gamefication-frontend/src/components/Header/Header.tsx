import React from "react";
import Tid from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    className="flex flex-wrap items-center bg-background text-white font-bold  w-full z-20">
                    <Logo/>
                    <Tid/>
                    <Liv/>
                </nav>
            </header>
        </>
    );
}