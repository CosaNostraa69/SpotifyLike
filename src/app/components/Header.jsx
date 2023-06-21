import React from "react";
import Link from "next/link";
import LogoHeader from "./Logo.jsx";
import Image from "next/image.js";
import HomeImage from "../../../public/assets/icons8-home.svg";
import App from "./SearchInput.tsx";

export default function Header() {
  return (
    <header className="bg-black min-h-[10vh] flex items-center px-4 relative">
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 border-b border-white w-4/5  "></div>

      <div className="container mx-auto flex justify-between items-center font-mono font-bold">
        <div>
          <LogoHeader></LogoHeader>
        </div>

        <nav className="hidden md:flex space-x-4 gap-6">
         
            <Link
              href="/"
              className="flex items-center space-x-2 text-white text-lg tracking-wide py-2 hover:text-blue-500 hover:underline"
            >
              <Image src={HomeImage} alt="Home Icon" width="24" height="24" />
              <span>Home</span>
            </Link>
        
          <div>
            <App />
          </div>
        </nav>
        {/* Burger Icon (visible seulement sur les petits écrans) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="28"
              height="28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
