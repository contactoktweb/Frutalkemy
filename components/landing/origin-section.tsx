"use client"

import { Globe, Leaf, Zap, Star, Trophy } from "lucide-react"

export function OriginSection() {
  const categories = [
    { icon: Globe, label: "COMUNIDAD", color: "bg-blue-100 text-blue-600" },
    { icon: Leaf, label: "MICROLOTES", color: "bg-green-100 text-green-600" },
    { icon: Zap, label: "INNOVACIÓN", color: "bg-lime-100 text-lime-600" },
    { icon: Star, label: "RESERVA", color: "bg-purple-100 text-purple-600" },
    { icon: Trophy, label: "COMPETICIÓN", color: "bg-gray-100 text-gray-800" },
  ]

  return (
    <section id="origen" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
            ¿BUSCAS GRANDES CANTIDADES DE CAFÉ? <br />
            <span className="text-lime">DESCUBRE TU COMBINACIÓN PERFECTA</span>
          </h2>
          <p className="font-body text-navy/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Explora nuestras categorías curadas para encontrar el café verde ideal que se adapte 
            a tu gusto y estilo de tueste. Disponible en sacos a granel.
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center mb-20">
          <a 
            href="#" 
            className="inline-block bg-lime hover:bg-lime-dark text-navy font-display font-black text-sm tracking-widest px-10 py-4 rounded-none transition-all duration-300 transform hover:scale-105 uppercase"
          >
            Encuentra tu centro de distribución más cercano
          </a>
        </div>

        {/* Categories Circular Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto mb-32">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center group">
              <div className={`w-24 h-24 rounded-full ${cat.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                <cat.icon className="w-10 h-10" />
              </div>
              <span className="font-display text-xs font-black tracking-widest text-navy uppercase">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Map Section Placeholder */}
        <div className="relative w-full aspect-[2/1] bg-navy rounded-3xl overflow-hidden shadow-2xl group">
          {/* Using a placeholder map image */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                ALCANCE <span className="text-lime">GLOBAL</span>
              </h3>
              <p className="font-body text-white/80 text-lg max-w-xl mx-auto">
                Exportamos la magia de Santander a Norteamérica, Europa, Asia y Australia.
              </p>
            </div>
          </div>
          
          {/* Pins (Aesthetic) */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-lime rounded-full animate-ping" />
          <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-lime rounded-full animate-ping delay-700" />
          <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-lime rounded-full animate-ping delay-1000" />
        </div>
      </div>
    </section>
  )
}
