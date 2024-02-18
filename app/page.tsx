import '@/app/globals.css';
import Image from 'next/image';
import kreten from '@/public/kreten.png';
import { Inter } from 'next/font/google';
import NavLinks from './Links';

const poppins = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <body className='bg-black dark:bg-medium'>
        <nav className='h-24 flex justify-start items-center mx-auto px-6 py-2 bg-black border-b-2 border-neutral-800 dark:bg-medium dark:border-neutral-300'>
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
          <NavLinks />
        </nav>
      </body>
    </main>
  );
}
