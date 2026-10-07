import Image from 'next/image'

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
            <div className="relative h-70 w-full ">
                {imageTop ? (
                    <Image src={imageTop} alt={label} fill className="object-cover" />
                ) : (
                    children
                )}
            </div>

            <div className="flex flex-1 items-end justify-center p-3">
                <a
                    href={href}
                    className="w-full rounded-full bg-[#F5A623] px-3 py-2.5 text-center text-xs font-bold transition-colors hover:bg-[#e5951a] sm:text-sm"
                >
                    {label}
                </a>
            </div>
        </div>
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


           function QuickLinksSection() {
  return (
            <section className="relative bg-white py-6">
                <div className="absolute inset-x-0 top-0 h-[160px] bg-[#01814e]" />

                <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6">
                    <Card href={cards[0].href} label={cards[0].label}>
                        <div className="flex h-full w-full items-center justify-center">
                            <Image
                                src="/crayon-et-papier.webp"
                                alt="Formulaire de visite"
                                width={110}
                                height={110}
                                className="h-24 w-24 object-contain"
                            />
                        </div>
                    </Card>

                    <Card href={cards[1].href} label={cards[1].label} imageTop="/one-shot.webp" />

                    <Card href={cards[2].href} label={cards[2].label}>
                        <div className="flex h-full w-full items-center justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4CAF50] sm:h-28 sm:w-28">
                                <Image src='/whatsapp.webp' alt="linkedin" width={14} height={14} className="h-14 w-14 text-white sm:h-16 sm:w-16" />

                            </div>
                        </div>
                    </Card>

                    <Card href={cards[3].href} label={cards[3].label}>
                        <div className="flex h-full w-full items-center justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-md bg-[#0A66C2] sm:h-28 sm:w-28">
                                <Image src='/linkedin.webp' alt="linkedin" width={14} height={14} className="h-14 w-14 text-white sm:h-16 sm:w-16" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            );
}

export default function communaute() {
    function IconArrow({ className = "" }: { className?: string }) {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={className}>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    return (
        <div className='bg-[#01814e] static max-h-135'>
            <div className=" mx-auto flex max-w-7xl items-center justify-between rounded-xl bg-white px-6 py-3 shadow-sm">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt='logo de muss digit' width={70} height={70} />

                </div>

                <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
                    <a href='/#formation'>Formations</a>
                    <a href='/#approche'>Notre Approche</a>
                    <a href='/#avis'>Avis</a>
                    <a href='/#about' >A propos</a>
                    <a href='#communaute'>Communaute</a>
                </nav>

                <button className="hidden items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold md:inline-flex">
                    Voir notre agence
                    <IconArrow className="h-4 w-4" />
                </button>
            </div>

 
             <div className=" mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center ">
                <div className="text-white">
                    <h1 className="mt-6 text-4xl font-bold ml-100">
                        Rejoigner nortre communaute
                    </h1>
                    <h1 className='mt-6 text-4xl font-bold ml-120'>
                        dynamique et engagee
                    </h1>
                    <p className='ml-105'>Rejoignez-nous pour vivre des experiences enrichissantes et tisser des liens avec des</p>
                    <p className='ml-106'>personnes partageans les memes passions. Ensenmble, nous pouvons creer un nimpact</p>
                    <p className='ml-100'>positif et construire une communaute forte et solidaire. Ne manquez pas cette opportunite</p>
                    <p className='ml-140'>de faire de quelaue chose de grand!</p>
                </div>
            </div>
            <QuickLinksSection/>

            {/* <div className='relative flex max-w-7xl'>
                <div className='  bg-gray-200 ml-30 items-center justify-center min-w-70 rounded-3xl max-h-90'>

                    <div className='flex-1 flex   items-center justify-center bg-gray-100  rounded-3xl h-70'>
                        <Image src='/crayon-et-papier.webp' alt='bla' width={100} height={100} className=' h-40 w-40' />
                    </div>
                    <div className='bg-[#FF9730] w-65 ml-[11px] inline-flex items-center font-bold justify-center mt-8  rounded-xl p-2 shadow-xs'>
                        <button >Formulaire d'inscription</button>
                    </div>


                </div>

                <div className='  bg-gray-50 ml-30 items-center justify-center  max-w-75 rounded-3xl p-3'>

                    <div className='flex-1 flex   items-center justify-center bg-gray-100  rounded-3xl h-80'>
                        <Image src='/crayon-et-papier.webp' alt='bla' width={100} height={100} className=' w-40 lg:size-44 size-20 object-cover' />
                    </div>
                    <div className='bg-[#FF9730] w-full mt-5 inline-flex items-center font-bold justify-center py-3 rounded-xl p-2 shadow-xs'>
                        <button className=''>Formulaire d'inscription</button>
                    </div>
                


                </div>
                <div className='  bg-gray-50 ml-30 items-center justify-center  max-w-75 rounded-3xl p-3'>

                    <div className='flex-1 flex   items-center justify-center bg-gray-100  rounded-3xl h-80'>
                        <Image src='/crayon-et-papier.webp' alt='bla' width={100} height={100} className=' size-20 object-cover' />
                    </div>
                    <div className='bg-[#FF9730] w-full mt-5 inline-flex items-center font-bold justify-center py-3 rounded-xl p-2 shadow-xs'>
                        <button className=''>Formulaire d'inscription</button>
                    </div>
                


                </div>
                <div className='  bg-gray-200 ml-30 items-center justify-center min-w-70 rounded-3xl max-h-90'>

                    <div className='flex-1 flex   items-center justify-center bg-gray-100  rounded-3xl h-70'>
                        <Image src='/crayon-et-papier.webp' alt='bla' width={100} height={100} className=' h-40 w-40' />
                    </div>
                    <div className='bg-[#FF9730] w-65 ml-[11px] inline-flex items-center font-bold justify-center mt-8  rounded-xl p-2 shadow-xs'>
                        <button >Formulaire d'inscription</button>
                    </div>
                

 
                </div>
            </div>  */}

            <footer className="border-t border-slate-200">
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
//bg-[oklch(0.985_0.002_247.839)]