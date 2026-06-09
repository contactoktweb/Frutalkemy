"use client"

import { Hero } from "@/components/landing/hero"
import { ShopSection } from "@/components/landing/shop-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { ProcessSection } from "@/components/landing/process-section"
import { OriginSection } from "@/components/landing/origin-section"
import { Footer } from "@/components/landing/footer"
import { WaveDivider } from "@/components/landing/dividers"
import { CartSidebar } from "@/components/landing/cart-sidebar"

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <CartSidebar />
      <Hero />
      <ShopSection />
      
      <ProcessSection />
      <OriginSection />
      <GallerySection />
      
      <Footer />
    </main>
  )
}
