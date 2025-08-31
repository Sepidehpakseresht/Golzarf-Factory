import React from 'react'

export default function Hero() {
  return (
    <>
    <section className='bg-[#0b0f12] text-white h-screen flex flex-col justify-center items-center z-0'>
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div className='space-y-6'>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                 در چند ثانیه ظرف مناسب کسب‌وکارت را پیدا کن
                </h1>
                <p className="text-gray-300 md:text-lg">
                    PP، PET یا فوم — از 250 تا 1000 میلی‌لیتر — آمادهٔ ارسال سریع
                </p>
            </div>
            <div className='flex justify-center '>
                <img src="/public/fonts/plastic_disposable_cup.glb" alt="Hero Image" className='w-full h-auto max-w-md'/>
            </div>
        </div>
    </section>
    </>
  )
}
