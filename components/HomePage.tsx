"use client";

import  Image  from "next/image";
import { useState, useEffect } from "react";
import Form from "./Form";

export function IconUsers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17 20c0-2.5-2.5-4.5-5-4.5S7 17.5 7 20M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM20 20c0-1.9-1.6-3.6-3.5-4.2M16.5 11.5a3 3 0 1 0 0-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStar({ className = "", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className}>
      <path
        d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.6 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5Z"
        stroke="currentColor"
        strokeWidth={filled ? "0" : "1.4"}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.3 12.3l2.4 2.4 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11.5V17c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPath({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.8 7.5 12 12l-1 5.2M12 12l4.4 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconMonitor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4.5" width="18" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20.5h6M12 16.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 12.5l2-3 2 2 3-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCoins({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="8" width="13" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4H18a2.5 2.5 0 0 1 2.5 2.5V13a2.5 2.5 0 0 1-2.5 2.5h-1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9.5" cy="12.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconWhatsapp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5A9.5 9.5 0 0 0 3.8 17l-1.1 4.1 4.2-1.1A9.5 9.5 0 1 0 12 2.5Zm0 1.8a7.7 7.7 0 0 1 6.5 11.9l-.2.3.6 2.3-2.3-.6-.3.2A7.7 7.7 0 1 1 12 4.3Zm-3.1 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.1 1.8 2.9 4.5 4 2.2.9 2.7.7 3.2.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.6-1.6-.9-2.1-.2-.5-.4-.5-.6-.5h-.5Z" />
    </svg>
  );
}

export function IconArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLinkedin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
    </svg>
  );
}

export  function IconFacebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.3C15.9 4.2 15 4 14 4c-2.2 0-3.6 1.3-3.6 3.8v2.1H8v3h2.4V21h3.1Z" />
    </svg>
  );
}


const FORMATIONS = [
  {
    tag: "Génie logiciel",
    title: "Développeur Frontend",
    desc: "Apprenez à concevoir et développer des interfaces web modernes, …",
    duration: "05 mois",
    mode: "Présentiel",
    stack: ["HTML", "CSS", "Typescript", "NextJs", "TailwindCss", "Figma"],
    image: "developpeur-frontend.svg",
  },
  {
    tag: "Génie logiciel",
    title: "Développeur Backend",
    desc: "Devenez architecte de la logique métier et des bases de données d'un…",
    duration: "05 mois",
    mode: "Présentiel",
    stack: ["Typescript", "NodeJs", "Nest", "SQL", "NoSQL", "Docker"],
    image: "developpeur-backend.svg",
  },
  {
    tag: "Vente & Marketing",
    title: "Marketing des réseaux sociaux",
    desc: "Apprenez à construire une présence en ligne forte et engageante. Cette…",
    duration: "05 mois",
    mode: "Présentiel",
    stack: ["Facebook", "LinkedIn", "Instagram", "Whatsapp Business", "Canva", "Storytelling"],
    image: "marketing-reseaux-sociaux.svg",
  },
  {
    tag: "UI/UX Designer",
    title: "UI/UX Designer",
    desc: "Développez votre sens du design et créez des interfaces digitales centré…",
    duration: "06 mois",
    mode: "Présentiel",
    stack: ["Figma", "User Interface", "User Experience", "Adobe Photoshop"],
    image: "designer.svg",
  },
];

const STEPS = [
  {
    title: "1. Tu choisis ton parcours",
    desc:
      "Que tu aimes créer, organiser ou résoudre des problèmes, on t'aide à choisir un parcours qui te parle vraiment. (Exemples : créer des sites, organiser un projet, faire des visuels) Et si tu n'es pas sûr ? On t'aide à choisir ce qui te correspond le mieux.",
  },
  {
    title: "2. Tu apprends avec des exercices simples",
    desc:
      "Pas de grandes théories compliquées. On te montre, tu essaies, tu pratiques. Petit à petit, tu prends confiance.",
  },
  {
    title: "3. Tu es accompagné(e) tout au long",
    desc:
      "Un formateur est là pour toi. Et une vraie équipe t'encourage. Tu peux poser toutes tes questions, même celles que tu crois \u201cbêtes\u201d.",
  },
  {
    title: "4. Tu construis quelque chose de concret",
    desc:
      "À la fin, tu auras réalisé un vrai projet. Pas juste des leçons, mais quelque chose que tu peux montrer avec fierté.",
  },
  {
    title: "5. Tu es soutenu(e) après la formation",
    desc:
      "On ne te laisse pas seul(e) après. On t'aide à trouver un stage, un emploi, ou à lancer ton idée.",
  },
];

