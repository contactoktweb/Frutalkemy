"use client"

import { useEffect, useRef } from "react"
import { Mountain, TreePine, Droplets, Sun, MapPin, Award } from "lucide-react"

const features = [
  { icon: Mountain, label: "1,800m Altitud", description: "Cultivado en las cumbres" },
  { icon: TreePine, label: "Sombra Natural", description: "Bajo arboles nativos" },
  { icon: Droplets, label: "Agua de Manantial", description: "Irrigacion pura" },
  { icon: Sun, label: "Clima Perfecto", description: "18-24C todo el ano" },
]

export function OriginSection() {
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
    <section
      id="origen"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Dramatic background with image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
          backgroundImage: `url('/images/cafe-montana.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-[#0D0D0D]/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />
        
        {/* Vertical accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-terracotta/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* Top section - Title */}
        <div className="text-center mb-20 fade-in-section">
          {/* Location badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-10">
            <MapPin className="w-4 h-4 text-terracotta" />
            <span className="font-body text-cream/80 text-sm tracking-[0.2em]">HUILA, COLOMBIA</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="font-body text-gold text-sm tracking-wider">SUDAMERICA</span>
          </div>

          {/* Creative title layout */}
          <div className="relative inline-block">
            <span className="font-accent italic text-terracotta text-3xl md:text-5xl block mb-4">
              Nacido en
            </span>
            
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl text-cream tracking-wider leading-none">
              RENACER
            </h2>
            
            {/* Decorative line through text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gold/50" />
            <span className="font-display text-2xl md:text-4xl text-gold tracking-[0.3em]">
              COFFEE PARADISE
            </span>
            <div className="w-16 h-0.5 bg-gold/50" />
          </div>
        </div>

        {/* Middle section - Split content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Image with frame */}
          <div className="fade-in-section relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Frame decoration */}
              <div className="absolute -inset-4 border border-gold/30" />
              <div className="absolute -inset-8 border border-gold/10" />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-terracotta" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-terracotta" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-terracotta" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-terracotta" />
              
              {/* Main image */}
              <div className="relative w-full h-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                  style={{
                  backgroundImage: `url('/images/cafe-origen.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-terracotta px-6 py-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cream" />
                  <span className="font-display text-cream text-sm tracking-wider">DESDE 1970</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text content */}
          <div className="fade-in-section space-y-8">
            <div>
              <span className="font-body text-terracotta text-sm tracking-[0.3em] mb-4 block">NUESTRA HISTORIA</span>
              <h3 className="font-display text-3xl md:text-4xl text-cream mb-6 leading-tight">
                Donde el cielo besa<br />
                <span className="text-gold">la tierra</span>
              </h3>
              <p className="font-body text-cream/70 text-lg leading-relaxed mb-4">
                En las montanas donde las nubes acarician los cafetales cada manana, 
                Renacer Coffee Paradise emerge como un santuario del cafe excepcional.
              </p>
              <p className="font-body text-cream/60 leading-relaxed">
                A 1,800 metros sobre el nivel del mar, donde la neblina matutina 
                envuelve cada planta, nace el grano que transformamos en oro liquido 
                con mas de 50 anos de tradicion familiar.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className="group p-4 bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-6 h-6 text-terracotta mb-3 group-hover:text-gold transition-colors" />
                  <p className="font-display text-cream text-sm tracking-wider">{feature.label}</p>
                  <p className="font-body text-cream/50 text-xs mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section - Large stats */}
        <div className="fade-in-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "1,800", unit: "m", label: "Altitud" },
              { value: "+50", unit: "", label: "Anos de Tradicion" },
              { value: "100", unit: "%", label: "Organico" },
              { value: "3", unit: "", label: "Generaciones" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group bg-[#0D0D0D] p-8 md:p-12 text-center hover:bg-white/5 transition-colors duration-500"
              >
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className={`font-display text-4xl md:text-6xl ${
                    index === 0 ? 'text-terracotta' :
                    index === 1 ? 'text-gold' :
                    index === 2 ? 'text-coral' :
                    'text-cream'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="font-display text-xl text-cream/50">{stat.unit}</span>
                </div>
                <p className="font-body text-cream/50 text-sm tracking-wider group-hover:text-cream/70 transition-colors">
                  {stat.label.toUpperCase()}
                </p>
                {/* Accent line */}
                <div className={`w-8 h-0.5 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  index === 0 ? 'bg-terracotta' :
                  index === 1 ? 'bg-gold' :
                  index === 2 ? 'bg-coral' :
                  'bg-cream'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
