import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { NanoShieldSection } from "@/components/sections/NanoShieldSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutSection />
      <ProductSection />
      <FeaturesSection />
      <NanoShieldSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

