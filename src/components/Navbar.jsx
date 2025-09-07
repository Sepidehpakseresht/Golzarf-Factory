import React from 'react'
import Dropdown from './DropdownNavbar'

export default function Navbar() {
  return (
    

    <>
    <nav class="fixed min-w-full z-10 flex justify-between">
        <div class="max-w-screen-xl h-full flex flex-wrap items-center gap-2 mx-auto p-2 mt-5 bg-surface-1  border border-white border-opacity-10 rounded-full  backdrop-blur-xl backdrop-saturate-200">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/public/fonts/golzarfLogo-bgWhite.png" class="h-14 md:h-16 lg:h-16 " alt="Gorlzarf Logo" />
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col font-normal text-blue-600 p-4 md:p-0 mt-4 gap-5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                    <li>
                        <a href="#" class="block py-2 px-3 mx-4 text-white bg-blue-600 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">صفحه نخست</a>
                    </li>
                    <li>

                            {/* Dropdown menu  */}
                            <Dropdown></Dropdown>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">کاتالوگ محصولات</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">درباره ما</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">تماس با ما</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </>

  )
}