const QUESTIONS = [
  {
    icon: IconCap,
    title: "Tu viens de finir tes études et tu ne trouves pas d'emploi ?",
    desc:
      "Tu veux des compétences utiles pour travailler rapidement. Peu importe ton parcours, on t'aide à construire ton avenir, pas juste ton CV.",
  },
  {
    icon: IconPath,
    title: "Tu veux changer de métier ou relancer ta vie ?",
    desc: "Tu es motivé(e), mais tu ne sais pas par où commencer. On t'accompagne étape par étape.",
  },
  {
    icon: IconMonitor,
    title: "Tu n'as jamais touché à un ordinateur ?",
    desc:
      "Tu penses que le numérique, c'est pour les autres. On commence par les bases, sans juger, sans pression.",
  },
  {
    icon: IconCoins,
    title: "Tu as peu de moyens, peu de réseau ?",
    desc:
      "Tu veux une vraie chance, pas juste une formation pour la forme. Chez MUSS Digital, on croit en ceux que le système oublie.",
  },
];

const STATS = [
  { value: "+150", label: "personnes formés avec accompagnement humain" },
  { value: "8/10", label: "Sont partis de zéro, sans expérience numérique" },
  { value: "+12", label: "Entreprises partenaires locales et régionales" },
  { value: "96%", label: "disent avoir retrouvé confiance en eux grâce à MUSS DIGITAL" },
];

const TESTIMONIALS = [
  {
    title: "J'ai repris confiance en moi grâce à cette accompagement !",
    text: "Avant, je pensais que le numérique n'était pas fait pour moi. Aujourd'hui, je gère le site web d'une PME et je me sens enfin légitime dans ce que je fais.",
    name: "Nadège Fonkoua",
    role: "Étudiant (23 ans)",
    stars: 5,
    avatar: "/avatar-3.jpg",
  },
  {
    title: "De couturière à créatrice digitale freelance !",
    text: "Je suis passée de couturière sans ordi à créatrice de visuels freelance. Ce n'est pas juste une formation. C'est un déclic.",
    name: "Samiratou Salia",
    role: "Étudiant (25 ans)",
    stars: 4,
    avatar: "/avatar2.png",
  },
  {
    title: "Une vraie communauté, pas juste une formation",
    text: "C'est la première fois que je me sens aussi bien entouré. L'équipe est bienveillante, toujours à l'écoute. Ici, on apprend sans peur de l'échec.",
    name: "Sadrack Ivan",
    role: "Étudiant (22 ans)",
    stars: 4,
    avatar: "/avatar-4.jpg",
  },
  {
    title: "Je n'aurais jamais cru aller aussi loin",
    text: "J'ai découvert des compétences que je ne soupçonnais pas. Grâce à MUSS DIGITAL, j'ai un vrai plan de carrière dans le numérique.",
    name: "Gabin",
    role: "Étudiant (24 ans)",
    stars: 3,
    avatar: "/avatar1.png",
  },
];

