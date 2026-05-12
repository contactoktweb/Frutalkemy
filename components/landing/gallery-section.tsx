"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Camera, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    alt: "Recolección artesanal de cerezas de café",
    title: "LA COSECHA",
    tag: "Origen Huila",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto"
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
    alt: "Tostión de café de especialidad",
    title: "TOSTIÓN ALQUÍMICA",
    tag: "Proceso",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop",
    alt: "Espresso artesanal",
    title: "EL ESPRESSO",
    tag: "Final",
    span: "md:col-span-1 md:row-span-2",
    aspect: "aspect-[3/4] md:aspect-auto"
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    alt: "Café en las montañas",
    title: "MONTAÑAS SAGRADAS",
    tag: "1.800m",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
    alt: "Detalle de granos secos",
    title: "TEXTURAS",
    tag: "Natural",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-video md:aspect-auto"
  }
]

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="bg-charcoal py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-terracotta/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.4em] uppercase font-bold">Inspiración</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream tracking-tight leading-none mb-6">
              NUESTRA <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-terracotta to-coral">GALERÍA</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="font-body text-cream/50 text-lg max-w-sm ml-auto mb-8">
              Capturando la esencia de la alquimia cafetera en cada etapa de su viaje.
            </p>
          </div>
        </div>

        {/* Artistic Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 h-auto md:h-[900px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-sm ${item.span} ${item.aspect}`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.tag}
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="font-display text-xl md:text-2xl text-cream tracking-wide">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote & Link */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/5 pt-12">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
              <Camera className="w-5 h-5 text-gold" />
            </div>
            <p className="font-accent italic text-cream/70 text-xl md:text-2xl max-w-md">
              "La belleza está en el detalle del proceso"
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:block text-right">
              <span className="block font-display text-cream text-lg">FRUTALKEMY</span>
              <span className="block font-body text-cream/30 text-[10px] tracking-[0.2em]">© {new Date().getFullYear()}</span>
            </div>
            <a
              href="#tienda"
              className="group relative overflow-hidden font-display tracking-[0.2em] text-charcoal bg-white px-12 py-5 shine-effect"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">EXPLORAR TIENDA</span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
