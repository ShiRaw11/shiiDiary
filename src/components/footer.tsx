import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter,FaInstagram  } from "react-icons/fa";


function DiaryFooter() {
  return (
    <div className="w-[100%] text-white py-8">

    <div className="flex mx-auto justify-around ">

      <div className="ml-4 ">
      <Image src={logo} alt="logo" className="w-8 h-8 " />
        <h3 className="text-lg font-semibold mb-2">MyDiary</h3>
        <p className="text-sm">&copy; {new Date().getFullYear()} My Diary. All rights reserved.</p>
      </div>
     


      <div className='flex flex-col'>
      <div className="flex space-x-4 ">
        <Link href="#" className="text-gray-400  hover:text-white transition duration-300 text-sm">Privacy Policy</Link>
        <Link href="#" className="text-gray-400  hover:text-white transition duration-300 text-sm">Terms of Service</Link>
        <Link href="#" className="text-gray-400  hover:text-white transition duration-300 text-sm">Contact</Link>
      </div>
   
    
    <div className="flex mt-8 justify-center mt-4 space-x-10">
      <Link href="#" className="text-white hover:text-teal transition duration-300">
        <FaFacebook/>
      </Link>
      <Link href="#" className="text-white hover:text-teal transition duration-300">
      <FaTwitter />

      </Link>
      <Link href="#" className="text-white hover:text-teal transition duration-300">
      <FaInstagram />

      </Link>
    </div>

      </div>
       </div>

</div>

  )
}

export default DiaryFooter