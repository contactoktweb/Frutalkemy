"use client"

import Link from "next/link"
import { CheckCircle2, Package, Truck, Heart, ArrowRight, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ThankYouPage() {
  const orderNumber = Math.floor(Math.random() * 900000) + 100000

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <main className="flex-1 container mx-auto px-6 py-20 flex flex-col items-center justify-center">
        
        {/* Success Icon Animation */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
          className="w-32 h-32 bg-teal flex items-center justify-center rounded-full mb-12 shadow-2xl shadow-teal/20"
        >
          <CheckCircle2 className="w-16 h-16 text-cream" />
        </motion.div>

        <div className="text-center space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="font-body text-teal text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
              ¡PEDIDO CONFIRMADO!
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal tracking-tight leading-none">
              GRACIAS POR TU <span className="text-gold">CONFIANZA</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-charcoal/60 text-lg md:text-xl"
          >
            Tu orden <span className="font-bold text-charcoal">#FTK-{orderNumber}</span> ha sido recibida con éxito. 
            Estamos preparando tus joyas cafeteras para que lleguen frescas a tu puerta.
          </motion.p>
        </div>

        {/* Next Steps Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl"
        >
          <div className="bg-white p-8 border border-charcoal/5 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="font-display text-sm tracking-widest uppercase">REVISA TU EMAIL</h3>
            <p className="font-body text-xs text-charcoal/50 leading-relaxed">
              Te hemos enviado un correo con todos los detalles de tu pedido.
            </p>
          </div>

          <div className="bg-white p-8 border border-charcoal/5 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="font-display text-sm tracking-widest uppercase">PREPARACIÓN</h3>
            <p className="font-body text-xs text-charcoal/50 leading-relaxed">
              Tostamos tu café bajo demanda para garantizar la máxima frescura.
            </p>
          </div>

          <div className="bg-white p-8 border border-charcoal/5 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="font-display text-sm tracking-widest uppercase">ENVÍO RÁPIDO</h3>
            <p className="font-body text-xs text-charcoal/50 leading-relaxed">
              Recibirás un número de guía en cuanto tu pedido salga de la finca.
            </p>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link 
            href="/"
            className="flex items-center gap-3 bg-charcoal text-cream font-display tracking-[0.2em] px-12 py-5 hover:bg-gold hover:text-charcoal transition-all duration-300 group"
          >
            <span>VOLVER AL INICIO</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
          
          <a 
            href="https://instagram.com/frutalkemy" 
            target="_blank" 
            className="flex items-center gap-3 font-display tracking-[0.2em] text-charcoal/40 hover:text-charcoal transition-colors px-12 py-5"
          >
            <Instagram className="w-5 h-5" />
            <span>SÍGUENOS EN INSTAGRAM</span>
          </a>
        </motion.div>
      </main>

      {/* Footer Branding (Global Rule Requirement) */}
      <footer className="py-12 border-t border-charcoal/5 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-4 text-xs font-bold text-charcoal/30 tracking-[0.5em] uppercase">
          <div className="w-12 h-0.5 bg-charcoal/10" />
          <span>Frutalkemy Alquimia</span>
          <div className="w-12 h-0.5 bg-charcoal/10" />
        </div>
        
        <div className="text-charcoal/40 text-[10px] font-body tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} FRUTALKEMY S.A.S · TODOS LOS DERECHOS RESERVADOS
        </div>

        <a 
          href="https://www.kytcode.lat" 
          target="_blank" 
          className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
        >
          <span className="font-body text-xs text-charcoal/60">Desarrollado por K&T</span>
          <Heart className="w-3 h-3 text-charcoal fill-charcoal transition-colors group-hover:text-terracotta group-hover:fill-terracotta" />
        </a>
      </footer>
    </div>
  )
}
