"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ShoppingBag, Star, Truck, Shield, Coffee, Eye } from "lucide-react"
import { useCart } from "@/store/cart-store"
import { ProductModal } from "./product-modal"
import { CartSidebar } from "./cart-sidebar"

interface Product {
  id: number
  name: string
  process: string
  price: string
  rating: number
  notes: string[]
  image: string
  accentColor: string
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Muestra Honey",
    process: "Proceso Honey Natural",
    price: "$24.00",
    rating: 4.9,
    notes: ["Miel", "Durazno", "Caramelo"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
    accentColor: "gold",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Muestra Lavado",
    process: "Proceso Lavado",
    price: "$22.00",
    rating: 4.8,
    notes: ["Cítricos", "Jazmín", "Chocolate"],
    image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop",
    accentColor: "teal",
  },
  {
    id: 3,
    name: "Muestra Anaeróbico",
    process: "Fermentación Anaerobia",
    price: "$28.00",
    rating: 5.0,
    notes: ["Frutos rojos", "Vino", "Especias"],
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
    accentColor: "coral",
    badge: "PREMIUM",
  },
]

function ProductCard({ 
  product, 
  onViewDetails,
  onAddToCart
}: { 
  product: Product; 
  onViewDetails: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}) {
  const colorClasses = {
    gold: {
      bg: 'bg-gold/5',
      text: 'text-gold-dark',
      accent: 'bg-gold',
      hover: 'hover:bg-gold',
      border: 'border-gold',
    },
    teal: {
      bg: 'bg-teal/5',
      text: 'text-teal',
      accent: 'bg-teal',
      hover: 'hover:bg-teal',
      border: 'border-teal',
    },
    coral: {
      bg: 'bg-coral/5',
      text: 'text-coral',
      accent: 'bg-coral',
      hover: 'hover:bg-coral',
      border: 'border-coral',
    },
  }

  const colors = colorClasses[product.accentColor as keyof typeof colorClasses]

  return (
    <div className="product-card group bg-white border border-charcoal/5 hover:border-charcoal/20 transition-all duration-300 h-full">
      {/* Product Image - Square */}
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-4 left-4 ${colors.accent} px-3 py-1.5 text-cream z-10`}>
            <span className="font-display text-[10px] tracking-widest uppercase">{product.badge}</span>
          </div>
        )}
        
        {/* Quick View Button */}
        <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gold hover:text-cream transition-colors">
          <Eye className="w-4 h-4" />
        </div>
        
        {/* Simple Add to Cart Overlay */}
        <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="bg-cream text-charcoal font-display text-xs tracking-widest px-8 py-3 hover:bg-gold hover:text-cream transition-colors duration-300"
          >
            AÑADIR AL CARRITO
          </button>
        </div>
      </div>

      {/* Product Info - Simplified */}
      <div className="p-6 text-center">
        <h3 className="font-display text-xl text-charcoal tracking-wider mb-2">
          {product.name}
        </h3>
        
        <div className="flex flex-col items-center gap-1">
          <p className="font-display text-2xl text-charcoal">{product.price}</p>
          <span className="font-body text-[10px] tracking-[0.2em] text-charcoal/40 uppercase">CAFÉ DE ESPECIALIDAD</span>
        </div>
        
        {/* Mobile/Visible Add to Cart */}
        <button 
          onClick={() => onAddToCart(product)}
          className="mt-6 w-full py-4 border border-charcoal/10 font-display text-[10px] tracking-[0.2em] hover:bg-charcoal hover:text-cream transition-colors duration-300 md:hidden"
        >
          AÑADIR AL CARRITO
        </button>
      </div>
    </div>
  )
}

export function ShopSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addItem, totalItems, toggleCart } = useCart()

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

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image,
      description: product.process,
      weight: "250g"
    })
    toggleCart()
  }

  return (
    <section id="tienda" ref={sectionRef} className="bg-cream pb-20 md:pb-24 relative overflow-hidden pt-0">
      {/* Visual banner strip with image - Moved to TOP to avoid spacing issues */}
      <div className="relative w-full h-56 md:h-80 mb-[-1px] overflow-hidden">
        <Image
          src="/images/cafe-montana.jpg"
          alt="Paisaje de las montañas cafeteras colombianas"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="font-accent italic text-cream/90 text-3xl md:text-5xl drop-shadow-lg">Directo de</span>
            <h2 className="font-display text-cream text-4xl md:text-7xl tracking-wider drop-shadow-2xl">LAS MONTAÑAS</h2>
          </div>
        </div>
      </div>

      {/* Modals - Rendered after banner */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <div className="container mx-auto px-6 relative pt-12 z-10">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/50 px-6 py-2 rounded-full border border-charcoal/5">
            <Coffee className="w-6 h-6 text-coral" />
            <span className="font-body text-coral text-sm tracking-[0.3em] uppercase font-bold">
              Nuestra Colección
            </span>
            <Coffee className="w-6 h-6 text-coral" />
          </div>
          <h2 className="relative inline-block">
            <span className="font-accent italic text-teal text-3xl md:text-5xl block mb-2">
              Taste
            </span>
            <span className="font-display text-6xl md:text-8xl lg:text-9xl text-charcoal tracking-wider">
              THE EXPERIENCE
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8 mb-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-coral to-gold" />
            <div className="w-3 h-3 bg-coral rotate-45" />
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-gold to-coral" />
          </div>
          <p className="font-body text-charcoal/70 text-lg max-w-xl mx-auto">
            Descubre nuestra colección de muestras exclusivas, cada una un viaje sensorial único 
            que cuenta la historia de nuestras montañas.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-end gap-4 mb-6 pr-4 fade-in-section">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-gold hover:text-cream hover:border-gold transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-coral hover:text-cream hover:border-coral transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Products Carousel */}
        <div className="relative fade-in-section -mx-6 px-6 pb-12">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div key={product.id} className={`stagger-${index + 1} min-w-[320px] md:min-w-[400px] snap-center`}>
                <ProductCard 
                  product={product} 
                  onViewDetails={handleViewDetails}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services / Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 fade-in-section">
          <div className="group relative h-64 md:h-80 overflow-hidden bg-charcoal">
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-14 h-14 bg-gold/90 text-charcoal flex items-center justify-center mb-6">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl text-cream tracking-wider mb-2">ENVÍO GRATIS</h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                Entregas sin costo en pedidos mayores a $50 a nivel nacional.
              </p>
            </div>
          </div>
          <div className="group relative h-64 md:h-80 overflow-hidden bg-charcoal">
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-14 h-14 bg-teal/90 text-cream flex items-center justify-center mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl text-cream tracking-wider mb-2">100% ORGÁNICO</h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                Cultivado en armonía con la naturaleza, con certificación de origen.
              </p>
            </div>
          </div>
          <div className="group relative h-64 md:h-80 overflow-hidden bg-charcoal">
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-14 h-14 bg-coral/90 text-cream flex items-center justify-center mb-6">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl text-cream tracking-wider mb-2">TOSTADO FRESCO</h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                Tostado artesanalmente bajo demanda para asegurar el máximo aroma.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
