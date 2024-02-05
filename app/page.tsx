import '@/app/globals.css';
import Image from 'next/image';
import kreten from '@/public/kreten.png';
import { Inter } from 'next/font/google';
import NavLinks from './links';

const poppins = Inter({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className={poppins.className}>
      <body className='bg-black'>
        <nav className='h-24 flex justify-start items-center mx-auto px-6 py-2 bg-black border-b-2 border-neutral-800'>
          <span className='pr-3'>
            <Image
              src={kreten}
              width={50}
              height={50}
              alt='mojefoto'
              className='rounded-full'
            />
          </span>
          <h1 className='font-bold text-white bg-black rounded-lg outline outline-1 outline-neutral-700 px-3 py-1 hover:bg-neutral-800'>Jakub Majtán</h1>
          <NavLinks />
        </nav>
      </body>
    </main>
  );
}
