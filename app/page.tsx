import '@/app/globals.css';
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
        <NavLinks />
        <section className='h-full text-white m-96 dark:text-black' id='aboutme'>ahoj</section>
        <section className='h-5/6 text-white m-96 dark:text-black' id='projects'>ahoj</section>
        <section className='h-max text-white m-96 dark:text-black' id='contact'>ahoj</section>
      </body>
    </main>
  );
}
