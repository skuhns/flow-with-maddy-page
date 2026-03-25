import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const photos = [
  { src: carousel2, alt: "Reformer session" },
  { src: carousel3, alt: "Group class energy" },
  { src: carousel4, alt: "Pilates equipment" },
];

const PhotoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 md:py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            The <span className="italic text-primary">Studio</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">A peek into our sessions ✨</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {photos.map((photo, i) => (
                <div key={i} className="flex-[0_0_80%] md:flex-[0_0_45%] min-w-0">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={1024}
                      height={1024}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
