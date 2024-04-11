"use client";

import { useState } from 'react';
import Link from 'next/link'; // Assuming use of Next.js Link for routing

const Navbar4 = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);

  const toggleNavbar = () => {
    setNavIsOpened(navIsOpened => !navIsOpened);
  };

  return (
    <>
      {/* Overlay to close navbar */}
      <div
        aria-hidden={true}
        onClick={toggleNavbar}
        className={`${navIsOpened ? 'block' : 'hidden'} fixed inset-0 z-30 bg-base-200/50 lg:hidden`}
      />
      {/* Top bar for contact info and social media links */}
      <div className="bg-base-100 dark:bg-base-300 text-base-content">
        <div className="mx-auto lg:max-w-7xl w-full px-4 py-2 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a href="tel:6048689490" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m-6 8h6m-6-4h6m6 4v6m0 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0" />
              </svg>
              604.868.9490
            </a>
            <a href="mailto:brokerbrooke@brookeshelley.ca" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              brokerbrooke@brookeshelley.ca
            </a>
          </div>
          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            <a href="#facebook" className="link link-hover">FB</a>
            <a href="#twitter" className="link link-hover">TW</a>
            <a href="#linkedin" className="link link-hover">LI</a>
            <a href="#instagram" className="link link-hover">IG</a>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">BROKER BROOKE</a>
        </div>
        <div className="flex-none lg:hidden">
          <button onClick={toggleNavbar} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`flex-none ${navIsOpened ? 'block' : 'hidden'} lg:block`}>
          <ul className="menu menu-horizontal p-0">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Work</a></li>
            <li><a>Pricing</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar4;