'use client';

import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);
    const [icon, setIcon] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            setDarkMode(false);          
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    const themeOnClick = () => setIcon( prev => !prev)
    return (
        <>
            <div 
            className="h-8 w-8 cursor-pointer"
            onClick={(e) => { themeOnClick(); setDarkMode(!darkMode); }}
            >
                {darkMode ? <FaMoon size={23} color="black" className="pt-0.5"/> : <BsSunFill size={27} color="white" className="pt-[1px]"/>}
            </div>
        </>
    )
}