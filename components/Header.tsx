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
  Menu,
} from "lucide-react";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user || null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => { listener.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="w-full bg-[#A1D132]"> 
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
        onSignOut={handleSignOut}
      />
      
      {/* TOP BAR (fixed) */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#A1D132] ${isScrolled ? 'py-0' : 'py-2'}`}>
        {/* Mobile Header */}
        <div className="md:hidden max-w-screen-2xl mx-auto px-4 pt-3">
          <div className="flex items-center justify-between gap-3">
            <button className="text-black" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={26} />
            </button>
            
            <button className="text-black">
              <Search size={26} />
            </button>
            
            <Link href="/" className="flex items-center flex-1 justify-center">
              <Image 
                src="/logo.webp" 
                alt="GreenSouq" 
                width={190}
                height={54}
                priority
                className="h-auto"
              />
            </Link>

            <button>
              <ShoppingCart size={26} />
            </button>
          </div>
          
          <div className="border-t border-black/20 mt-3 pt-2">
            <div className="flex items-center justify-center gap-2 text-xs text-black">
              <MessagesSquare size={18} />
              <span className="font-bold">+971 58 512 1105</span>
              <span>info@greensouq.ae</span>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex max-w-screen-2xl mx-auto items-center justify-between px-10 lg:px-20 py-2 gap-4 lg:gap-8">
        {/* LOGO */}
        <div className="flex items-center gap-4">
          {isScrolled && (
            <button className="text-black">
              <Menu size={28} />
            </button>
          )}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.webp" 
              alt="GreenSouq" 
              width={180}
              height={69}
              priority
              className="h-auto lg:w-[220px]"
            />
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="flex-1 max-w-3xl">
          <div className="flex h-12 bg-white rounded-sm overflow-hidden shadow-sm">
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
              <Search className="text-white" size={18} />
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
              <div className="hidden lg:block leading-tight text-sm text-left">
                <div className="font-semibold text-[15px] truncate max-w-[120px]">{user.email}</div>
                <div className="text-[13px] flex items-center gap-1"><LogOut size={14}/> Sign out</div>
              </div>
            </button>
          ) : (
            <Link href="/auth" className="flex items-center gap-2 cursor-pointer">
              <User size={26} />
              <div className="hidden lg:block leading-tight text-sm">
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
      <nav className="bg-[#A1D132] mt-16 md:mt-15">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20">
          <ul className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 text-black text-sm md:text-[16px] font-medium py-4 md:py-5 whitespace-nowrap overflow-x-auto scrollbar-hide">
            
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
                <ChevronDown size={14} className="md:hidden" />
                <ChevronDown size={16} className="hidden md:block" />
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
