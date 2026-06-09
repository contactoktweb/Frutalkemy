"use client"

import { useRef } from "react"
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
      className="bg-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
            NUESTRA <span className="text-lime">GALERÍA</span>
          </h2>
          <p className="font-body text-navy/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Capturando la esencia de la alquimia cafetera en cada etapa de su viaje.
          </p>
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
              className={`group relative overflow-hidden rounded-none ${item.span} ${item.aspect} bg-navy`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-body text-[10px] tracking-[0.3em] text-lime uppercase mb-2 block">
                  {item.tag}
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="font-display text-xl md:text-2xl text-white tracking-wide font-black uppercase">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="mt-16 text-center">
          <a
            href="#tienda"
            className="inline-block bg-navy hover:bg-navy-light text-white font-display font-black text-sm tracking-widest px-10 py-4 rounded-none transition-all duration-300 transform hover:scale-105 uppercase"
          >
            Explorar Tienda
          </a>
        </div>
      </div>
    </section>
  )
}
