"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, Play, Star, ShoppingBag } from "lucide-react"
import { useCart } from "@/store/cart-store"

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { totalItems, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-navy"
      aria-label="Sección principal Frutalkemy"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
          alt="Coffee Beans Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
      </div>

      {/* Header / Nav */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-navy/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" 
          : "bg-navy/80 py-5"
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-white">
                FRUTALKEMY
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#tienda" className="font-body text-xs font-bold text-white hover:text-lime transition-colors tracking-widest uppercase">Tienda</a>
              <a href="#proceso" className="font-body text-xs font-bold text-white hover:text-lime transition-colors tracking-widest uppercase">Proceso</a>
              <a href="#origen" className="font-body text-xs font-bold text-white hover:text-lime transition-colors tracking-widest uppercase">Origen</a>
              <a href="#" className="font-body text-xs font-bold text-white hover:text-lime transition-colors tracking-widest uppercase">Nosotros</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleCart}
                className="relative text-white hover:text-lime transition-colors p-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-lime text-navy text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems()}
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Content - Centralized */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
            EL MEJOR CAFÉ VERDE DE COLOMBIA <br />
            <span className="text-lime">PARA EL MUNDO</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            Seleccionamos los granos más finos de las montañas colombianas. 
            Frescura y calidad garantizada en cada entrega.
          </p>

          <div className="pt-6">
            <a 
              href="#tienda" 
              className="inline-block bg-lime hover:bg-lime-dark text-navy font-display font-black text-sm tracking-widest px-10 py-4 rounded-none transition-all duration-300 transform hover:scale-105 uppercase"
            >
              Ir a la tienda
            </a>
          </div>
        </div>
      </div>

      {/* Dots Indicator (Aesthetic) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </section>
  )
}

