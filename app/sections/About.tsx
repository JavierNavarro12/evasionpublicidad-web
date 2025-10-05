"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative pt-32 md:pt-48 lg:pt-64 pb-32 md:pb-48 bg-white">
      <div className="container mx-auto px-12 md:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl lg:text-2xl font-black mb-16 text-black text-left mt-16 md:mt-24"
            style={{ marginLeft: '8rem' }}
          >
            Que no te engañen, los últimos JAMÁS serán los primeros... (sin publicidad)
          </motion.h2>

          {/* Contenido en dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 mt-8 md:mt-12">
            {/* Columna izquierda - Texto verde */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-start"
              style={{ paddingTop: '5rem', paddingLeft: '6rem' }}
            >
              <p className="text-[#8CC63F] text-lg md:text-xl lg:text-2xl font-medium leading-snug font-serif">
                La mejor publicidad es<br />
                la que hacen los<br />
                clientes satisfechos
              </p>
            </motion.div>

            {/* Columna derecha - Párrafo principal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-start"
              style={{ paddingTop: '4.5rem', marginLeft: '-16rem', marginRight: '-8rem', maxWidth: 'none' }}
            >
              <p className="text-black text-xl md:text-2xl leading-normal space-y-4">
                ¿Sabes que todavía hay empresas que piensan que la publicidad es un gasto del que pueden prescindir? Sí, las hay, pero tiene solución. ¿Sabes dónde está el error?
                <span className="block mt-4">
                  La publicidad es una <strong>inversión</strong>, no un gasto. No hay nada que invierta mejor en tu negocio que una <strong>súper campaña de marketing</strong> y ¿sabes qué? Que en eso <strong>somos los mejores</strong>.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Párrafos adicionales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12 mb-12"
            style={{ marginLeft: '-16rem', marginRight: '-8rem', maxWidth: 'none', paddingLeft: 'calc(50% + 1.5rem)' }}
          >
            <p className="text-black text-xl md:text-2xl leading-normal" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              En Evasión Publicidad, tratamos tus ideas con tanta pasión y con tanto love, que las terminamos transformando en la mejor arma para salir al mercado y hacer <strong>¡booom!</strong>
            </p>

            <p className="text-black text-xl md:text-2xl leading-normal" style={{ marginTop: '2rem' }}>
              ¿Y qué pasa si no tienes una idea concreta y no sabes por dónde empezar? Nuestro equipo de creativos, te presentará un proyecto que te va a dejar alucinando.
            </p>
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginTop: '4rem', marginLeft: '-18.5rem' }}
          >
            <Link
              href="/contacto"
              className="inline-block py-4 rounded-full border-2 border-[#8CC63F] text-[#8CC63F] font-medium text-xl hover:bg-[#8CC63F] hover:text-white transition-all duration-300"
              style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
            >
              Evádete
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
