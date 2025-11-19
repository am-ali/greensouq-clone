"use client";

import { X, ChevronDown, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onSignOut: () => void;
}

export default function MobileMenu({ isOpen, onClose, user, onSignOut }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] md:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] overflow-y-auto md:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User size={24} />
            {user ? (
              <span className="font-medium text-sm">{user.email}</span>
            ) : (
              <Link href="/auth" onClick={onClose} className="font-medium text-base">
                Login
              </Link>
            )}
          </div>
          <button onClick={onClose} className="p-1">
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {/* Indoor Plants */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('indoor')}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-base"
            >
              <Link href="/indoor" onClick={onClose}>Indoor Plants</Link>
              <ChevronDown 
                size={20}
                className={`transition-transform ${expandedSection === 'indoor' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'indoor' && (
              <div className="px-4 pb-3 space-y-2 text-sm text-gray-600">
                <div>Succulents</div>
                <div>Ferns</div>
                <div>Air Purifying</div>
              </div>
            )}
          </div>

          {/* Outdoor Plants */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('outdoor')}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-base"
            >
              <Link href="/outdoor" onClick={onClose}>Outdoor Plants</Link>
              <ChevronDown 
                size={20}
                className={`transition-transform ${expandedSection === 'outdoor' ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSection === 'outdoor' && (
              <div className="px-4 pb-3 space-y-2 text-sm text-gray-600">
                <div>Flowering</div>
                <div>Shrubs</div>
                <div>Trees</div>
              </div>
            )}
          </div>

          {/* Soil & Stones */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('soil')}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-base"
            >
              Soil & Stones
              <ChevronDown 
                size={20}
                className={`transition-transform ${expandedSection === 'soil' ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Fertilizer & Pesticides */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('fertilizer')}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-base"
            >
              Fertilizer & Pesticides
              <ChevronDown 
                size={20}
                className={`transition-transform ${expandedSection === 'fertilizer' ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Pots & Planters */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('pots')}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-base"
            >
              Pots & Planters
              <ChevronDown 
                size={20}
                className={`transition-transform ${expandedSection === 'pots' ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Seeds */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('seeds')}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-base"
            >
              Seeds
              <ChevronDown 
                size={20}
                className={`transition-transform ${expandedSection === 'seeds' ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Hydroponics */}
          <div className="border-b border-gray-200">
            <div className="px-4 py-4 text-base">
              Hydroponics
            </div>
          </div>

          {/* Garden Services */}
          <div className="border-b border-gray-200">
            <div className="px-4 py-4 text-base">
              Garden Services
            </div>
          </div>

          {/* Plant Talk */}
          <div className="border-b border-gray-200">
            <div className="px-4 py-4 text-base">
              Plant Talk
            </div>
          </div>
        </div>

        {/* Logout button if user is logged in */}
        {user && (
          <div className="p-4">
            <button 
              onClick={() => {
                onSignOut();
                onClose();
              }}
              className="w-full bg-black text-white py-3 rounded text-sm font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
