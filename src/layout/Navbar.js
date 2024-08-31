
'use client'
import { usePathname } from 'next/navigation'

import Link from 'next/link';
import NavButton from './Navbutton';
export default function Navbar() {

  const pathname = usePathname()
  console.log(pathname)
  const menuItems = [
    { name: "JSON Formatter", href: "/" },
    { name: "JSON Difference Finder", href: "/diffFinder" },
    { name: "XML Formatter", href: "/XML" },
    { name: "XML Difference Finder", href: "/XMLDiff" },
    { name: "base64Converter", href: "/base64" },
    { name: "About", href: "/about" },
  ];
  return (
    <nav className="bg-white border-b border-gray-200">
<NavButton/>
<div className="hidden sm:container sm:mx-auto sm:flex sm:items-center sm:justify-between p-4">

        <div className="hidden sm:flex space-x-8 items-center justify-start w-full">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} passHref
            className={`hover:text-blue-500 transition-colors duration-300 ${
                pathname === item.href
                  ? "text-blue-500"                 
                  : "text-gray-700"
              }`}
              >
                {item.name}
              
            </Link>
          ))}
        </div>

      </div>

    </nav>
  );
}
