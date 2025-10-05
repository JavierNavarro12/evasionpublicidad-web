"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Bichea", href: "/bichea" },
    { 
      name: "Demanda", 
      href: "#", 
      dropdown: [
        { name: "Branding", href: "/branding" },
        { name: "Diseño", href: "/diseno" },
        { name: "Web", href: "/web" },
        { name: "Marketing digital", href: "/marketing-digital" },
      ]
    },
    { name: "Evádete", href: "/evadete" },
    { name: "Curiosea", href: "/blog" },
    { name: "Kit digital", href: "/kit-digital" },
    { name: "Encuéntranos", href: "/contacto" },
  ];

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 ${isHome ? "z-20" : "z-[1000]"} bg-white h-20 md:h-24`}>
      {/* Logo posicionado absolutamente */}
      <Link href="/" className="absolute top-4 md:top-5 left-8 z-10">
        <Image 
          src="/images/logo.header.svg" 
          alt="Evasión Publicidad" 
          width={200}
          height={60}
          priority
          className="h-12 w-auto md:h-14"
        />
      </Link>

      {/* Iconos posicionados absolutamente */}
      <div className="absolute top-4 md:top-5 right-8 z-10 hidden md:flex items-center gap-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#8cc63f] transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#8cc63f] transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+34634775519"
              className="text-black hover:text-[#8cc63f] transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="text-black hover:text-[#8cc63f] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-4 right-8 text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl mt-2 py-6 px-6 md:px-12 animate-fade-in">
            <nav className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-black hover:text-[var(--primary)] transition-colors font-semibold text-lg py-2"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isServicesOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-gray-600 hover:text-[var(--primary)] transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-black hover:text-[var(--primary)] transition-colors font-semibold text-lg py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        )}
    </header>
  );
}

