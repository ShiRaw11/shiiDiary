import Navbar from '@/components/navBar';
import Image from 'next/image';
import hero from '..//..//assets/hero.png'
import { Lilita_One } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
const lilita = Lilita_One({weight:"400" , subsets :['latin']})
import Features from "../../components/features";
import HowItWorksSection from '@/components/howItWorks';
import DiaryFooter from '@/components/footer';
export default function LandingPage() {
    
  return (
    <>
      <Navbar />
      <div className="flex overflow-hidden  flex-col md:flex-row items-center justify-center h-screen w-full bg-gradient-to-r from-teal to-poppver text-white ">
      <div className='relative z-10'> 
      
  <div className="w-[500px] sm:h-[300px] flex justify-center h-[600px] "> 
    
    <Image
      src={hero}
      alt="Diary Image"
      className="object-cover h-ful w-full rounded-lg relative " 
    />
     <p className='pointer absolute bottom-2 left-4  text-[30px]'>🎇</p>
  </div>
  </div>



        
        <div className="ml-4 text-center md:text-left sm">
           
          <h1 className={`text-5xl font-bold mb-4 ${lilita.className}`}>Welcome to MyDiary🥰</h1>
          <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0">
            A safe space for your thoughts, memories, and moments. Start your journey today!
          </p>
          <div className='w-full flex justify-center'><Button  className='bg-popover w-[250px] h-[60px] mt-4  rounded-lg hover:bg-teal '><Link href={'/create-account'}>Get Started</Link></Button></div>
         
        </div>
      </div>
      
      <div className="w-[100%]">
        <section className="bg-transparent border border-white p-8 rounded-lg shadow-lg">
          <h2 className={`text-3xl text-white font-bold mb-4 ${lilita.className}`}>Why Keep a diary?</h2>
          <p className="text-gray-300">
            A diary is a personal space where you can reflect on your thoughts and feelings. 
            Writing daily helps to clear your mind, understand your emotions better, and track your growth over time.
          </p>

          <div className='w-full flex justify-center'><Button  className='bg-white text-primary w-[250px] h-[60px] mt-4 cursor rounded-lg hover:bg-secondary hover:text-popover '><Link href={'/create-account'}>Start Writing!</Link></Button></div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <Features />
</section>


        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
         <HowItWorksSection/>
        </section>
      </div>

<DiaryFooter/>
      
    </>
  );
}
