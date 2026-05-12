"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/store/cart-store"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ShieldCheck, Truck, CreditCard, ShoppingBag, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const COLOMBIA_DATA = {
  "Antioquia": ["Medellín", "Envigado", "Itagüí", "Bello", "Rionegro"],
  "Bogotá D.C.": ["Bogotá"],
  "Valle del Cauca": ["Cali", "Palmira", "Buga", "Tulua", "Cartago"],
  "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta"],
  "Huila": ["Neiva", "Pitalito", "Garzón", "La Plata"]
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1) // 1: Shipping, 2: Payment
  const [isProcessing, setIsProcessing] = useState(false)
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    department: "",
    city: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: ""
  })

  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    if (formData.department) {
      setCities(COLOMBIA_DATA[formData.department as keyof typeof COLOMBIA_DATA] || [])
    }
  }, [formData.department])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    clearCart()
    router.push("/thank-you")
  }

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-charcoal/5 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-12 h-12 text-charcoal/20" />
        </div>
        <h1 className="font-display text-4xl text-charcoal mb-4">CARRITO VACÍO</h1>
        <p className="font-body text-charcoal/60 mb-8 max-w-md">
          No puedes realizar un pedido sin antes seleccionar algunas de nuestras joyas cafeteras.
        </p>
        <Link 
          href="/#tienda" 
          className="bg-charcoal text-cream font-display tracking-[0.2em] px-12 py-5 hover:bg-gold hover:text-charcoal transition-all duration-300"
        >
          VOLVER A LA TIENDA
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-charcoal text-cream py-8 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-display text-2xl tracking-tighter hover:text-gold transition-colors">
            FRUTAL<span className="text-gold">KEMY</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 text-xs font-display tracking-widest uppercase text-cream/40">
            <span className={step === 1 ? "text-gold" : "text-cream/80"}>Información</span>
            <ChevronRight className="w-3 h-3" />
            <span className={step === 2 ? "text-gold" : ""}>Pago</span>
            <ChevronRight className="w-3 h-3" />
            <span>Confirmación</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Form Side */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-3xl text-charcoal uppercase tracking-wider">Envío</h2>
                    <Link href="/#tienda" className="text-charcoal/40 hover:text-charcoal flex items-center gap-2 text-xs font-bold transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                      VOLVER
                    </Link>
                  </div>

                  <form onSubmit={handleNextStep} className="space-y-8">
                    {/* Contact info */}
                    <div className="space-y-4">
                      <h3 className="font-display text-sm tracking-widest text-charcoal/40 uppercase">Contacto</h3>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="w-full bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>

                    {/* Shipping info */}
                    <div className="space-y-4">
                      <h3 className="font-display text-sm tracking-widest text-charcoal/40 uppercase">Dirección de Envío</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          required
                          type="text"
                          name="firstName"
                          placeholder="Nombre"
                          className="bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors"
                          onChange={handleInputChange}
                          value={formData.firstName}
                        />
                        <input
                          required
                          type="text"
                          name="lastName"
                          placeholder="Apellidos"
                          className="bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors"
                          onChange={handleInputChange}
                          value={formData.lastName}
                        />
                      </div>
                      <input
                        required
                        type="text"
                        name="address"
                        placeholder="Dirección (Calle, Carrera, Edificio)"
                        className="w-full bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors"
                        onChange={handleInputChange}
                        value={formData.address}
                      />
                      <input
                        type="text"
                        name="apartment"
                        placeholder="Apartamento, local, etc. (Opcional)"
                        className="w-full bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors"
                        onChange={handleInputChange}
                        value={formData.apartment}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <select
                          required
                          name="department"
                          className="bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                          onChange={handleInputChange}
                          value={formData.department}
                        >
                          <option value="">Departamento</option>
                          {Object.keys(COLOMBIA_DATA).map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                        
                        <select
                          required
                          name="city"
                          disabled={!formData.department}
                          className="bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer disabled:opacity-50"
                          onChange={handleInputChange}
                          value={formData.city}
                        >
                          <option value="">Ciudad</option>
                          {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>

                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Teléfono"
                        className="w-full bg-white border border-charcoal/10 px-6 py-4 font-body focus:outline-none focus:border-gold transition-colors"
                        onChange={handleInputChange}
                        value={formData.phone}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-charcoal text-cream font-display tracking-[0.2em] py-6 hover:bg-gold hover:text-charcoal transition-all duration-300 shine-effect"
                    >
                      CONTINUAR AL PAGO
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-3xl text-charcoal uppercase tracking-wider">Pago</h2>
                    <button onClick={() => setStep(1)} className="text-charcoal/40 hover:text-charcoal flex items-center gap-2 text-xs font-bold transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                      ATRÁS
                    </button>
                  </div>

                  <form onSubmit={handlePayment} className="space-y-8">
                    {/* Summary box */}
                    <div className="bg-white border border-charcoal/5 p-6 space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-charcoal/40 font-body uppercase tracking-wider">Enviar a</span>
                        <span className="text-charcoal font-body font-bold">{formData.address}, {formData.city}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-charcoal/40 font-body uppercase tracking-wider">Contacto</span>
                        <span className="text-charcoal font-body font-bold">{formData.email}</span>
                      </div>
                    </div>

                    {/* Payment details */}
                    <div className="space-y-6">
                      <h3 className="font-display text-sm tracking-widest text-charcoal/40 uppercase">Detalles de Tarjeta</h3>
                      
                      <div className="bg-white border border-charcoal/10 p-8 space-y-6">
                        <div className="flex justify-between items-center mb-4">
                          <CreditCard className="w-8 h-8 text-charcoal/20" />
                          <div className="flex gap-2">
                            <div className="w-8 h-5 bg-charcoal/10 rounded-sm" />
                            <div className="w-8 h-5 bg-charcoal/10 rounded-sm" />
                            <div className="w-8 h-5 bg-charcoal/10 rounded-sm" />
                          </div>
                        </div>

                        <input
                          required
                          type="text"
                          name="cardNumber"
                          placeholder="Número de tarjeta (simulado)"
                          className="w-full border-b border-charcoal/10 py-3 font-body focus:outline-none focus:border-gold transition-colors"
                          onChange={handleInputChange}
                        />
                        
                        <input
                          required
                          type="text"
                          name="cardName"
                          placeholder="Nombre en la tarjeta"
                          className="w-full border-b border-charcoal/10 py-3 font-body focus:outline-none focus:border-gold transition-colors"
                          onChange={handleInputChange}
                        />

                        <div className="grid grid-cols-2 gap-8">
                          <input
                            required
                            type="text"
                            name="expiry"
                            placeholder="MM / YY"
                            className="w-full border-b border-charcoal/10 py-3 font-body focus:outline-none focus:border-gold transition-colors"
                            onChange={handleInputChange}
                          />
                          <input
                            required
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            className="w-full border-b border-charcoal/10 py-3 font-body focus:outline-none focus:border-gold transition-colors"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={isProcessing}
                      type="submit"
                      className="w-full bg-charcoal text-cream font-display tracking-[0.2em] py-6 hover:bg-gold hover:text-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-cream/20 border-t-cream rounded-full animate-spin" />
                          <span>PROCESANDO...</span>
                        </div>
                      ) : (
                        <span>PAGAR ${totalPrice().toLocaleString()}</span>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-charcoal/40">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Encriptación SSL de 256 bits</span>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-5">
            <div className="sticky top-12 space-y-8">
              <div className="bg-charcoal text-cream p-8 md:p-12">
                <h3 className="font-display text-xl tracking-widest uppercase mb-8 border-b border-white/10 pb-6">
                  Resumen de Compra
                </h3>

                <div className="space-y-6 max-h-[400px] overflow-y-auto custom-scrollbar pr-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 bg-white/5 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-display text-sm tracking-wide uppercase">{item.name}</h4>
                        <p className="font-body text-[10px] text-cream/40 uppercase tracking-widest">{item.weight || "250g"}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-body text-sm">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-cream/40 uppercase tracking-widest">Subtotal</span>
                    <span className="font-body">${totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-cream/40 uppercase tracking-widest">Envío</span>
                    <span className="font-body text-gold">GRATIS</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="font-display text-2xl tracking-widest uppercase">Total</span>
                    <span className="font-display text-3xl text-gold">${totalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Trust markers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-charcoal/5 flex flex-col items-center text-center gap-3">
                  <Truck className="w-6 h-6 text-teal" />
                  <span className="font-display text-[10px] tracking-widest text-charcoal uppercase">Entrega Express</span>
                </div>
                <div className="bg-white p-6 border border-charcoal/5 flex flex-col items-center text-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-coral" />
                  <span className="font-display text-[10px] tracking-widest text-charcoal uppercase">Compra Segura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
