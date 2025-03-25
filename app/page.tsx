import '@/app/globals.css';
import { Inter } from 'next/font/google';
import NavLinks from './Links';
import ScrollUp from './ScrollUp';
import { HeroHighlight } from '@/components/ui/hero-highlight';

const poppins = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <header className='sticky top-0 w-full'>
        <NavLinks />
      </header>
      <HeroHighlight>
        <h2 className='text-4xl dark:text-black text-white'>Hello world</h2>
      </HeroHighlight>
      <section className='h-full text-white m-96 dark:text-black' id='aboutme'>ahoj</section>
      <section className='h-5/6 text-white m-96 dark:text-black' id='projects'>ahoj</section>
      <section className='h-max text-white m-96 dark:text-black' id='contact'>ahoj</section>
      <ScrollUp />
    </main>
  );
}
