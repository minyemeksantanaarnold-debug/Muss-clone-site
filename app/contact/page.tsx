import React from "react";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Barre de navigation */}
      <header className="flex items-center justify-between border-b border-gray-100 px-8 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
            <span className="text-2xl text-green-500">📞</span>
            <span>WhatsApp</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-800 md:flex">
            <span className="flex items-center gap-1">
              Fonctionnalités <span>⌄</span>
            </span>
            <span>Confidentialité</span>
            <span>Blog</span>
            <span>Applications</span>
            <span className="flex items-center gap-1">
              Pages d'aide <span>↗</span>
            </span>
            <span className="flex items-center gap-1">
              Pour les entreprises <span>↗</span>
            </span>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800">
            Se connecter <span>›</span>
          </button>
          <button className="flex items-center gap-1 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white">
            Télécharger <span>⭳</span>
          </button>
        </div>
      </header>

      {/* Contenu central */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0b2b26] text-white">
          <span className="text-xs font-semibold">MUSS Digital</span>
        </div>

        <h1 className="mb-8 text-2xl font-normal text-gray-800">MUSS Digital</h1>

        <button className="mb-4 w-64 rounded-full bg-green-500 py-3 text-sm font-semibold text-gray-900">
          Ouvrir l'application
        </button>

        <button className="mb-6 w-64 rounded-full border border-gray-300 py-3 text-sm font-semibold text-gray-800">
          Continuer vers WhatsApp Web
        </button>

        <p className="flex items-center gap-2 text-sm text-gray-700">
          <span className="text-lg text-green-500">📞</span>
          Vous n'avez pas l'application ?{" "}
          <span className="font-semibold text-green-600 underline underline-offset-2">
            Téléchargez l'application maintenant
          </span>
        </p>
      </main>

      {/* Pied de page sombre */}
      <footer className="bg-[#0b1418] px-8 py-10 text-white">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl text-white">📞</span>
            <span>WhatsApp</span>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm text-white/70 sm:grid-cols-4">
            <span>Notre entreprise</span>
            <span>Qui sommes-nous ?</span>
            <span>Utiliser WhatsApp</span>
            <span>Besoin d'aide ?</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
