"use client"

import Link from 'next/link';
import { useState } from 'react';
export default function NavButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "JSON Formatter", href: "/" },
    { name: "JSON Difference Finder", href: "/diffFinder" },
    { name: "XML Formatter", href: "/XML" },
    { name: "XML Difference Finder", href: "/XMLDiff" },
    { name: "API tester", href: "/APItester" },
    { name: "base64Converter", href: "/base64" },
    { name: "About", href: "/about" },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="sm:hidden p-3"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
           <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 18h16"
            />
          </>
        )}
      </svg>
          </button>
          {/* <div className="flex items-center ml-2">
            <div className="w-8 h-8 bg-gray-200 mr-2"></div>
            <p className="font-bold text-gray-900">ACME</p>
          </div> */}
        </div>

       

      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-lg rounded ${
                    index === 2
                      ? "text-blue-500"                      
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </>
  );
}
