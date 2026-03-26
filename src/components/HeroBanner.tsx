import { motion } from "framer-motion";
import heroBg from "@/assets/hero-pilates.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Pilates studio"
          className="w-full h-full object-cover"
          width={1920}
          height={1080} />
        
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background/80" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-primary-foreground drop-shadow-lg">
          
          Flow with
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] font-medium italic text-primary-foreground drop-shadow-lg -mt-2 md:-mt-4">
          
          Maddy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 mt-6 tracking-widest uppercase">
          
          private pilates events   
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground/80 rounded-full mt-2" />
          
        </div>
      </motion.div>
    </section>);

};

export default HeroBanner;