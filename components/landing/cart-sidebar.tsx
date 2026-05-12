"use client"

import { useCart } from "@/store/cart-store"
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CartSidebar() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isCartOpen, setCartOpen } = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const onClose = () => setCartOpen(false)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-charcoal/10 flex items-center justify-between bg-charcoal text-cream">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-gold" />
                <h2 className="font-display text-xl tracking-wider uppercase">Tu Carrito</h2>
                <span className="bg-gold text-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {totalItems()}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-charcoal/5 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-charcoal/20" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal">CARRITO VACÍO</h3>
                  <p className="font-body text-charcoal/50 text-sm max-w-[200px]">
                    Parece que aún no has añadido ninguna joya cafetera a tu selección.
                  </p>
                  <button 
                    onClick={onClose}
                    className="font-display text-sm tracking-widest text-gold bg-charcoal px-8 py-3 hover:bg-gold hover:text-charcoal transition-all duration-300 mt-6"
                  >
                    VOLVER A LA TIENDA
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-charcoal/5 group">
                    <div className="relative w-24 h-24 flex-shrink-0 bg-charcoal/5 overflow-hidden rounded-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-display text-lg text-charcoal leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-charcoal/30 hover:text-terracotta transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-body text-xs text-charcoal/50 uppercase tracking-widest mt-1">
                          {item.weight || "250g"}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-charcoal/10 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-charcoal/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-body text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-charcoal/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-display text-lg text-charcoal">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-charcoal text-cream border-t border-white/5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-cream/50 uppercase tracking-widest">Subtotal</span>
                    <span className="font-body">${totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-cream/50 uppercase tracking-widest">Envío</span>
                    <span className="font-body text-gold">Calculado en checkout</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between">
                    <span className="font-display text-xl tracking-wider">TOTAL</span>
                    <span className="font-display text-2xl text-gold">${totalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout" 
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-3 bg-white text-charcoal font-display py-5 group shine-effect"
                >
                  <span className="tracking-[0.2em]">FINALIZAR PEDIDO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
                
                <p className="text-[10px] text-center text-cream/40 font-body uppercase tracking-[0.2em]">
                  Pago seguro garantizado · Frutalkemy Alquimia
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
