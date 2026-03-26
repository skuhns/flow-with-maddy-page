import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import InstagramSection from "@/components/InstagramSection";


const Index = () => {
  return (
    <main className="bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-6 py-4">
        <a
          href="#contact"
          className="font-body text-sm tracking-widest uppercase text-primary-foreground/90 hover:text-primary-foreground transition-colors bg-foreground/20 backdrop-blur-sm rounded-full px-5 py-2"
        >
          Let's Get in Touch
        </a>
      </nav>

      <HeroBanner />
      <AboutSection />
      <PhotoCarousel />
      <InstagramSection />


      <footer className="py-8 text-center font-body text-sm text-muted-foreground border-t border-border">
        © 2026 Flow with Maddy. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
