import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero/Hero';
import Products from './components/Products';
import AboutFlipCard from './components/FlipCard/AboutFlipCard';





export default function App() {

  return (
    <div className='px-14' >
    <Navbar/>
    <Hero/>
    <Products/>
    <AboutFlipCard/>
    </div>

  )
}
