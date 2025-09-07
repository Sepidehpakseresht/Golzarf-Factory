import React from 'react'
import { useState } from 'react'

export default function DropdownNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="dropdown-container">
      {/* Button OUTSIDE the dropdown menu */}
      <button 
        onClick={handleDropdownClick}
        className="flex items-center justify-between w-full py-2 px-3 text-blue-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        محصولات 
        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {/* Dropdown menu that shows/hides */}
      {isDropdownOpen && (
        <div className="z-10 font-normal divide-y  divide-gray-100 rounded-lg shadow-sm">
          <ul className="dropdown-menu py-2 text-sm  bg-blue-500/95 shadow-inner">
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">ظروف ۷۵ mm</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">ظروف ۹۵ mm</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">ظروف ۱۲۵ mm</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">ظروف ۱۵۵ mm</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">ظروف سفارشی</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">قالب ژله‌ای</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-600">در پوش</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}