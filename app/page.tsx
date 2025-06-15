'use client'
import Navbare from "@/components/navbare";
import Image from "next/image";
import LoginForm from "@/components/login-form";
import { Suspense } from "react";
import SignUpFormContent from "@/components/login-form";


function MainContentDisplay({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const componentToShow = searchParams.component;

  switch (componentToShow) {
    case 'login': // Correspond à la valeur du paramètre 'component' dans l'URL
      return <LoginForm />; {/* Remplace par ton composant de Login si tu en as un spécifique, sinon j'utilise HomeComponent pour l'exemple */}
    case 'signup': // Correspond à la valeur du paramètre 'component' dans l'URL
      return <SignUpFormContent />; {/* Remplace par ton composant de Sign Up */}
    case 'home':
    default: // Par défaut, ou si 'component' est manquant/inconnu
      return <LoginForm />; // Composant par défaut
  }
}

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbare />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div id="login">
          <Suspense >
          <MainContentDisplay searchParams={searchParams} />
        </Suspense>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn
        </a>
        
      </footer>
    </div>
  );
}
