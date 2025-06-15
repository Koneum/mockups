// components/navbare.tsx
'use client'; // Ce composant est un Client Component

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // Correct pour l'App Router
import React from 'react';

function Navbare() {
  const searchParams = useSearchParams();
  const currentComponent = searchParams.get('component'); // Récupère la valeur du paramètre 'component'

  return (
    <div className="sticky py-2 px-8 top-0 z-50 w-full shadow-xl rounded-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="hidden md:flex items-center space-x-6 container flex h-16 items-center justify-center">
        <Link 
          href="/?component=login" 
          className={`hover:text-blue-400 ${currentComponent === 'login' ? 'font-bold' : ''}`}
        >
          Login
        </Link>
        {/* <Link 
          href="/?component=signup" 
          className={`hover:text-blue-400 ${currentComponent === 'signup' ? 'font-bold' : ''}`}
        >
          Sign Up
        </Link>
        <Link
          href="/?component=home"
          className={`hover:text-blue-400 ${currentComponent === 'home' || !currentComponent ? 'font-bold' : ''}`}
        >
          Home
        </Link> */}
      </nav>
    </div>
  );
}

export default Navbare;