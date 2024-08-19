'use client';
import NavBar from './components/navbar.js';
import Hero from './components/hero.js';
import Features from './components/features.js';
import Pricing from './components/pricingsection';


export default function Home() {

  return (
    <>
      <NavBar />
      <Hero />
      <Features/>
      <Pricing/>
    </>
  );
}
