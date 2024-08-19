'use client';
import NavBar from './components/navbar.js';
import Hero from './components/hero.js';
import Features from './components/features.js';
import Pricing from './components/pricingsection';


export default function Home() {

  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <NavBar />
      <Hero />
      <Features/>
      <Pricing/>
    </main>
  );
}
