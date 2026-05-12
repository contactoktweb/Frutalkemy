"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Droplets, Sun, Wind, Sparkles } from "lucide-react"

const processSteps = [
  {
    icon: Droplets,
    title: "Fermentacion",
    subtitle: "Anaerobica",
    description: "72 horas de fermentacion controlada con frutas locales de temporada",
    color: "coral",
    number: "01",
  },
  {
    icon: Sun,
    title: "Secado",
    subtitle: "Artesanal",
    description: "Secado lento en camas africanas preservando los aromas naturales",
    color: "gold",
    number: "02",
  },
  {
    icon: Wind,
    title: "Reposo",
    subtitle: "Perfecto",
    description: "30 dias de reposo para desarrollar la complejidad del sabor",
    color: "teal",
    number: "03",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="proceso" ref={sectionRef} className="bg-teal py-24 md:py-36 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-coral/20 rounded-full blur-3xl" />
      
      {/* Floating coffee beans decoration */}
      <div className="absolute top-32 left-[10%] w-8 h-12 bg-cream/10 rounded-full rotate-45 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-48 right-[15%] w-6 h-9 bg-terracotta/20 rounded-full -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-[20%] w-7 h-10 bg-gold/20 rounded-full rotate-30 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center gap-2 mb-6 bg-cream/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-body text-cream text-sm tracking-[0.3em] uppercase">
              Nuestro Proceso
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          <h2 className="relative inline-block">
            <span className="font-accent italic text-gold text-3xl md:text-5xl block mb-2">
              The Magic of
            </span>
            <span className="font-display text-6xl md:text-8xl lg:text-9xl text-cream tracking-wider drop-shadow-lg">
              ALCHEMY
            </span>
            {/* Underline decoration */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-coral" />
              <div className="w-4 h-4 border-2 border-gold rotate-45" />
              <div className="w-20 h-1 bg-gradient-to-l from-transparent via-coral to-gold" />
            </div>
          </h2>
        </div>

        {/* Process Steps - Creative Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24 fade-in-section">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className={`group relative p-8 bg-cream border-2 transition-all duration-500 hover:shadow-2xl stagger-${index + 1} ${
                step.color === 'coral' ? 'border-coral/40 hover:border-coral' :
                step.color === 'gold' ? 'border-gold/40 hover:border-gold' :
                'border-forest/40 hover:border-forest'
              }`}
            >
              {/* Large number background */}
              <span className={`absolute top-4 right-4 font-display text-8xl opacity-10 ${
                step.color === 'coral' ? 'text-coral' :
                step.color === 'gold' ? 'text-gold' :
                'text-forest'
              }`}>{step.number}</span>
              
              {/* Icon */}
              <div className={`relative w-20 h-20 mb-6 flex items-center justify-center transition-all duration-500 ${
                step.color === 'coral' ? 'bg-coral/10 text-coral group-hover:bg-coral group-hover:text-cream' :
                step.color === 'gold' ? 'bg-gold/10 text-gold-dark group-hover:bg-gold group-hover:text-charcoal' :
                'bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream'
              }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <step.icon className="w-9 h-9" />
              </div>
              
              <span className={`font-body text-sm tracking-[0.2em] uppercase ${
                step.color === 'coral' ? 'text-coral' :
                step.color === 'gold' ? 'text-gold-dark' :
                'text-forest'
              }`}>{step.subtitle}</span>
              
              <h3 className="font-display text-3xl text-charcoal tracking-wider mt-1 mb-4">{step.title}</h3>
              <p className="font-body text-charcoal/70 leading-relaxed">{step.description}</p>
              
              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                step.color === 'coral' ? 'bg-coral' :
                step.color === 'gold' ? 'bg-gold' :
                'bg-forest'
              }`} />
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="fade-in-section order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-gold/30" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-coral/30" />
              
              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/cafe-secado.jpg"
                  alt="Proceso artesanal de secado de café en camas africanas, Frutalkemy Colombia"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-coral px-6 py-4 text-cream shadow-xl">
                <span className="font-display text-3xl block">72h</span>
                <span className="font-body text-xs tracking-wider">FERMENTACION</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="fade-in-section order-1 lg:order-2">
            <span className="inline-block font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 border-b-2 border-gold pb-1">
              Artesania en cada grano
            </span>
            <h3 className="font-display text-5xl md:text-6xl text-cream tracking-wider mb-6 leading-tight">
              TRANS
              <span className="gradient-text">FORMACION</span>
              <br />EXCEPCIONAL
            </h3>
            <p className="font-body text-cream/90 text-lg leading-relaxed mb-6">
              En Frutalkemy, transformamos cada grano de cafe en una obra maestra sensorial. 
              Nuestro proceso de fermentacion experimental desbloquea sabores que desafian 
              las expectativas tradicionales.
            </p>
            <p className="font-body text-cream/80 text-lg leading-relaxed mb-8">
              Cada lote es tratado con una metodologia unica: fermentaciones anaerobicas 
              controladas, maceracion con frutas locales y un secado meticuloso.
            </p>
            
            {/* Feature list */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 text-cream font-body text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-cream rounded-full" /> Proceso Natural
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold-dark font-body text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold rounded-full" /> Sin Quimicos
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral/20 text-coral font-body text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-coral rounded-full" /> Artesanal
              </span>
            </div>
            
            <button className="shine-effect font-display tracking-[0.2em] text-charcoal bg-gold px-10 py-4 hover:bg-cream transition-all duration-300">
              CONOCER MAS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
