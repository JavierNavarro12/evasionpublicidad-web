"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#8cc63f]">
              Evasión Publicidad
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Agencia de publicidad en Granada especializada en transformar ideas en campañas que hacen ¡booom!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--accent)] transition-all hover:scale-110"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--accent)] transition-all hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/branding" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/diseno" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Diseño
                </Link>
              </li>
              <li>
                <Link href="/web" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/marketing-digital" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Marketing Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/kit-digital" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Kit Digital
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  C/ Baza 16, parc. 3, oficina F<br />
                  18220 Albolote, Pol. Ind. Juncaril<br />
                  Granada, España
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <a href="tel:+34634775519" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                  634 77 55 19
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <a href="mailto:evadete@evasionpublicidad.es" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm">
                  evadete@evasionpublicidad.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-6">
              No te pierdas los últimos chafardeos publicitarios y cosas creativas que hacemos
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-[var(--primary)] focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Evasión Publicidad. Siempre con ❤️
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                Privacidad
              </Link>
              <Link href="/aviso-legal" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                Aviso Legal
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-8 text-center">
            <blockquote className="text-gray-500 italic text-sm max-w-3xl mx-auto">
              "Quien deja de invertir en publicidad para ahorrar dinero, es como si parara el reloj para ahorrar tiempo."
              <span className="block mt-2 font-semibold not-italic text-[var(--primary)]">— HENRY FORD</span>
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
}

