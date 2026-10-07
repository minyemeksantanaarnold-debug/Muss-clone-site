"use client"

import Form from "@/components/Form";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


interface CommitmentCardProps {
  number: number;
  title: string;
  text: string;
}

function CommitmentCard({ number, title, text }: CommitmentCardProps) {
  return (
    <div className="w-full max-w-2xl rounded-2xl h-40 bg-[#152430] p-6">
      <h3 className="text-lg font-extrabold leading-snug text-white">
        {number}. {title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        {text}
      </p>
    </div>
  );
}

function CommitmentsSection() {
  return (
    <>
        <section className="  py-2">
            <div className="mx-auto flex max-w-2xl flex-col gap-4">
                <CommitmentCard
                number={1}
                title="On respecte les délais. Toujours."
                text="On ne vous laisse pas relancer quinze fois. Vous recevez ce qu'on vous a promis, à la date prévue. Et si quelque chose bouge, vous êtes informé tout de suite."
                />
            </div>
        </section>
        <section className="  py-2">
            <div className="bg-gray-300 text-black mx-auto flex max-w-2xl flex-col gap-4">
                <CommitmentCard
                number={2}
                title="Vous avez un vrai point de contact. Humain, réactif, clair."
                text="Chez nous, vous avez un responsable projet qui vous suit, vous répond, vous explique. Un vrai humain, pas un bot. Vous savez où en est votre projet, à tout moment."
                />
            </div>
        </section>
        <section className=" py-2">
            <div className="mx-auto flex max-w-2xl flex-col gap-4">
                <CommitmentCard
                number={3}
                title="Travailler avec nous, c’est aussi avoir de l’impact.Travailler avec nous, c’est aussi avoir de l’impact."
                text="Ce que vous payez finance aussi la formation de jeunes talents locaux. Votre projet sert votre entreprise, mais il change aussi des trajectoires de vie."
                />
            </div>
        </section>
    </>
    
  );
}





function ButtonPrimary({ children }: { children: React.ReactNode }) {
    return (
        <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-orange-400" >
            {children}
        </button>
    );
}

function ButtonSecondary({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
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

function IconWhatsapp({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2.5A9.5 9.5 0 0 0 3.8 17l-1.1 4.1 4.2-1.1A9.5 9.5 0 1 0 12 2.5Zm0 1.8a7.7 7.7 0 0 1 6.5 11.9l-.2.3.6 2.3-2.3-.6-.3.2A7.7 7.7 0 1 1 12 4.3Zm-3.1 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.1 1.8 2.9 4.5 4 2.2.9 2.7.7 3.2.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.6-1.6-.9-2.1-.2-.5-.4-.5-.6-.5h-.5Z" />
        </svg>
    );
}

function IconArrow({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconLinkedin({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
        </svg>
    );
}

function IconFacebook({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.3C15.9 4.2 15 4 14 4c-2.2 0-3.6 1.3-3.6 3.8v2.1H8v3h2.4V21h3.1Z" />
        </svg>
    );
}

export default function page() {
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

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", id);
        }
    };

    return (
        <div>
            {open && <Form onClose={() => setOpen(false)} />}
            <section className="relative overflow-hidden bg-[#172B36] pb-24 pt-6">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-20 bg-[url('/bg-pattern-white.png')] bg-repeat bg-[length:26px_26px]"
                />


                <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-xl bg-white px-6 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.svg" alt='logo de muss digit' width={70} height={70} />

                    </div>

                    <nav className="hidden gap-8 text-sm font-medium text-slate-700">
                        <a href='#services' onClick={(e) => scrollToSection(e, "#services")}>Nos services</a>
                        <a href='#realisations' onClick={(e) => scrollToSection(e, "#realisations")}>Nos realisations</a>
                        <a href='#approche' onClick={(e) => scrollToSection(e, "#approche")}>Notre approche</a>
                        <a href='#a-propos' onClick={(e) => scrollToSection(e, "#a-propos")}>A propos</a>
                        <a href='/communaute'>Communaute</a>
                    </nav>

                    <a href="/agence.muss.digital" className="hidden items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold md:inline-flex">Voir notre agence <IconArrow className="h-4 w-4" /></a>

                </div>

                <div className="relative mx-auto mt-26 grid max-w-8xl grid-cols-1 items-center gap-12">
                    <div className="text-white">
                        <span className="text-6xl ml-100"> Finis les prommesses floues</span>
                        <h1 className="font-[300px] text-6xl ml-90">
                            97% de nos clients reviennent    
                        </h1>
                        <span className="font-[300px] text-6xl ml-100">pour la qualite d'ecoute</span>
                        <p className="ml-120 text-[1rem] leading-8">ici on respect les delais, on communique clairement, et on contruit</p>
                        <p className="ml-130">avec la fierte, en afrique avec des talents et des experts</p>
                        <div className="mt-8 flex flex-wrap gap-4 ml-130 mb-30">
                            <ButtonPrimary>Nos service</ButtonPrimary>
                            <button className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-5 py-3 font-semibold text-slate-900 transition" onClick={() => setOpen(true)}>
                                        Travail ensemble
                                      </button>
                        </div>
                        <span className="ml-140">+4 PROJETS MENES AVEC SUCCES</span>

                        <div className="flex gap-12 ml-110">
                            <div className="text-white">
                                <Image src="/partenaire1.svg" alt="partenaire" height={100} width={100} className="w-35 h-35"/>
                            </div>
                            <div className="text-white">
                                <Image src="/partenaire1.svg" alt="partenaire" height={100} width={100} className="w-35 h-35"/>
                            </div>
                            <div className="text-white">
                                <Image src="/partenaire1.svg" alt="partenaire" height={100} width={100} className="w-35 h-35"/>
                            </div>
                            <div className="text-white">
                                <Image src="/partenaire1.svg" alt="partenaire" height={100} width={100} className="w-35 h-35"/>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </section>

            <section id="services" className="flex mt-40 max-w-7xl justify-center ml-20 mb-40">
                <div className="mx-15">
                    <h1 className="text-4xl font-bold">Ce que nous faisons <br />différemment et pourquoi ça <br /> compte.</h1>
                    <p className="mt-10 mb-20 leading-[1.6rem] font-[16px]">Chez MUSS Digital, on connaît les réalités du secteur : déceptions, <br /> les projets en retard, les prestataires injoignables, les devis flous, <br /> les livrables qui ne ressemblent pas à ce qu’on vous avait montré au <br /> début. On a décidé de faire l’opposé. Point par point.</p>
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-5 py-3 font-semibold text-slate-900 transition" onClick={() => setOpen(true)}>
                                Contactez nous
                              </button>
                </div>
                <div>
                    <CommitmentsSection/>
                </div>
            </section>
            <section id="realisations" className="mb-20">
                <div className="ml-40">
                    <h1 className="text-4xl mb-5 font-bold">Des services Adaptes</h1>
                    <p className="mb-15 font-normal">
                        On en prend pas des "prestation". On construit des solutions utiles, <br /> 
                        bien pensees, bien executees avec des equipes formees <br />
                        impliquees, et a l'ecoute.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ml-40 mr-20 ">
                    <div className="bg-[#FAFAF8] rounded-3xl p-2 w-[620px] h-[368px]">
                        <Image src="/desktop.svg" alt="desktop" width={60} height={60} className="bg-[#F0F0EF] p-2 rounded-md mt-3 ml-3 mb-6"/>
                        <h2 className="text-xl font-bold mb-3">Developpement web et mobile</h2>
                        <p className="mb-5">Vous avez une idée ? On la transforme en outil utile, beau et fonctionnel. On ne code pas dans notre coin. On avance avec vous, pour créer quelque chose qui marche… et qui vous ressemble.</p>
                        <div className="flex justify-start items-center flex-wrap">
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Application web personnalite</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Site internet</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Application mobile (Android/iOS)</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Site e-commerce</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Intégration de solutions tierces (paiement, formulaire, CRM)</span>
                        </div>
                                
                        <button className="cursor-pointer ml-108 font-semibold mt-3"> Travaillons ensemble</button>
                        
                    </div>
                    <div className=" bg-[#FAFAF8] rounded-3xl p-4 w-[620px] h-[368px]">
                        <Image src="/ux-ui.svg" alt="desktop" width={60} height={60} className="bg-[#F0F0EF] p-2 rounded-md"/>
                        <h2>Developpement web et mobile</h2>
                        <p>Vous avez une idée ? On la transforme en outil utile, beau et fonctionnel. On ne code pas dans notre coin. On avance avec vous, pour créer quelque chose qui marche… et qui vous ressemble.</p>
                        <div className="flex justify-start items-center mt-7 flex-wrap">
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Maquettes web & mobile</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Site internet</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Landing page</span>
                        </div>
                        <button className="cursor-pointer ml-105 mt-22 font-semibold"> Travaillons ensemble</button>

                    </div>
                    <div className=" bg-[#FAFAF8] rounded-3xl p-4  w-[620px] h-[368px]">
                        <Image src="/brand.svg" alt="desktop" width={60} height={60} className="bg-[#F0F0EF] p-2 rounded-md"/>
                        <h2>Developpement web et mobile</h2>
                        <p>Vous avez une idée ? On la transforme en outil utile, beau et fonctionnel. On ne code pas dans notre coin. On avance avec vous, pour créer quelque chose qui marche… et qui vous ressemble.</p>
                        <div className="flex justify-start items-center flex-wrap mt-8">
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Création ou refonte de logo</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Charte graphique complète</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Kit visuel pour réseaux sociaux</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Guide de ton éditorial</span>
                        </div>
                        <button className="cursor-pointer ml-105 mt-10 font-semibold"> Travaillons ensemble</button>
                    </div>
                    <div className=" bg-[#FAFAF8] rounded-3xl p-4 w-[620px] h-[368px]">
                        <Image src="/grow.svg" alt="desktop" width={60} height={60} className="bg-[#F0F0EF] p-2 rounded-md"/>
                        <h2>Developpement web et mobile</h2>
                        <p>Vous avez une idée ? On la transforme en outil utile, beau et fonctionnel. On ne code pas dans notre coin. On avance avec vous, pour créer quelque chose qui marche… et qui vous ressemble.</p>
                        <div className="flex justify-start items-center flex-wrap mt-8 mb-2">
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Marketing Digita</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Communication</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Audit digital de votre activité</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Déploiement de solutions VPN (Réseaux Privés Virtuels)</span>
                            <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Installation et configuration de réseaux informatiques</span>
                        </div>
                        <button className="cursor-pointer ml-105  font-semibold"> Travaillons ensemble</button>
                    </div>
                </div>
                
            </section>
            <section id="realisations">
                <div className="grid grid-cols-3 px-30">
                    <div className="ml-0 w-[440px] h-[540px]">
                    <Image src="/site-vitrine.svg" alt="Site vitrine" width={440} height={540} className="w-110 h-130 rounded-2xl "/>
                        <div className="ml-4 max-w-100">
                            <p>Site vitrine</p>
                            <h1 className="text-[1.25rem] leading-[1.35rem] font-bold">Site pro pour marque artisanale</h1>
                            <p className="text-[1rem] font-[20px] leading-[1.6rem]">Un site moderne pour valoriser les produits d’une marque de soins faits main.</p>
                            <p className="font-[16] leading-[1.6rem]">Objectif:  Inspirer confiance, faciliter les commandes et affirmer une image de qualité.</p>
                            <div className="flex justify-start items-center flex-wrap mt-8 mb-2 max-w-110">
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Developpement frontend</span>
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Redaction simple</span>
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">UI/UX design</span>
                            </div>
                
                        </div>
                    </div>

                    <div className=" w-[440px] h-[540px]">
                    <Image src="/mobile-application.svg" alt="Site vitrine" width={440} height={540} className="w-110 h-130 rounded-2xl "/>
                        <div className="ml-1">
                            <p>Site vitrine</p>
                            <h1 className="text-[1.25rem] leading-[1.35rem] font-bold">Site pro pour marque artisanale</h1>
                            <p className="text-[1rem] font-[20px] leading-[1.6rem]">Un site moderne pour valoriser les produits d’une marque de soins faits main.</p>
                            <p className="font-[16] leading-[1.6rem]">Objectif:  Inspirer confiance, faciliter les commandes et affirmer une image de qualité.</p>
                            <div className="flex justify-start items-center flex-wrap mt-8 mb-2 max-w-110">
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Developpement frontend</span>
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Redaction simple</span>
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">UI/UX design</span>
                            </div>
                
                        </div>
                    </div>
                    
                    <div className="ml-5 w-[440px] h-[540px]">
                    <Image src="/mobile-application.svg" alt="Site vitrine" width={440} height={540} className="w-110 h-130 rounded-2xl "/>
                        <div className="ml-1">
                            <p>Site vitrine</p>
                            <h1 className="text-[1.25rem] leading-[1.35rem] font-bold">Site pro pour marque artisanale</h1>
                            <p className="text-[1rem] font-[20px] leading-[1.6rem]">Un site moderne pour valoriser les produits d’une marque de soins faits main.</p>
                            <p className="font-[16] leading-[1.6rem]">Objectif:  Inspirer confiance, faciliter les commandes et affirmer une image de qualité.</p>
                            <div className="flex justify-start items-center flex-wrap mt-8 mb-2 max-w-110">
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Developpement frontend</span>
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">Redaction simple</span>
                                <span className="rounded-full font-[14px] border p-1 mx-1 my-1">UI/UX design</span>
                            </div>
                
                        </div>
                    </div>


                    
                </div>
                
                <Image src="/notre-approche.webp" alt="notre aproche" width={100} height={100} className="w-300 h-120 mt-80 ml-40 mb-20 rounded-2xl"/>
            </section>
            <section id="approche" className="flex justify-center space-x-38">
                <div>
                    <h1 className="text-2xl font-black mb-10">On gere votre projet avec <br /> methode, clarte et respect.</h1>
                    <p>Chez MUSS Digital, on ne lance pas un projet à la va-vite. On vous <br />
                     écoute, on vous guide, et on livre avec rigueur, toujours dans les <br />
                      délais annoncés. Voici comment on travaille, étape par étape :
                    </p>
                    
                    <button className="bg-amber-500 p-2 rounded-2xl mt-10" onClick={() => setOpen(true)}>
                        Travaillons ensemble
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className="font-black">1. On vous ecoute (vraiment)</h1>
                    <p>Tout commence par un échange humain. On prend le temps de comprendre :</p>
                    <ul className="list-disc ml-10">
                        <li>ce que vous voulez faire,</li>
                        <li>ce dont vous avez besoin (même si vous ne le formulez pas encore bien),</li>
                        <li>vos contraintes et vos objectifs.</li>
                    </ul>
                    <p>Pas de solutions toutes faites. On part de vous.</p>
                    </div>

                    <div>
                        <h1 className="font-black">2. Vous recevrez</h1>
                    <p>Vous recevrez:</p>
                    <ul className="list-disc ml-10">
                        <li>un devis transparent (pas de lignes floues),</li>
                        <li>un planning avec des étapes précises,</li>
                        <li>un interlocuteur dédié qui vous suit tout au long du projet.</li>
                    </ul>
                    <p>Vous savez où vous allez et avec qui.</p>
                    </div>
                    



                    

                    <div>
                        <h1 className="font-black"> 3. On construit ensemble, étape par étape</h1>
                       <p>Design, contenu, développement, ajustements… On vous montre l’avancement à <br /> 
                       chaque phase, vous validez, on avance. Vous êtes impliqué sans être noyé. On <br />
                       reste réactifs, clairs et disponibles. Pas de surprises. Pas de silence radio.</p>
                    </div>
                    <div>
                        <h1 className="font-black">4. On teste, on vérifie, on vous forme</h1>
                        <p>Avant de livrer, on s’assure que tout fonctionne parfaitement. Et si besoin, on vous <br />
                         montre comment gérer votre site, vos outils, vos contenus simplement.</p>
                    </div>

                    <div>
                        <h1 className="font-black">5. On reste là, même après la livraison</h1>
                        <p>Besoin d’un ajustement, d’un conseil ou d’une mise à jour ?<br />
                            On ne disparaît pas. On reste votre équipe, même après la fin du projet. On <br /> 
                            construit une relation. Pas une transaction.
                        </p>
                    </div>
                </div>
            </section>
            <section id="a-propos" className="">
                <div className="flex justify-center mt-20 space-x-20">
                    <Image src="/a-propos.webp" alt="a-propos" width={100} height={100} className="w-130 h-150"/>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">Travailler avec nous, c’est avoir un <br />
                        impact bien plus grand que votre <br />
                        projet.
                        </h1>
                        <p>
                            Votre argent ne finance pas un bureau lointain ou un prestataire anonyme. Il <br />
                            permet de former, encadrer et faire grandir des talents locaux.
                        </p>
                        <div className="shadow-2xl bg-gray-300 p-10 rounded-2xl w-140">
                            <p>1. Un jeune sans emploi apprend à créer des sites.</p>
                            <p>2. Une femme en reconversion découvre les outils du numérique.</p>
                            <p>3. Un formateur local est rémunéré pour transmettre..</p>
                        </div>
                        <p>Vous ne financez pas que votre projet.</p>
                        <p>Vous financez de l’autonomie, de la dignité et une économie locale qui se renforce <br />
                        de l’intérieur.
                            </p>
                            <p>Votre produit est livré. Mais vous avez aussi aidé quelqu’un à se relever. <b>C’est ça, MUSS Digital.</b> </p>
                    </div>
                </div>
                <div>
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold">
              Notre mission : <span className="font-normal">transformer des trajectoires, pas seulement des CV.</span>
            </h3>
            <p className="mt-2 text-slate-600">
             Une Afrique qui ne consomme plus uniquement la technologie des autres, mais qui la crée, la pense et l’adapte.
            </p>
            <div className="mt-6 flex gap-4">
              <ButtonPrimary >Contactez-nous</ButtonPrimary>
              <ButtonSecondary>Voir les formations</ButtonSecondary>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="text-xl font-bold">
              Notre vision : <span className="font-normal">un numérique qui ressemble à tout le monde.</span>
            </h3>
            
            <p className="mt-2 text-slate-600">
              Réconcilier l’Afrique avec sa capacité à apprendre et innover par le numérique.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border p-3 bg-amber font-semibold text-slate-900 transition" onClick={() => setOpen(true)}>
                    Contactez nous
                </button>
              <ButtonSecondary>Voir les formations</ButtonSecondary>
            </div>
          </div>
        </div>
                </div>
                
            </section>
            <footer className="border-b border-slate-200">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4">
                      <div>
                        <Image src="/logo.svg" alt='logo de muss digit' width={70} height={70} />
            
                        <p className="mt-4 max-w-xs text-sm text-slate-600">
                          MUSS Digital : votre accès à un monde d&apos;opportunités numériques{" "}
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
                  
        </div>
    )
}


//section services

type RealisationeProps ={
    image: string;
    style: string;
    title: string;
    description: string;
    objectif: string;
}

//COMPOSANT MM MM

const Card = ({image,style,title,objectif,description}: RealisationeProps) =>{
    return(
        <>
            <div className="justify-center items-center ">
                <Image src={image} alt={title} width={100} height={100} className="w-160 h-130 rounded-2xl"/>
                <div className="ml-1">
                    <p>
                        {style}
                    </p>
                <h1 className="text-[1.25rem] leading-[1.35rem] font-bold">{title}</h1>
                <p className="text-[1rem] font-[20px] leading-[1.6rem]">{description}</p>
                <p className="font-[16] leading-[1.6rem]">Objectif: {objectif}</p>
                </div>
                    
            </div>
        
        </>
    )
}

//first composant

