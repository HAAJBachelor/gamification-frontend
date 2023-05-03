import React, {useState} from "react";
import Tid from "./Tid";
import {Logo} from "../Logo";
import {Liv} from "./Liv";

export default function Header() {
    const [skips, setSkips] = useState(0);
    return (
        <>
            <header>
                <nav
                    className="flex flex-row justify-between pl-2 pr-2 bg-background text-white font-bold text-center w-full">
                    <Logo/>
                    <Tid skips={setSkips}/>
                    <Liv skips={skips}/>
                </nav>
            </header>
        </>
    );
}