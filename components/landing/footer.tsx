"use client"

import { Instagram, Facebook, Mail, MapPin, Phone, Coffee, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2D5A47 0%, #1A1A1A 100%)' }}>
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-coral via-gold to-teal" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Coffee className="w-8 h-8 text-gold" />
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-cream tracking-wider mb-4">
            UNETE AL <span className="gradient-text">RITUAL</span>
          </h3>
          <p className="font-body text-cream/70 text-lg mb-8">
            Recibe ofertas exclusivas, novedades sobre nuestros cafes y consejos de baristas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="flex-1 bg-white/10 border border-cream/20 px-6 py-4 text-cream placeholder:text-cream/40 font-body focus:outline-none focus:border-gold transition-colors"
            />
            <button className="shine-effect flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-coral px-8 py-4 text-charcoal font-display tracking-wider hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">
              SUSCRIBIRSE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-cream/10" />
          <div className="w-3 h-3 bg-gold rotate-45" />
          <div className="flex-1 h-px bg-cream/10" />
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-charcoal" />
              </div>
              <span className="font-display text-2xl tracking-[0.15em] text-cream">
                FRUTALKEMY
              </span>
            </div>
            <p className="font-accent italic text-gold text-lg mb-4">
              by Renacer Coffee Paradise
            </p>
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              Donde la alquimia del fruto crea la taza perfecta. Cafe de especialidad 
              cultivado con pasion en las montanas de Colombia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-cream tracking-wider mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-coral" />
              EXPLORAR
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-body text-cream/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-300" />
                Tienda
              </a>
              <a href="#" className="font-body text-cream/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-300" />
                Nuestra Historia
              </a>
              <a href="#" className="font-body text-cream/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-300" />
                El Proceso
              </a>
              <a href="#" className="font-body text-cream/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-300" />
                Suscripciones
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-cream tracking-wider mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-teal" />
              CONTACTO
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 font-body text-cream/60 hover:text-gold transition-colors text-sm group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-coral/20 flex items-center justify-center transition-colors">
                  <MapPin className="w-4 h-4 text-coral" />
                </div>
                Montanas de Colombia
              </a>
              <a href="#" className="flex items-center gap-3 font-body text-cream/60 hover:text-gold transition-colors text-sm group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                +57 300 123 4567
              </a>
              <a href="#" className="flex items-center gap-3 font-body text-cream/60 hover:text-gold transition-colors text-sm group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-teal/20 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-teal" />
                </div>
                hola@frutalkemy.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-cream tracking-wider mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold" />
              SIGUENOS
            </h4>
            <p className="font-body text-cream/60 text-sm mb-6">
              Comparte tu experiencia con nosotros #Frutalkemy
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 border border-cream/20 flex items-center justify-center text-cream hover:bg-coral hover:border-coral transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-cream/20 flex items-center justify-center text-cream hover:bg-teal hover:border-teal transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-cream/40 text-sm">
              © 2024 Frutalkemy. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-body text-cream/40 text-xs">Hecho con</span>
              <Coffee className="w-4 h-4 text-coral" />
              <span className="font-body text-cream/40 text-xs">en Colombia</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="font-body text-cream/40 hover:text-gold transition-colors text-xs">
                Politica de Privacidad
              </a>
              <a href="#" className="font-body text-cream/40 hover:text-gold transition-colors text-xs">
                Terminos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
