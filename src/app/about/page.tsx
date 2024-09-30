import Image from 'next/image';
import aboutImage from '../../assets/logo.png'

import { Lilita_One } from 'next/font/google';
import Navbar from '@/components/navBar';
const lilita = Lilita_One({weight:"400" , subsets :['latin']})
const About = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-teal">
        <Navbar/>
      <div className="flex flex-col md:flex-row items-center mb-10 pt-20">
        <div className="md:w-2/3 md:pr-8">
          <h1 className={`text-5xl font-bold mb-4 text-popover  flex justify-center ${lilita.className}`}>About MyDiary</h1>
          <p className="mt-4 text-white">
            MyDiary is your private space to express yourself. Whether it's daily thoughts, reflections, or creative writing, MyDiary provides a safe and secure environment for your entries.
          </p>
        </div>
        <div className="w-[100px] h-[200px] md:w-1/3 ml-8  justify-center mt-4 md:mt-0">
          <Image src={aboutImage} alt="About MyDiary" className="rounded-lg shadow-lg " />
        </div>
      </div>
    </div>
  );
};

export default About;
