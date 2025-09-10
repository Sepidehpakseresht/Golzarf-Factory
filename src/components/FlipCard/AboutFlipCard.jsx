import React, { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import './AboutFlipCard.css'


export default function AboutFlipCard() {

const [isFlipped, setIsFlipped] = useState(false);

const toggleCard = () => {
  setIsFlipped(!isFlipped);
};

  return (
    <section className="py-14 bg-white h-screen md:h-auto cursor-pointer">
        <div className='className="max-w-6xl mx-auto px-4"'>
            <div className="flip-card-container" onClick={toggleCard}>
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front Side */}
                    <div className="flip-card-front">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <img src="/images/factory-workshop-interior-machines-glass-production-background.jpg" alt="Factory-image" className="rounded-lg lg:h-96" />
                            <div>
                                <h2 className="text-2xl md:text-4xl font-bold mb-4">کارخانه‌ی گل ظرف</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugiat, officia temporibus repellendus consequuntur dignissimos error deleniti, fuga quos veniam! Libero adipisci voluptas velit aspernatur, optio necessitatibus explicabo tempore!</p>
                            </div>
                        </div>
                    </div>
                   {/* Back Side */}
                    <div className="flip-card-back">
                        <h2 className="text-4xl font-bold mb-8 text-center">چرا گل ظرف؟</h2>

                        {/* set a non-white section bg so the notch is visible */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F6FAFF] p-2 rounded-2xl">

                            {/* CARD 1 */}
                            <div className="relative overflow-visible bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200">
                            {/* concave notch (same color as section bg) */}
                            <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full ring-1 ring-slate-200"
                                    style={{ backgroundColor: '#F6FAFF' }}
                                    aria-hidden />
                            {/* colored badge on top */}
                            <span className="absolute -top-3 -right-3 w-14 h-14 rounded-full grid place-items-center shadow-lg z-10">
                                <img className="w-7 h-7" src="/icons/hot-price-icon.png" alt="" />
                            </span>

                            <h3 className="text-xl font-bold mt-6">کیفیت بی‌نظیر</h3>
                            <p className="text-gray-600 mt-2">متن توضیحات...</p>
                            </div>

                            {/* CARD 2 */}
                            <div className="relative overflow-visible bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200">
                            <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full ring-1 ring-slate-200"
                                    style={{ backgroundColor: '#F6FAFF' }}
                                    aria-hidden />
                            <span className="absolute -top-3 -right-3 w-14 h-14 rounded-full grid place-items-center shadow-lg z-10">
                                <img className="w-7 h-7" src="/icons/fast-delivery-icon.png" alt="" />
                            </span>

                            <h3 className="text-xl font-bold mt-6">ارسال سریع</h3>
                            <p className="text-gray-600 mt-2">متن توضیحات...</p>
                            </div>

                            {/* CARD 3 */}
                            <div className="relative overflow-visible bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200">
                                <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full ring-1 ring-slate-200"
                                    style={{ backgroundColor: '#F6FAFF' }}
                                    aria-hidden />
                                <span className="absolute -top-3 -right-3 w-14 h-14 rounded-full grid place-items-center shadow-lg z-10">
                                    <img className="w-7 h-7" src="/icons/quality-icon.png" alt="" />
                                </span>

                                <h3 className="text-xl font-bold mt-6">تجهیزات مدرن</h3>
                                <p className="text-gray-600 mt-2">متن توضیحات...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}





