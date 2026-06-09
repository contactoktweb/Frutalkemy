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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addItem, toggleCart } = useCart()

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
    <section id="tienda" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
            PEDIDO EN LÍNEA: CAFÉ VERDE FRESCO DE COLOMBIA
          </h2>
          <p className="font-body text-navy/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Elige entre nuestras variedades premium | Envíos a todo el mundo disponibles
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => handleViewDetails(product)}>
              <div className="relative aspect-square mb-6 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="font-display text-lg font-black text-navy uppercase tracking-tight mb-1 group-hover:text-lime transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-xs text-navy/60 uppercase tracking-widest mb-2">
                  {product.process}
                </p>
                <p className="font-display text-xl font-black text-navy">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="mt-16 text-center">
          <a 
            href="#tienda" 
            className="inline-block bg-lime hover:bg-lime-dark text-navy font-display font-black text-sm tracking-widest px-10 py-4 rounded-none transition-all duration-300 transform hover:scale-105 uppercase"
          >
            Descubre más cafés en nuestra tienda
          </a>
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

