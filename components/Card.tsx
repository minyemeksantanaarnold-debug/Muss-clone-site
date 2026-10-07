"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

/**
 * Section "Liens rapides" — 4 cartes avec bandeau vert en fond
 * et boutons d'action oranges.
 *
 * Remplacez les chemins d'images ci-dessous par vos propres assets
 * placés dans le dossier /public :
 *  - /images/crayon-et-papier.webp
 *  - /images/one-shot.webp
 */

interface QuickLinkCard {
  id: string;
  label: string;
  href: string;
}

const cards: QuickLinkCard[] = [
  { id: "formulaire", label: "Formulaire de visite", href: "#" },
  { id: "one-shot", label: "S'inscrire aux One shot", href: "#" },
  { id: "communaute", label: "Voir la communauté", href: "#" },
  { id: "linkedin", label: "Nous rejoindre sur LinkedIn", href: "#" },
];

export default function QuickLinksSection() {
  return (
    <section className="relative bg-white py-6">
      {/* Bandeau vert en arrière-plan, derrière la moitié haute des cartes */}
      <div className="absolute inset-x-0 top-0 h-[180px] bg-[#0B7A3B]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6">
        {/* Carte 1 — Formulaire de visite */}
        <Card href={cards[0].href} label={cards[0].label}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src="/images/crayon-et-papier.webp"
              alt="Formulaire de visite"
              width={110}
              height={110}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
          </div>
        </Card>

        {/* Carte 2 — S'inscrire aux One shot */}
        <Card href={cards[1].href} label={cards[1].label} imageTop="/images/one-shot.webp" />

        {/* Carte 3 — Voir la communauté (WhatsApp) */}
        <Card href={cards[2].href} label={cards[2].label}>
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4CAF50] sm:h-28 sm:w-28">
              <MessageCircle
                className="h-12 w-12 text-white"
                fill="white"
                strokeWidth={0}
              />
            </div>
          </div>
        </Card>

        {/* Carte 4 — Nous rejoindre sur LinkedIn */}
        <Card href={cards[3].href} label={cards[3].label}>
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-md bg-[#0A66C2] sm:h-28 sm:w-28">
              <Image src='/linkedin.webp' alt="linkedin" width={14} height={14} className="h-14 w-14 text-white sm:h-16 sm:w-16"/>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({
  href,
  label,
  imageTop,
  children,
}: {
  href: string;
  label: string;
  imageTop?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-[#F3F4F6] shadow-sm">
      <div className="relative h-36 w-full sm:h-44">
        {imageTop ? (
          <Image src={imageTop} alt={label} fill className="object-cover" />
        ) : (
          children
        )}
      </div>

      <div className="flex flex-1 items-end justify-center p-3 sm:p-4">
        <a
          href={href}
          className="w-full rounded-full bg-[#F5A623] px-3 py-2.5 text-center text-xs font-bold text-[#1a1a1a] transition-colors hover:bg-[#e5951a] sm:text-sm"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
