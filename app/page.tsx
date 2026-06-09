"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
          alt="Coffee Beans Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-12">
        <section className="bg-navy-light/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-sm p-8 md:p-16 max-w-3xl w-full text-center transform transition-all duration-700 hover:border-lime/30">
          
          <div className="flex flex-col items-center justify-center mb-8 gap-6 animate-float">
            <img src="/logo.png" alt="Frutalkemy Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-xl shadow-xl" />
            <span className="font-display text-4xl md:text-5xl font-black tracking-tighter text-white">
              FRUTALKEMY
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Sitio en <span className="text-lime">Construcción</span>
          </h1>
          
          <h2 className="font-body text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Estamos perfeccionando la alquimia de nuestro café. Pronto podrás descubrir nuestra selección del mejor café verde de Colombia para el mundo.
          </h2>
          
          <div className="flex justify-center items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse"></div>
            <span className="font-display text-lime font-bold tracking-[0.2em] text-sm uppercase">Preparando la mejor taza</span>
            <div className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </section>
      </div>

      {/* Footer strictly adhering to the rules */}
      <footer className="w-full py-8 relative z-10 bg-[#060913] flex flex-col items-center justify-center gap-2 border-t border-white/5">
        <p className="font-body text-white/50 text-sm">
          &copy; {currentYear} Frutalkemy. Todos los derechos reservados.
        </p>
        <a 
          href="https://www.kytcode.lat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-lime transition-colors group font-body"
        >
          Desarrollado por K&T 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="text-white group-hover:scale-110 transition-transform"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </a>
      </footer>
    </main>
  )
}
