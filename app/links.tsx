'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '#home'},
  { name: 'About Me', href: '#aboutme'},
  { name: 'Projects', href: '#projects'},
  { name: 'Contact', href: '#contact'},
];

export default function NavLinks() {
  const [selectedItem, setSelectedItem] = useState(links[0]);
  const underline = 'bottom-[-1px] w-full h-1 bg-white'

  return (
    <>
      <ul className='absolute right-3 items-center justify-end'>
        <li className='flex gap-x-3 pr-5'>
            {links.map((link) => {  
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={link === selectedItem ? 'bg-neutral-700' : ''}
                  onClick={() => setSelectedItem(link)}
                >
                  <p className="text-white py-px px-2">{link.name}</p>
                  {link === selectedItem ? (
                    <motion.div className={underline} layoutId='bottom-[-1px] w-full h-1 bg-white' />
                  ) : null}
                </Link>
              );
            })} 
        </li>
      </ul>
    </>
  );
}