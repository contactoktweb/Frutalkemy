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
    <main className="overflow-hidden">
      <CartSidebar />
      <Hero />
      <ShopSection />
      
      <GallerySection />
      
      {/* Wave transition to Process Section */}
      <WaveDivider fromColor="#1A1A1A" toColor="#3D8B8B" />
      <ProcessSection />
      
      {/* Wave transition back to dark origin */}
      <WaveDivider fromColor="#3D8B8B" toColor="#0D0D0D" flip={true} />
      <OriginSection />
      
      <Footer />
    </main>
  )
}
