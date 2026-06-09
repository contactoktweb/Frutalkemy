"use client"

import Image from "next/image"
import { Sparkles, Users, Globe, Recycle } from "lucide-react"

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-white py-20 md:py-32 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter leading-tight">
              USAMOS EL CAFÉ COMO UNA HERRAMIENTA <br />
              <span className="text-lime">PARA TRANSFORMAR VIDAS</span>
            </h2>
            
            <div className="space-y-6 font-body text-navy/70 text-lg leading-relaxed">
              <p>
                Nuestra misión es revolucionar la industria del café apoyando a las comunidades cafeteras. 
                A través de la educación, la innovación y la colaboración, llevamos el café colombiano 
                al siguiente nivel.
              </p>
              <p>
                La sostenibilidad está en el corazón de todo lo que hacemos. A través de proyectos sociales 
                en todo Santander, reafirmamos nuestro compromiso de proporcionar un futuro próspero, 
                descubriendo productores de café y construyendo una industria cafetera resiliente 
                para las generaciones venideras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#" 
                className="inline-block bg-lime hover:bg-lime-dark text-navy font-display font-black text-xs tracking-widest px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 uppercase text-center"
              >
                Saber más sobre nosotros
              </a>
              <a 
                href="#" 
                className="inline-block bg-lime hover:bg-lime-dark text-navy font-display font-black text-xs tracking-widest px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 uppercase text-center"
              >
                Sé parte de nuestra comunidad
              </a>
            </div>
          </div>

          {/* Video / Image Placeholder */}
          <div className="relative aspect-video bg-navy overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt="Our Statement"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-lime text-navy rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white text-left">
              <p className="font-display text-sm font-black tracking-widest uppercase mb-1">Nuestro Manifiesto 2026</p>
              <p className="font-body text-xs text-white/70 uppercase tracking-widest">Descubre nuestro propósito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
