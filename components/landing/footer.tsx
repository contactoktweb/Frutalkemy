"use client"

import { Instagram, Facebook, Mail, MapPin, Phone, Coffee, ArrowRight, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-black tracking-tighter uppercase">
              FRUTALKEMY
            </h2>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
              Llevando la esencia de las montañas colombianas a tu taza. 
              Calidad, sostenibilidad y pasión en cada grano.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:text-navy transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:text-navy transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:text-navy transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xs font-black tracking-widest uppercase text-lime">
              EXPLORAR
            </h3>
            <ul className="space-y-4">
              <li><a href="#tienda" className="font-body text-sm text-white/60 hover:text-white transition-colors">Tienda Online</a></li>
              <li><a href="#proceso" className="font-body text-sm text-white/60 hover:text-white transition-colors">Nuestro Proceso</a></li>
              <li><a href="#origen" className="font-body text-sm text-white/60 hover:text-white transition-colors">Origen y Fincas</a></li>
              <li><a href="#" className="font-body text-sm text-white/60 hover:text-white transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xs font-black tracking-widest uppercase text-lime">
              CONTACTO
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40" />
                <span className="font-body text-sm text-white/60">hola@frutalkemy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/40" />
                <span className="font-body text-sm text-white/60">+57 (300) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white/40" />
                <span className="font-body text-sm text-white/60">Santander, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-display text-xs font-black tracking-widest uppercase text-lime">
              SUSCRÍBETE
            </h3>
            <p className="font-body text-sm text-white/60">
              Recibe noticias sobre nuestras nuevas cosechas y ofertas exclusivas.
            </p>
            <form className="relative mt-4">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-body focus:outline-none focus:border-lime transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-lime text-navy px-4 font-display text-[10px] font-black tracking-widest hover:bg-lime-dark transition-colors uppercase">
                Unirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-[10px] text-white/40 tracking-widest uppercase text-center md:text-left">
            &copy; {currentYear} FRUTALKEMY SPECIALTY COFFEE. TODOS LOS DERECHOS RESERVADOS.
          </p>
          
          {/* Mandatory Branding Link */}
          <a 
            href="https://www.kytcode.lat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
          >
            <span className="font-body text-[10px] text-white/60 tracking-[0.2em] uppercase">
              Desarrollado por K&T
            </span>
            <span className="text-white text-xs group-hover:scale-110 transition-transform">❤️</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
