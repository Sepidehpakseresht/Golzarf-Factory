import React, { useEffect, useState } from "react";
import Dropdown from "./DropdownNavbar/DropdownNavbar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // wrapper style changes with scroll
  const wrapper =
    `fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300` +
    ` ${scrolled ? "text-slate-900" : "text-white"}`;

  // inner pill container
  const shell =
    "max-w-screen-xl h-full flex flex-wrap items-center gap-2 mx-auto" +
    " p-2 mt-5 border border-white/10 rounded-full backdrop-blur-xl backdrop-saturate-200" +
    (scrolled ? " bg-white/90 shadow-sm" : " bg-surface-1/10");

  // links
  const link =
    "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors";
  const linkHover = scrolled ? " hover:text-[#3C71ED]" : " hover:text-[#b6dbdf]";

  return (
    <>
      <nav className={wrapper}>
        <div className={shell}>
          {/* Logo */}
          <a href="#home" className="flex items-center">
            {/* In Vite, files in /public are referenced WITHOUT /public prefix */}
            <img
              src="/fonts/golzarfLogo-bgWhite.png"
              className="h-14 md:h-16 lg:h-16"
              alt="Golzarf Logo"
            />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={
              "inline-flex items-center justify-center w-10 h-10 md:hidden rounded-lg ring-1 transition-colors " +
              (scrolled
                ? "text-slate-700 ring-black/10 hover:bg-black/5"
                : "text-white ring-white/20 hover:bg-white/10")
            }
            aria-controls="navbar-dropdown"
            aria-expanded={open}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Links */}
          <div
            id="navbar-dropdown"
            className={
              (open ? "block" : "hidden") + " w-full md:block md:w-auto"
            }
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center font-normal p-4 md:p-0 mt-4 md:mt-0 gap-3 md:gap-5 rtl:space-x-reverse">
              <li>
                <a href="#home" className={`${link} ${linkHover}`}>
                  صفحه نخست
                </a>
              </li>

              {/* Dropdown menu */}
              <li>
                <Dropdown />
              </li>

              <li>
                <a href="#catalog" className={`${link} ${linkHover}`}>
                  کاتالوگ محصولات
                </a>
              </li>

              <li>
                <a href="#about" className={`${link} ${linkHover}`}>
                  درباره ما
                </a>
              </li>

              <li>
                <a href="#contact" className={`${link} ${linkHover}`}>
                  تماس با ما
                </a>
              </li>

              {/* CTA (optional) */}
              <li className="md:ml-2">
                <a
                  href="#contact"
                  className={
                    "rounded-xl px-4 py-2 font-semibold transition-colors " +
                    (scrolled
                      ? "bg-[#3C71ED] text-white hover:bg-[#2f5ed0]"
                      : "bg-white/10 text-white hover:bg-white/20")
                  }
                >
                  استعلام قیمت
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
