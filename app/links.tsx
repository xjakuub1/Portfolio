'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import kreten from '@/public/kreten.png';
import Image from 'next/image';

const links = [
  { name: 'About Me', href: '#aboutme'},
  { name: 'Projects', href: '#projects'},
  { name: 'Contact', href: '#contact'},
];

export default function NavLinks() {
  const [selectedItem, setSelectedItem] = useState(links[0]);
  const underline = 'bottom-[-1px] w-full h-1 bg-white dark:bg-black'
  
  return (
    <>
      <nav className='h-24 flex justify-start items-center mx-auto px-6 py-2 bg-black/30 backdrop-blur-sm border-b-2 border-neutral-800 dark:bg-medium/30 dark:border-neutral-300'>
        <span className='pr-3'>
          <Image
            src={kreten}
            width={50}
            height={50}
            alt='mojefoto'
            className='rounded-full'
          />
        </span>
        <h1 className='font-bold text-white rounded-lg outline outline-1 outline-neutral-700 px-3 py-1 hover:bg-neutral-800 dark:text-black dark:hover:bg-neutral-100 dark:hover:bg-neutral-200'>Jakub Majtán</h1>
        <ul className='absolute right-3 items-center'>
          <li className='flex gap-x-3 pr-5'>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={link === selectedItem ? 'bg-neutral-700 rounded-t-sm dark:bg-neutral-200' : ''}
                  onClick={() => setSelectedItem(link)}
                >
                  <p className="text-white py-px px-2 dark:text-black">{link.name}</p>
                  {link === selectedItem ? (
                    <motion.div className={underline} layoutId='bottom-[-1px] w-full h-1 bg-white dark:bg-black' />
                  ) : null}
                </Link>
              );
            })}
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </>
  );
}