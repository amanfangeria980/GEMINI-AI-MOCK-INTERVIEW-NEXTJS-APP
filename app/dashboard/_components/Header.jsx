"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
    const path = usePathname();
    useEffect(() => {
        console.log(path);
    });
    return (
        <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
            <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
            <ul className="hidden md:flex md:gap-4">
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path == "/dashboard" && "font-bold text-primary"
                    }`}
                >
                    Dashboard
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path == "/dashboard/questions" &&
                        "font-bold text-primary"
                    }`}
                >
                    Questions
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path == "/dashboard/upgrade" && "font-bold text-primary"
                    }`}
                >
                    Upgrade
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path == "/dashboard/how" && "font-bold text-primary"
                    }`}
                >
                    How it works?
                </li>
            </ul>
            <UserButton />
        </div>
    );
};

export default Header;