const FAQS = [
  {
    q: "Je ne connais rien au numérique. Est-ce que je peux quand même m'inscrire ?",
    a: "Oui. Tu n'as pas besoin de savoir coder ou de connaître les outils. On commence du tout début, avec patience, méthode, et bienveillance.",
  },
  {
    q: "Et si je n'ai pas d'ordinateur ou de connexion chez moi ?",
    a: "Pas de souci. Nous avons des centres équipés ou des solutions d'accès pour que tu puisses suivre les cours. Ce n'est pas un frein pour rejoindre la formation.",
  },
  {
    q: "Comment je m'inscris ?",
    a: "list1",
  },
  {
    q: "Est-ce que j'aurai un travail après ?",
    a: "list2",
  },
  {
    q: "Je ne me sens pas légitime. J'ai peur d'être largué(e).",
    a: "C'est normal de douter. Mais chez MUSS DIGITAL, personne ne te juge. On t'écoute, on t'encourage, on t'explique les choses simplement.Tu n'es pas seul(e). Et tu peux réussir.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Certaines formations sont gratuites, d'autres sont à coût réduit, grâce à nos partenaires. Et on trouve toujours une solution adaptée à ta situation.",
  },
];

const GALLERY = ["/class.webp", "/classroom.webp", "/students.webp"];


function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-orange-400">
      <IconWhatsapp className="h-4 w-4" />
      {children}
    </button>
  );
}

