"use client"

import { useCart } from "@/store/cart-store"
import { X, ShoppingBag, Star, Coffee, Droplets, Thermometer, ShieldCheck } from "lucide-react"
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
            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-navy text-white rounded-none hover:bg-lime hover:text-navy transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side - Visuals */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-navy">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 flex gap-2">
                <span className="bg-lime text-navy font-display text-[10px] font-black tracking-widest px-3 py-1.5 uppercase">
                  Especialidad
                </span>
                <span className="bg-white text-navy font-display text-[10px] font-black tracking-widest px-3 py-1.5 uppercase">
                  {product.process.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lime">
                  <Star className="w-4 h-4 fill-lime" />
                  <span className="font-body text-xs tracking-widest font-black uppercase text-navy">RECOLECCIÓN MANUAL EXCLUSIVA</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-navy tracking-tighter leading-none font-black uppercase">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-navy font-black">{product.price}</span>
                  <span className="font-body text-navy/40 line-through text-lg">$35.00</span>
                  <span className="bg-lime/10 text-navy font-body text-[10px] font-black px-2 py-0.5 rounded-none uppercase">AHORRA 25%</span>
                </div>
              </div>

              <p className="font-body text-navy/60 text-lg leading-relaxed">
                Nuestra {product.name} representa la cumbre de la alquimia cafetera. Un proceso meticuloso que resalta notas de {product.notes.join(', ')}. Cultivado con amor en las montañas de Santander.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-navy/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center rounded-none">
                    <Droplets className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-navy/40 uppercase tracking-widest font-black">Humedad</span>
                    <span className="font-display text-navy font-black">10.5%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center rounded-none">
                    <Thermometer className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-navy/40 uppercase tracking-widest font-black">Tostión</span>
                    <span className="font-display text-navy font-black">Media</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center rounded-none">
                    <ShieldCheck className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-navy/40 uppercase tracking-widest font-black">Certificado</span>
                    <span className="font-display text-navy font-black">Orgánico</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center rounded-none">
                    <Coffee className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="block font-body text-[10px] text-navy/40 uppercase tracking-widest font-black">Puntaje</span>
                    <span className="font-display text-navy font-black">88+ SCA</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-navy text-white font-display tracking-widest py-5 hover:bg-navy-light transition-all duration-300 font-black uppercase"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>AÑADIR AL CARRITO</span>
                </button>
                <button 
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-navy text-navy font-display tracking-widest py-5 hover:bg-navy hover:text-white transition-all duration-300 font-black uppercase"
                >
                  <Droplets className="w-5 h-5" />
                  <span>PEDIR MUESTRA</span>
                </button>
              </div>
              
              <p className="text-center font-body text-[10px] text-navy/40 tracking-widest uppercase font-black">
                Garantía de frescura absoluta · Tostado bajo demanda
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
