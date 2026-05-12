"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, Play, Star, ShoppingBag } from "lucide-react"
import { useCart } from "@/store/cart-store"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const { totalItems, toggleCart } = useCart()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
      aria-label="Sección principal Frutalkemy"
    >
      {/* Very subtle ambient drift lights */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-gold/5 blur-[120px] rounded-full" 
          style={{ 
            animation: 'ambient-drift 25s ease-in-out infinite alternate',
          }} 
        />
        <div 
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-terracotta/5 blur-[120px] rounded-full" 
          style={{ 
            animation: 'ambient-drift 30s ease-in-out infinite alternate-reverse',
            animationDelay: '-5s'
          }} 
        />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay z-[1]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Very sparse floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float-slow ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
              transform: `rotate(${i * 60}deg)`,
            }}
          >
            <svg width="25" height="38" viewBox="0 0 30 45" fill="none" className="text-gold/50">
              <ellipse cx="15" cy="22.5" rx="14" ry="21.5" stroke="currentColor" strokeWidth="1" />
              <path d="M15 4 Q20 22.5 15 41" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        ))}
      </div>

      {/* Header / Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 py-6 md:py-8">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between" aria-label="Navegación principal">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center">
                  <span className="font-display text-charcoal text-lg font-bold">F</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-gold to-terracotta rounded-full opacity-30 blur-sm -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl tracking-[0.3em] text-cream">
                  FRUTALKEMY
                </span>
                <span className="font-body text-[10px] tracking-[0.4em] text-gold/70">SPECIALTY COFFEE</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#tienda" className="group relative font-body text-sm text-cream/80 hover:text-cream transition-colors tracking-wider">
                TIENDA
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#proceso" className="group relative font-body text-sm text-cream/80 hover:text-cream transition-colors tracking-wider">
                PROCESO
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#origen" className="group relative font-body text-sm text-cream/80 hover:text-cream transition-colors tracking-wider">
                ORIGEN
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
              
              <div className="flex items-center gap-6">
                <button 
                  onClick={toggleCart}
                  className="relative text-cream/80 hover:text-gold transition-colors p-2"
                >
                  <ShoppingBag className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems()}
                  </span>
                </button>

                <a href="#tienda" className="relative overflow-hidden font-display text-sm tracking-wider text-charcoal bg-cream px-8 py-3 group shine-effect">
                  <span className="relative z-10 group-hover:text-cream transition-colors duration-300">COMPRAR</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-terracotta to-coral transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Hero Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-body text-cream/70 text-sm">Rated #1 Specialty Coffee</span>
            </div>

            {/* Main title with creative typography */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <span className="font-accent italic text-gold text-2xl md:text-3xl block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Descubre el arte de
                </span>
              </div>
              
              <div className="overflow-hidden">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-cream">FRUTAL</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-coral to-gold">KEMY</span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-cream/70 text-lg md:text-xl leading-relaxed max-w-lg">
              Donde la alquimia del fruto crea la taza perfecta. Café de especialidad 
              cultivado a 1,800m de altitud en las montañas de Colombia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#tienda" className="group relative font-display tracking-[0.15em] text-charcoal bg-gradient-to-r from-gold via-terracotta-light to-coral px-10 py-4 overflow-hidden shine-effect">
                <span className="relative z-10">EXPLORAR CAFÉS</span>
                <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="absolute inset-0 flex items-center justify-center font-display tracking-[0.15em] text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">EXPLORAR CAFÉS</span>
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="font-display text-3xl text-cream">+50</span>
                <p className="font-body text-cream/50 text-xs tracking-wider mt-1">AÑOS TRADICIÓN</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="font-display text-3xl text-gold">1,800m</span>
                <p className="font-body text-cream/50 text-xs tracking-wider mt-1">ALTITUD</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="font-display text-3xl text-coral">100%</span>
                <p className="font-body text-cream/50 text-xs tracking-wider mt-1">ORGÁNICO</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div 
            className="relative flex items-center justify-center lg:justify-end transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)` 
            }}
          >
            {/* Decorative circles */}
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-gold/5 animate-spin-slow" style={{ animationDuration: '40s' }} />
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-terracotta/10 animate-spin-slow" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
            
            {/* Central image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-gold/20 rounded-full blur-3xl animate-pulse-slow" />
              
              {/* Main circle with coffee image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-gold/20">
                <Image 
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
                  alt="Specialty Coffee"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>

              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 bg-gold/90 text-charcoal px-4 py-2 font-display text-xs tracking-wider animate-float-slow" style={{ animationDelay: '0s' }}>
                SINGLE ORIGIN
              </div>
              <div className="absolute -bottom-2 -left-4 bg-terracotta/90 text-cream px-4 py-2 font-display text-xs tracking-wider animate-float-slow" style={{ animationDelay: '1.5s' }}>
                HANDPICKED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a href="#tienda" className="flex flex-col items-center gap-2 group" aria-label="Ir a la tienda">
          <span className="font-body text-cream/40 text-[10px] tracking-[0.4em] group-hover:text-gold transition-colors">DESCUBRE MÁS</span>
          <ChevronDown className="w-4 h-4 text-cream/40 group-hover:text-gold transition-colors animate-bounce" />
        </a>
      </div>
    </section>
  )
}
