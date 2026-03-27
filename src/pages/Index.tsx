import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import PilatesForSection from "@/components/PilatesForSection";
import EthosSection from "@/components/EthosSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import InstagramSection from "@/components/InstagramSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import SparkleTrail from "@/components/SparkleTrail";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <main className="bg-background">
      <SparkleTrail />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-6 py-4">
        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="font-body text-sm tracking-widest uppercase text-primary-foreground/90 hover:text-primary-foreground transition-colors bg-foreground/20 backdrop-blur-sm rounded-full px-5 py-2"
        >
          Let's Get in Touch
        </motion.a>
      </nav>

      <HeroBanner />
      <AboutSection />
      <PilatesForSection />
      <WaveDivider fill="hsl(var(--accent) / 0.3)" />
      <EthosSection />
      {/* <WaveDivider fill="hsl(var(--warm-cream))" flip />
      <PhotoCarousel /> */}
      <InstagramSection />
      <MarqueeStrip reverse className="bg-coral text-primary-foreground" />

      <footer className="py-8 text-center font-body text-sm text-muted-foreground border-t border-border">
        © 2026 Flow with Maddy. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
