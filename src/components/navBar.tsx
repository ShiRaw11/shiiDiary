'use client'
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"; 
import logo from "../assets/logo.png";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; 
export default function Navbar({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList
        className={` bg-popover fixed top-0 left-0 right-0 flex items-center justify-between text-white h-[90px] px-10 ${className}`}
      >
        <div className="flex items-center h-full">
          <Image src={logo} alt="logo" className="w-8 h-8" />
        </div>

        {/* For large screens */}
        <div className="hidden md:flex space-x-4 w-[400px] justify-between items-center h-full">
          <NavigationMenuItem>
            <NavigationMenuLink href="/appError" className="hover:text-teal-300">
              Download App
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="hover:text-teal">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className="bg-transparent border border-white text-teal hover:bg-teal hover:text-white transition duration-200 px-4 py-2 rounded h-full flex items-center"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/create-account"
              className="bg-teal text-white hover:bg-white hover:text-popover transition duration-200 px-4 py-2 rounded h-full flex items-center"
            >
              Get Started
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

       
        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer}>
            {isOpen ? (
              <FiX className="w-8 h-8 text-white" /> // Close (X) icon
            ) : (
              <FiMenu className="w-8 h-8 text-white" /> // Hamburger (Menu) icon
            )}
          </button>
        </div>
      </NavigationMenuList>

     
      <NavigationMenuList
        className={`md:hidden fixed top-0 left-0 bg-popover h-[350px] transition-all duration-300 rounded-lg ${
          isOpen ? "w-[40%]" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-start gap-4 space-y-4 p-4 pt-4 ">
          <NavigationMenuItem>
            <NavigationMenuLink href="/appError" className="hover:text-teal-300">
              Download App
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="hover:text-teal-300">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className="bg-transparent border border-white cursor text-teal hover:bg-teal hover:text-white transition duration-200 px-4 py-2 rounded"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/create-account"
              className="bg-teal text-white hover:bg-white hover:text-popover transition duration-200 px-4 py-2 rounded"
            >
              Get Started
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

