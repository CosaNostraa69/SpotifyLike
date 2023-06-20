import React from "react";
import Link from "next/link";
import LogoHeader from ".//Logo.jsx";
import Image from "next/image.js";
import HomeImage from "../../../public/assets/icons8-home.svg";
import App from "./SearchInput.tsx";


export default function Header() {
  return (
    <header className="bg-black min-h-[10vh] flex items-center px-4">
      <div className="container mx-auto flex justify-between items-center font-mono font-bold">
        <div>
          <LogoHeader></LogoHeader>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link href="/">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white text-lg tracking-wide py-2 hover:bg-red-700"
            >
              <Image src={HomeImage} alt="Home Icon" width="24" height="24" />
              <span>Home</span>
            </Link>
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
