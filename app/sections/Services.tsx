"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Lightbulb, Globe, TrendingUp } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Diseño",
    icon: Palette,
    description: "Diseño gráfico creativo que transmite la esencia de tu marca con impacto visual.",
    color: "from-[#8cc63f] to-[#6cb33f]",
  },
  {
    number: "02",
    title: "Branding",
    icon: Lightbulb,
    description: "Construimos identidades de marca únicas y memorables que conectan con tu audiencia.",
    color: "from-[#8cc63f] to-[#6cb33f]",
  },
  {
    number: "03",
    title: "Web",
    icon: Globe,
    description: "Desarrollo web moderno y responsive que convierte visitantes en clientes.",
    color: "from-[#8cc63f] to-[#6cb33f]",
  },
  {
    number: "04",
    title: "Mk Digital",
    icon: TrendingUp,
    description: "Estrategias de marketing digital que hacen crecer tu negocio online.",
    color: "from-[#8cc63f] to-[#6cb33f]",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros <span className="text-gradient">servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dar calidad es el mejor tipo de publicidad que existe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Number */}
                  <div className="text-6xl font-bold text-gray-100 mb-4">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span>Ver más</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Tus deseos son órdenes. En nuestra Agencia de Publicidad, estudiamos tu propuesta 
            y te asesoramos para que tu empresa llegue a lo más alto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

