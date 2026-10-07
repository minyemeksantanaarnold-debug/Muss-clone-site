'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { IconWhatsapp } from './HomePage'

export default function Form({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"onClick={onClose}>
      
      <div
        className="relative w-full max-w-md space-y-2 rounded-2xl bg-white p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-white/10"
        >
          <X />
        </button>

        <h1 className="text-4xl font-semibold">Contactez-nous</h1>
        <p className="mb-8">Nous vous répondrons le plus tôt possible</p>
        <p>Tel: +237 656 49 61 06</p>
        <p>Email: contact@muss-digital.com</p>
        <p>Ngaoundéré, Cameroun</p>

        <hr className="my-10" />

        <div className="grid grid-cols-1 space-y-2">
          
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border bg-orange-400 px-5 py-3 font-semibold text-slate-900 transition">
            <IconWhatsapp className="h-6 w-6" />
            Écrivez-nous sur WhatsApp
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border -5 py-3 font-semibold text-slate-900 transition">
            <Image src="/mail.svg" alt="mail" width={20} height={20} />
            Envoyez-nous un Email
          </button>
        </div>
        <p className='text-[14px] ml-5'>Vous serez redirigé vers votre messagerie par défaut</p>
        <p className='mt-10 text-[10px] text-center'>MUSS Digital 2025 - L’agence</p>
      </div>
    </div>
  )
}