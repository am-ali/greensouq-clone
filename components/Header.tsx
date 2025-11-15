"use client";

import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  MessagesSquare,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#A1D132]"> 
      {/* TOP BAR (fixed) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#A1D132]">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-20 py-4 gap-8">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M6 20C6 12 12 6 20 6C28 6 34 12 34 20C34 28 28 34 20 34"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M12 20L18 26L28 14"
              stroke="#8BC53F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[30px] font-bold text-black">GreenSouq</span>
        </div>

        {/* SEARCH BAR */}
        <div className="flex-1 max-w-4xl">
          <div className="flex h-12 bg-white rounded-md overflow-hidden shadow-sm">
            {/* Category Select */}
            <button className="flex items-center gap-2 bg-[#EDEDED] px-4 text-[15px] text-gray-700 whitespace-nowrap">
              All categories <ChevronDown size={18} />
            </button>

            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 px-4 text-[15px] outline-none"
            />

            <button className="bg-black w-14 grid place-items-center">
              <Search className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* CONTACT */}
        <div className="hidden lg:flex items-center gap-2 text-black">
          <MessagesSquare size={26} />
          <div className="text-sm leading-tight">
            <div className="font-bold text-[15px]">+971 58 512 1105</div>
            <div className="text-[13px]">info@greensouq.ae</div>
          </div>
        </div>

        {/* ACCOUNT + CART */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <User size={26} />
            <div className="hidden md:block leading-tight text-sm">
              <div className="font-semibold text-[15px]">My Account</div>
              <div className="text-[13px]">Logout</div>
            </div>
          </div>

          <button>
            <ShoppingCart size={28} />
          </button>
        </div>
        </div>
      </div>

      {/* NAVIGATION (offset for fixed top bar) */}
      <nav className="bg-[#A1D132] mt-20">
        <div className="max-w-screen-2xl mx-auto px-20">
          <ul className="flex items-center gap-8 text-black text-[16px] font-medium py-5 whitespace-nowrap overflow-x-auto">
            
            {[
              { label: "Indoor Plants", href: "/indoor" },
              { label: "Outdoor Plants", href: "/outdoor" },
              { label: "Soil & Stones" },
              { label: "Fertilizer & Pesticides" },
              { label: "Pots & Planters" },
              { label: "Seeds" },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-1 cursor-pointer">
                {item.href ? (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                <ChevronDown size={16} />
              </li>
            ))}

            <li className="cursor-pointer">Hydroponics</li>
            <li className="cursor-pointer">Garden Services</li>
            <li className="cursor-pointer">Plant Talk</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
