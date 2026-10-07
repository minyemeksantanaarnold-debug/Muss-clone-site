import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='bg-[#01814e]'>
      <div className="flex justify-between mt-5  rounded-2xl p-4 mx-10 bg-white">
      <Image src="/logo.svg" alt='logo de muss digit' width={70} height={70}/>
      <ul className='flex space-x-3'>
        <li>Formation</li>
        <li>Notre approche</li>
        <li>aAvis</li>
        <li>A propos</li>
        <li>Communaute</li>
      </ul>
      <button>Voir notre approche</button>
    </div>
    <div className='mt-10'>
      <div>
        <p className='py-5'>Nous t'accompagnons vers une carrière dans le numérique.</p>
        <h1 className='py-5 text-[2.125rem]'>Le numérique n'est <br /> pas réservé aux <br /> autres. Il est pour toi.</h1>
        <p className=''>Nous t’accompagnons vers une carrière dans le numérique. Même si <br /> tu n’as jamais touché un ordinateur.</p>
        <div className='flex space-x-1'>
          <button className='bg-green-400 rounded-2xl p-4'>Nous formations</button>
          <button className='bg-green-400 rounded-2xl p-4'>Contactez nous</button>
        </div>
      </div>
      <div className='flex'>
        <div>
      +150 <br />
      personnes formés avec <br /> accompagnement humain
        </div>
        <div>
          
8/10 <br />
Sont partis de zéro, sans expérience <br /> numérique
        </div>
      </div>
      <div></div>
    </div>
    </div>
    
  )
}
