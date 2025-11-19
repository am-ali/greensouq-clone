"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  MessagesSquare,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Header() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user || null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => { listener.subscription.unsubscribe(); };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="w-full px-2 bg-[#A1D132]"> 
      {/* TOP BAR (fixed) */}
      <div className="fixed top-0 left-0 py-2 right-0 z-50 bg-[#A1D132]">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-20 py-4 gap-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.webp" 
            alt="GreenSouq" 
            width={220} 
            height={86}
            priority
            className="h-auto"
          />
        </Link>

        {/* SEARCH BAR */}
        <div className="flex-1 max-w-3xl">
          <div className="flex h-12 bg-white rounded-s overflow-hidden shadow-sm">
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
          {user ? (
            <button onClick={handleSignOut} className="flex items-center gap-2 cursor-pointer group">
              <User size={26} />
              <div className="hidden md:block leading-tight text-sm text-left">
                <div className="font-semibold text-[15px] truncate max-w-[120px]">{user.email}</div>
                <div className="text-[13px] flex items-center gap-1"><LogOut size={14}/> Sign out</div>
              </div>
            </button>
          ) : (
            <Link href="/auth" className="flex items-center gap-2 cursor-pointer">
              <User size={26} />
              <div className="hidden md:block leading-tight text-sm">
                <div className="text-[16px]">Login</div>
              </div>
            </Link>
          )}

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
