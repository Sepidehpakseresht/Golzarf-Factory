import React from 'react'
// import { useState , useEffect } from 'react';
import Typewriter from 'react-typewriter-effect';





export default function Hero() {

  // // Hero Title
  // <Typewriter
  //   text="در چند ثانیه ظرف مناسب کسب‌ و کارت رو پیدا کن"
  //   cursorColor="#007bff"
  //   multiText={false}
  //   typeSpeed={30}
  // />

return(
  <section className="hero-video relative h-screen overflow-hidden rounded-b-3xl shadow-lg">
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover -z-10">
      <source src="/videos/factory-video.mp4" type="video/mp4" />
    </video>
    
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col items-center text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mt-20 leading-tight">
          گل ظرف تولید کننده ی ظروف یکبار مصرف
        </h1>
        <p className="text-lg md:text-2xl mt-20 leading-relaxed">
          در چند ثانیه محصول مناسب کسب و کار خود را پیدا کنید
        </p>
        <button className="bg-blue-600/90 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl text-white font-bold py-4 px-8 mt-10 rounded-lg text-lg transition-all duration-300 flex items-center gap-2">
          مشاهده ی محصولات
          <span className="animate-up-down">↓</span>
        </button>
      </div>
    </div>
  </section>

  
)
  
  
}
