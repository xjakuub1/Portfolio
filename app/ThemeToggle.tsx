'use client';

import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            setDarkMode(true);          
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

    const themeOnClick = () => setDarkMode( prev => !prev)
    return (
        <>
            <div 
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={(e) => { themeOnClick(); setDarkMode(!darkMode); }}
            >
                {darkMode ? <BsSunFill size={27} color="white" className="pt-[1px]"/> : <FaMoon size={23} color="white" className="pt-0.5"/>}
            </div>
        </>
    )
}