"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCard() {
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startEmail() {
    setLoading(true); setError(null);
    try {
      const { error } = await supabase.auth.signInWithOtp({ 
        email, 
        options: { 
          shouldCreateUser: true,
          emailRedirectTo: `${window.location.origin}/auth/callback`
        } 
      });
      if (error) throw error;
      setStep('code');
    } catch (e:any) { setError(e.message); }
    finally { setLoading(false); }
  }

  function oauth(provider: 'google' | 'facebook') {
    supabase.auth.signInWithOAuth({ 
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F7F7F8]">
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[460px] bg-white rounded-lg shadow-sm p-12">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="mr-2">
              <path d="M6 20C6 12 12 6 20 6C28 6 34 12 34 20C34 28 28 34 20 34" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              <path d="M12 20L18 26L28 14" stroke="#8BC53F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-2xl font-bold text-black">GreenSouq<span className="text-[#8BC53F]">.</span></span>
          </div>

          {step === 'email' && (
            <div>
              <h1 className="text-2xl font-semibold mb-1 text-black">Sign in</h1>
              <p className="text-sm text-gray-600 mb-8">Choose how you'd like to sign in</p>

              <button
                className="w-full h-14 bg-[#5B3EF8] hover:bg-[#4F2FE5] text-white font-medium rounded-lg mb-4 transition-colors text-base"
              >
                Sign in with shop
              </button>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <button 
                  onClick={() => oauth('google')} 
                  className="h-14 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10.2V12.05H15.5909C15.3545 13.3 14.5909 14.3591 13.4273 15.0682V17.5773H16.7364C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                    <path d="M10.2 20C12.9 20 15.1727 19.1045 16.7364 17.5773L13.4273 15.0682C12.4636 15.6682 11.2364 16.0227 10.2 16.0227C7.59091 16.0227 5.37273 14.2636 4.52727 11.9H1.11364V14.4909C2.66818 17.5909 6.20909 20 10.2 20Z" fill="#34A853"/>
                    <path d="M4.52727 11.9C4.32727 11.3 4.21364 10.6591 4.21364 10C4.21364 9.34091 4.32727 8.7 4.52727 8.1V5.50909H1.11364C0.404545 6.92727 0 8.41818 0 10C0 11.5818 0.404545 13.0727 1.11364 14.4909L4.52727 11.9Z" fill="#FBBC05"/>
                    <path d="M10.2 3.97727C11.3364 3.97727 12.3545 4.35909 13.1545 5.11364L16.0636 2.20455C15.1682 1.38182 12.9 0 10.2 0C6.20909 0 2.66818 2.40909 1.11364 5.50909L4.52727 8.1C5.37273 5.73636 7.59091 3.97727 10.2 3.97727Z" fill="#EA4335"/>
                  </svg>
                </button>
                <button 
                  onClick={() => oauth('facebook')} 
                  className="h-14 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
                    <path d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                  </svg>
                </button>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="px-4 text-sm text-gray-500">or</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="mb-1">
                <label className="block text-sm text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="mf3579753@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && email && startEmail()}
                  className="w-full h-14 border border-gray-300 rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={startEmail}
                disabled={!email || loading}
                className="w-full h-14 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base mt-6"
              >
                {loading ? 'Sending...' : 'Continue'}
              </button>
              {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
            </div>
          )}

          {step === 'code' && (
            <div>
              <h1 className="text-2xl font-semibold mb-1 text-black">Check your email</h1>
              <p className="text-sm text-gray-600 mb-8">
                We sent a magic link to <span className="font-medium text-black">{email}</span>
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-700">
                    Click the link in the email to sign in. The link will expire in 1 hour.
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep('email')}
                className="w-full text-sm text-[#0066FF] hover:underline font-medium"
              >
                Sign in with a different email
              </button>
              {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
            </div>
          )}
        </div>
      </div>
      <div className="pb-8 text-center text-sm space-x-6">
        <a href="#" className="text-[#0066FF] hover:underline">Privacy policy</a>
        <a href="#" className="text-[#0066FF] hover:underline">Terms of service</a>
      </div>
    </div>
  );
}