export function ButtonSecondary({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition ${dark
          ? "border-white/70 text-white hover:bg-white/10"
          : "border-slate-300 text-slate-900 hover:bg-slate-50"
        }`}
    >
      {children}
    </button>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} filled={i < count} className="h-4 w-4" />
      ))}
    </div>
  );
}


export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    };
    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const scrollToSection = (e:React.MouseEvent<HTMLAnchorElement>, id: string) =>{
    e.preventDefault();
    const element = document.querySelector(id);
    if(element){
      element.scrollIntoView({ behavior :"smooth"});
      window.history.pushState(null,"",id);
    }
  };




  return (
    <main className="min-h-screen bg-white text-slate-900">
      {open && <Form onClose={() => setOpen(false)} />}
      <section className="relative overflow-hidden bg-[#01814e] pb-24 pt-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 bg-[url('/bg-pattern-white.png')] bg-repeat bg-[length:26px_26px]"
        />


        <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-xl bg-white px-6 py-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt='logo de muss digit' width={70} height={70} />

          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href='#formation' onClick={(e) => scrollToSection(e, "#formation")}>Formations</a>
            <a href='#approche' onClick={(e) => scrollToSection(e, "#approche")}>Notre Approche</a>
            <a href='#avis' onClick={(e) => scrollToSection(e, "#avis")}>Avis</a>
            <a href='#about' onClick={(e) => scrollToSection(e, "#about")}>A propos</a>
            <a href='/communaute'>Communaute</a>
          </nav>

            <a href="/agence.muss.digital" className="hidden items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold md:inline-flex">Voir notre agence <IconArrow className="h-4 w-4" /></a>
            
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="text-white">
            <span className="inline-block rounded-full border border-white/50 px-4 py-1.5 text-sm">
              Nous t'accompagnons vers une carrière dans le numérique.
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Le numérique n'est pas réservé aux autres. Il est pour toi.
            </h1>

            <p className="mt-6 max-w-md text-emerald-50">
              Nous t'accompagnons vers une carrière dans le numérique. Même si tu n'as
              jamais touché un ordinateur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonPrimary>Nos Formations</ButtonPrimary>
              <ButtonSecondary dark>
                <IconWhatsapp className="h-4 w-4" />
                Contactez-nous
              </ButtonSecondary>
            </div>

            <div className="mt-12 flex gap-12">
              <div className="text-white">
                <div className="flex items-center gap-2 text-lg font-bold">
                  <IconUsers className="h-5 w-5" />
                  +150
                </div>
                <p className="mt-1 max-w-[12rem] text-sm text-emerald-100">
                  personnes formés avec accompagnement humain
                </p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 text-lg font-bold">
                  <IconStar className="h-5 w-5" />
                  8/10
                </div>
                <p className="mt-1 max-w-[12rem] text-sm text-emerald-100">
                  Sont partis de zéro, sans expérience numérique
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-sm">
            <div className="absolute right-0 top-0 h-full w-3/4 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-amber-400" />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="relative h-[400px] w-[320px] overflow-hidden [clip-path:polygon(0_0,100%_0,50%_100%)]">
                <Image
                  src="/young-woman-in-tech-muss-digital.svg"
                  alt="Étudiants MUSS Digital en formation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-emerald-50 px-6 py-16 md:px-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            On t'a dit que la tech n'était pas faite <span className="font-extrabold">pour toi ?</span>
          </h2>
          <p className="mt-4 text-slate-600">
            En Afrique, on associe encore trop souvent le numérique à une élite
          </p>
          <ul className="mt-3 space-y-1 text-slate-600">
            <li>— Ceux qui parlent anglais.</li>
            <li>— Ceux qui ont un ordinateur personnel.</li>
            <li>— Ceux qui vivent en capitale.</li>
            <li>— Ceux qui ont les moyens.</li>
          </ul>
          <p className="mt-4 text-slate-700">
            <span className="font-semibold">Résultat</span> : Des milliers de jeunes passent à
            côté d'un monde infini d'opportunités et finissent sans carrière de vie.
          </p>
        </div>

        <div className="bg-emerald-100/70 px-6 py-16 md:px-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Chez MUSS Digital, <span className="font-extrabold">nous cassons les barrières</span> à
            l'entrée.
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              "Accès à un ordinateur si tu n'en as pas",
              "Le coût est abordable, et la première session est gratuite.",
              "Ici, on commence de zéro, avec un accompagnement individuel.",
              <>
                Nos chiffres parlent : <span className="font-semibold">+90 %</span> d'insertion
                en 6 mois.
              </>,
              "On simplifie, on accompagne, on adapte.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-700">
                <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20" id="formation">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-md text-3xl font-bold">
            Des formations qui vous <span className="font-extrabold">garantissent un emploi</span>
          </h2>
          <p className="max-w-md text-slate-600">
            Nos formations sont claires, pédagogiques et adaptées à notre contexte, conçues pour
            vous accompagner de A à Z, même si vous êtes débutant.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATIONS.map((f) => (
            <div key={f.title} className="flex flex-col">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-emerald-50">
                <Image src={f.image} alt={f.title} fill className="object-contain p-6" />
              </div>
              <span className="mt-4 inline-block w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {f.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>

              <div className="mt-4 flex items-center justify-between border-t border-dashed border-slate-200 pt-3 text-sm text-slate-500">
                <span> {f.duration}</span>
                <span>{f.mode}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {f.stack.map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2" id="approche">
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Apprendre chez nous, <br /> c'est simple.
          </h2>
          <p className="mt-4 max-w-sm text-slate-600">
            Tu avances à ton rythme, entouré(e) et soutenu(e). Pas besoin d'avoir un
            ordinateur ou de connaître déjà. On t'accueille là où tu es, et on t'aide
            à progresser <span className="font-semibold text-slate-900">pas à pas.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonPrimary>Contactez-nous</ButtonPrimary>
            <ButtonSecondary>Voir les formations</ButtonSecondary>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {STEPS.map((s) => (
            <div key={s.title} className="py-5 first:pt-0">
              <h3 className="font-bold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-emerald-700 pt-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Tu te poses la question : est-ce que c'est pour moi ? La réponse est simple : oui.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUESTIONS.map((q) => (
            <div key={q.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600">
                <q.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-4 font-bold">{q.title}</h3>
              <p className="mt-2 text-sm text-emerald-100">{q.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-4 px-6 pb-14">
          <ButtonPrimary>Contactez-nous</ButtonPrimary>
          <ButtonSecondary dark>Voir les formations</ButtonSecondary>
        </div>

        <div className="bg-emerald-800 py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Nos chiffres parlent. Mais leurs parcours parlent encore plus.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <p className="mt-2 text-sm text-emerald-100">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4 px-6">
            <ButtonPrimary>Contactez-nous</ButtonPrimary>
            <ButtonSecondary dark>Voir les formations</ButtonSecondary>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold">
          Soutenus par <br /> Des leaders
        </h2>
        <section id="avis">
          <div className="mt-10 flex flex-wrap items-center gap-12 opacity-80" >
            <span className="text-lg font-extrabold text-slate-800">MUSS Digital</span>
            <span className="text-lg font-extrabold text-purple-700">
              TOGE<span className="text-orange-500">VA</span>
            </span>
            <span className="text-lg font-extrabold text-amber-700">GND</span>
          </div>

          <h3 className="mt-20 text-3xl font-extrabold">Ils parlent de nous</h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 p-6">
                <h4 className="font-bold">{t.title}</h4>
                <p className="mt-3 text-slate-600">{t.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <Stars count={t.stars} />
                </div>
              </div>
            ))}
          </div>

        </section>

        <p className="mt-8 text-slate-700">
          Tu veux être le prochain témoignage ? <span className="font-semibold">Commence maintenant</span>
        </p>

        <div className="mt-6 flex gap-4">
          <ButtonPrimary>Contactez-nous</ButtonPrimary>
          <ButtonSecondary>Voir les formations</ButtonSecondary>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-extrabold">
          FAQ <span className="font-normal">- On répond franchement.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold">{f.q}</h3>

              {f.a === "list1" && (
                <div className="mt-2 text-slate-600">
                  <p>C'est simple : nous avons choisis WhatsApp pour plus de simplicité</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Tu appuies sur les boutons contactez-nous.</li>
                    <li>Tu seras redirigé sur notre page WhatsApp</li>
                    <li>Ensuite tu nous écris simplement et on démarre ensemble.</li>
                  </ul>
                </div>
              )}

              {f.a === "list2" && (
                <div className="mt-2 text-slate-600">
                  <p>On ne promet pas de miracles. Mais on t'aide vraiment :</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>à construire ton projet (emploi, stage, auto-entreprise)</li>
                    <li>à te connecter à notre réseau de partenaires</li>
                    <li>à préparer tes candidatures, entretiens, ou ton activité</li>
                  </ul>
                  <p className="mt-2">Plus de 70 % de nos anciens trouvent une solution après leur formation.</p>
                </div>
              )}

              {f.a !== "list1" && f.a !== "list2" && (
                <p className="mt-2 text-slate-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20" id="about">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto h-[380px] w-[320px]">
            <div className="absolute inset-0 rounded-t-full bg-amber-200" />
            <div className="absolute inset-x-6 inset-y-6 overflow-hidden rounded-t-full">
              <Image
                src="/muss-digital-formation-vision.svg"
                alt="Fondateur de MUSS Digital"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Pourquoi MUSS DIGITAL Formations existe :{" "}
              <span className="font-normal">
                L'histoire d'une reconversion, et d'une conviction.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>
                Il ne venait pas du monde du numérique. Mais il a décidé d'y entrer. Et d'y
                faire entrer les autres avec lui. Pendant longtemps, Assan a cru que le numérique,
                ce n'était pas pour lui.
              </p>
              <p>
                Pas d'école informatique. Pas d'ordinateur à la maison. Pas de réseau dans
                la tech. Juste une envie : changer de vie. Apprendre quelque chose de concret. Se
                rendre utile.
              </p>
              <p>
                Quand il a commencé à se former, souvent seul, souvent en ligne, parfois perdu, il a
                découvert autre chose : le numérique n'est pas un monde fermé. C'est une
                langue qu'on peut tous apprendre.
              </p>
              <p>
                Et surtout : ce qu'il a appris a changé sa vie et il a eu des opportunités
                qu'il n'aurait jamais pu penser avoir.
              </p>
              <p>
                Alors une idée est née. Une idée simple, mais puissante : Et si on ouvrait les portes
                du numérique à ceux qu'on oublie toujours ? C'est comme ça qu'est né
                MUSS DIGITAL
              </p>
            </div>
          </div>
        </div>


        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold">
              Notre mission : <span className="font-normal">transformer des trajectoires, pas seulement des CV.</span>
            </h3>
            <p className="mt-4 text-slate-600">
              Chez MUSS DIGITAL, on forme, oui. Mais surtout, on répare la confiance, on ouvre les
              yeux, on tend la main à ceux que le système ignore.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              <li>Pas besoin d'avoir un ordinateur à la maison.</li>
              <li>Pas besoin de tout comprendre dès le premier jour.</li>
              <li>Pas besoin d'avoir le bon profil.</li>
              <li>Il faut juste l'envie. Le reste, on le construit ensemble.</li>
            </ul>
            <p className="mt-2 text-slate-600">
              Il faut juste l'envie. Le reste, on le construit ensemble.
            </p>
            <div className="mt-6 flex gap-4">
              <ButtonPrimary>Contactez-nous</ButtonPrimary>
              <ButtonSecondary>Voir les formations</ButtonSecondary>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="text-xl font-bold">
              Notre vision : <span className="font-normal">un numérique qui ressemble à tout le monde.</span>
            </h3>
            <p className="mt-4 text-slate-600">
              Nous croyons qu'en Afrique, la tech ne doit plus être un mythe réservé
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              <li>aux centres urbains,</li>
              <li>aux diplômés d'élite ou</li>
              <li>aux anglophones.</li>
              <li>À ceux qui ont les moyens</li>
              <li>Elle doit être une chance réelle, locale, accessible.</li>
            </ul>
            <p className="mt-2 text-slate-600">
              Et elle peut devenir un levier puissant pour des milliers de vies si on donne les
              moyens à chacun d'y entrer.
            </p>
            <div className="mt-6 flex gap-4">
              <ButtonPrimary>Contactez-nous</ButtonPrimary>
              <ButtonSecondary>Voir les formations</ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Rejoignez notre communauté numérique
            </h2>
            <p className="mt-4 text-slate-600">
              Restez connecté avec MUSS Digital ! Suivez-nous sur nos réseaux sociaux pour
              découvrir nos dernières actualités, innovations technologiques et opportunités de
              collaboration.
            </p>
            <p className="mt-4 text-slate-600">
              Rejoignez notre communauté grandissante sur LinkedIn pour le networking
              professionnel, suivez-nous sur Facebook pour nos événements, et rejoignez notre
              groupe WhatsApp pour des échanges directs avec notre équipe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-sky-800 px-5 py-2.5 text-sm font-semibold text-white">
                <IconLinkedin className="h-4 w-4" /> LinkedIn
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">
                <IconFacebook className="h-4 w-4" /> Facebook
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white">
                <IconWhatsapp className="h-4 w-4" /> WhatsApp
                <IconArrow className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl">
            <Image
              src="/founder-1.webp"
              alt="Équipe MUSS Digital"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 sm:grid-cols-3">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${i === 1 ? "h-64 sm:col-span-1" : "h-48"}`}
            >
              <Image src={src} alt="Séance de formation MUSS Digital" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>


      <footer className="border-t border-slate-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4">
          <div>
            <Image src="/logo.svg" alt='logo de muss digit' width={70} height={70} />

            <p className="mt-4 max-w-xs text-sm text-slate-600">
              MUSS Digital : votre accès à un monde d'opportunités numériques{" "}
              <span className="text-blue-600 underline">illimitées.</span>
            </p>
          </div>

          <div>
            <h4 className="font-bold">MUSS Agence</h4>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Nos Services</a></li>
              <li><a href="#">Projets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">MUSS Formation</h4>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><a href="#">Formations</a></li>
              <li><a href="#">Avis</a></li>
              <li><a href="#">Notre Approche</a></li>
              <li><a href="#">A propos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Coordonnées</h4>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>Ngaoundere, Cameroun</li>
              <li>Tel : +237 656 49 61 06</li>
              <li>Email : contact@muss-digital.com</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-100 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <div className="flex gap-6">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of services</a>
            <span>2025. Tous droits reservés I MUSS Digital</span>
          </div>
          <div className="flex gap-4">
            <IconFacebook className="h-5 w-5 text-slate-900" />
            <IconLinkedin className="h-5 w-5 text-slate-900" />
          </div>
        </div>
      </footer>
    </main>
  );
}
