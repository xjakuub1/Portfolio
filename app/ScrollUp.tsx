'use client';

import { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function ScrollUp() {
    const isBrowser = () => typeof window !== 'undefined';
    const [isVisible, setIsVisible] = useState(false);

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
        if (window.scrollY > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button
                className={isVisible ? `fixed bottom-0 right-0 bg-white rounded-full px-2 py-2 z-50 mr-10 mb-10 items-center opacity-1 transition duration-300 dark:bg-black` : ''}
                onClick={scrollToTop}
            >
                <IoIosArrowRoundUp size={30} className="text-black dark:text-white"/>
            </button>
        </>
  )
}

export default ScrollUp