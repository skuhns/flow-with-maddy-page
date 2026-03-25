import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import InstagramSection from "@/components/InstagramSection";

const Index = () => {
  return (
    <main className="bg-background">
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
