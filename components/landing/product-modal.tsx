"use client"

import { useCart, Product as ProductType } from "@/store/cart-store"
import { X, ShoppingBag, Star, Info, Coffee, Droplets, Thermometer, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function ProductModal({ 
  product, 
  isOpen, 
  onClose 
}: { 
  product: any; 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const { addItem } = useCart()

  if (!product) return null

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image,
      description: product.process,
      weight: "250g"
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-cream overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-charcoal text-white rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side - Visuals */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-charcoal">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 flex gap-2">
                <span className="bg-gold text-charcoal font-display text-[10px] tracking-[0.2em] px-3 py-1.5 uppercase">
                  Especialidad
                </span>
                <span className="bg-terracotta text-white font-display text-[10px] tracking-[0.2em] px-3 py-1.5 uppercase">
                  {product.process.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold">
                  <Star className="w-4 h-4 fill-gold" />
                  <span className="font-body text-xs tracking-widest font-bold">4.9 / 5.0 RECOLECCIÓN MANUAL</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-tight leading-none">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-charcoal">{product.price}</span>
                  <span className="font-body text-charcoal/40 line-through text-lg">$35.00</span>
                  <span className="bg-coral/10 text-coral font-body text-[10px] font-bold px-2 py-0.5 rounded-sm">AHORRA 25%</span>
                </div>
              </div>

              <p className="font-body text-charcoal/60 text-lg leading-relaxed">
                Nuestra {product.name} representa la cumbre de la alquimia cafetera. Un proceso meticuloso que resalta notas de {product.notes.join(', ')}. Cultivado con amor en las montañas de Huila.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-charcoal/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-charcoal/5 flex items-center justify-center rounded-sm">
                    <Droplets className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-charcoal/40 uppercase tracking-widest">Humedad</span>
                    <span className="font-display text-charcoal">10.5%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-charcoal/5 flex items-center justify-center rounded-sm">
                    <Thermometer className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-charcoal/40 uppercase tracking-widest">Tostión</span>
                    <span className="font-display text-charcoal">Media</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-charcoal/5 flex items-center justify-center rounded-sm">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-charcoal/40 uppercase tracking-widest">Certificado</span>
                    <span className="font-display text-charcoal">Orgánico</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-charcoal/5 flex items-center justify-center rounded-sm">
                    <Coffee className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-charcoal/40 uppercase tracking-widest">Puntaje</span>
                    <span className="font-display text-charcoal">88+ SCA</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-charcoal text-cream font-display tracking-[0.2em] py-5 hover:bg-gold hover:text-charcoal transition-all duration-300 group shine-effect"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>AÑADIR AL CARRITO</span>
                </button>
                <button 
                  className="flex-1 flex items-center justify-center gap-3 border border-charcoal/10 font-display tracking-[0.2em] py-5 hover:bg-charcoal hover:text-cream transition-all duration-300"
                >
                  <Droplets className="w-5 h-5" />
                  <span>PEDIR MUESTRA</span>
                </button>
              </div>
              
              <p className="text-center font-body text-[10px] text-charcoal/40 tracking-[0.3em] uppercase">
                Garantía de frescura absoluta · Tostado bajo demanda
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
