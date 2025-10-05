"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  
  const words = [
    "lo que te falta",
    "campañas", 
    "webs",
    "logotipos",
    "redes sociales"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // 3 segundos de visualización + 1 segundo de animación

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleScroll = () => {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      setIsAtTop(y <= 20); // por encima del header solo en el tope
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-visible bg-white pt-40 pb-20">

      <div className="container mx-auto px-12 md:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[1400px] mx-auto">
          {/* Contenido izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center min-h-[600px]"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-black leading-[0.95] mb-10">
                <span className="block text-[#8CC63F] mb-4">Somos</span>
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeInOut"
                    }}
                    className="block text-black absolute inset-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-16 text-black"
            >
              <span className="font-bold">por eso</span> <span className="font-normal text-3xl md:text-4xl lg:text-5xl">#evádeteycrea</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 60 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Link 
                href="/contacto"
                className="inline-block px-64 py-12 rounded-[50px] border border-[#8cc63f] text-[#8cc63f] font-light text-3xl hover:bg-[#8cc63f] hover:text-white transition-all duration-300 min-w-[300px] text-center"
              >
                ¿Te falta algo?
              </Link>
            </motion.div>
          </motion.div>

          {/* Contenido derecho - GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative pointer-events-none flex justify-center items-start lg:justify-end pr-0 lg:pr-12"
          >
            {/* GIF por encima del header */}
            <div className={`absolute top-[-100px] md:top-[-80px] right-[-150px] w-[600px] h-[600px] flex items-center justify-center ${isAtTop ? "z-[1200]" : "z-0"} pointer-events-none`}>
              <Image
                src="/images/gif-pagina-principal.gif"
                alt="Mockups móviles"
                width={600}
                height={600}
                className="w-auto h-auto max-w-full"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Botón de ayuda flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <button className="w-14 h-14 rounded-full bg-[#8cc63f] text-white flex items-center justify-center shadow-lg hover:bg-[#7ab52f] transition-colors">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}

