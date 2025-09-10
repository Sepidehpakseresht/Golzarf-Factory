// DropdownNavbar.jsx
import React, { useEffect, useRef, useState } from "react";

export default function DropdownNavbar({ scrolled = false }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const toggle = () => setOpen(v => !v);
  const close  = () => setOpen(false);

  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      const t = e.target;
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      close();
    };
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const link =
  "flex items-center justify-between w-full md:w-auto py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors";
  const linkHover = scrolled ? " hover:text-[#3C71ED]" : " hover:text-[#b6dbdf]";

  const caret =
    "ms-2.5 w-2.5 h-2.5 transition-transform " + (open ? "rotate-180" : "");


  const panel =
    "absolute top-full mt-2 min-w-[240px] overflow-hidden rounded-2xl " +
    "z-50 shadow-xl ring-1 transition-all duration-150 " +
    (scrolled

      ? "bg-white text-slate-800 ring-black/10"
      : "bg-slate-900/80 text-white ring-white/20 backdrop-blur-xl");

  const item =
    "block w-full text-start px-4 py-2 text-[15px] leading-6 transition-colors " +
    (scrolled
      ? "hover:bg-slate-100"
      : "hover:bg-white/10");

  return (
    <div className="relative" dir="rtl">
      <button
        ref={btnRef}
        type="button"
        onClick={toggle}
        className={`${link} ${linkHover}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="products-menu"
      >
        محصولات
        <svg className={caret} viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          id="products-menu"
          role="menu"
          aria-label="دسته‌بندی محصولات"
          className={panel}
        >
          <ul className="py-2">
            <li><a href="#p-75"  className={item} role="menuitem">ظروف ۷۵ mm</a></li>
            <li><a href="#p-95"  className={item} role="menuitem">ظروف ۹۵ mm</a></li>
            <li><a href="#p-125" className={item} role="menuitem">ظروف ۱۲۵ mm</a></li>
            <li><a href="#p-155" className={item} role="menuitem">ظروف ۱۵۵ mm</a></li>
            <li><a href="#custom" className={item} role="menuitem">ظروف سفارشی</a></li>
            <li><a href="#jelly"  className={item} role="menuitem">قالب ژله‌ای</a></li>
            <li><a href="#lids"   className={item} role="menuitem">درپوش</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
