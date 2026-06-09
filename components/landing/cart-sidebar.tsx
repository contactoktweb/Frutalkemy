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
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-navy/10 flex items-center justify-between bg-navy text-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-lime" />
                <h2 className="font-display text-xl tracking-tighter uppercase font-black">Tu Carrito</h2>
                <span className="bg-lime text-navy text-[10px] font-black px-2 py-0.5 rounded-full">
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
                  <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-navy/20" />
                  </div>
                  <h3 className="font-display text-2xl text-navy font-black uppercase tracking-tighter">CARRITO VACÍO</h3>
                  <p className="font-body text-navy/50 text-sm max-w-[200px]">
                    Parece que aún no has añadido ninguna joya cafetera a tu selección.
                  </p>
                  <button 
                    onClick={onClose}
                    className="font-display text-xs tracking-widest text-navy bg-lime px-8 py-4 hover:bg-lime-dark transition-all duration-300 mt-6 font-black uppercase"
                  >
                    VOLVER A LA TIENDA
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-navy/5 group">
                    <div className="relative w-24 h-24 flex-shrink-0 bg-navy/5 overflow-hidden rounded-none">
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
                          <h4 className="font-display text-lg text-navy leading-tight font-black uppercase tracking-tighter">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-navy/30 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-body text-xs text-navy/50 uppercase tracking-widest mt-1">
                          {item.weight || "250g"}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-navy/10 rounded-none">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-navy/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-body text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-navy/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-display text-lg text-navy font-black tracking-tighter">
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
              <div className="p-6 bg-navy text-white border-t border-white/5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-white/50 uppercase tracking-widest">Subtotal</span>
                    <span className="font-body">${totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-white/50 uppercase tracking-widest">Envío</span>
                    <span className="font-body text-lime">Calculado en checkout</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between">
                    <span className="font-display text-xl tracking-widest uppercase font-black">TOTAL</span>
                    <span className="font-display text-2xl text-lime font-black tracking-tighter">${totalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout" 
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-3 bg-lime text-navy font-display py-5 group transition-all duration-300 hover:bg-lime-dark font-black tracking-widest uppercase"
                >
                  <span>FINALIZAR PEDIDO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
                
                <p className="text-[10px] text-center text-white/40 font-body uppercase tracking-[0.2em]">
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
