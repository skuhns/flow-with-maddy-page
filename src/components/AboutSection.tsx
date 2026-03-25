import { motion } from "framer-motion";
import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            About <span className="italic text-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-accent">
              <img
                src={aboutPortrait}
                alt="Maddy - Pilates instructor"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral-light rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blush rounded-full -z-10 animate-float" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground font-medium">
              Hey, I'm Maddy! 💕
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm a certified Pilates instructor passionate about helping you build strength, flexibility, and confidence — all while having a blast! My classes are designed to make you feel empowered and energized.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Whether you're a complete beginner or a seasoned pro, there's a spot on the mat for you. I believe movement should be fun, challenging, and totally judgment-free. Let's flow together!
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-accent rounded-2xl px-6 py-4 text-center">
                <p className="font-display text-2xl font-semibold text-primary">5+</p>
                <p className="font-body text-sm text-muted-foreground">Years Teaching</p>
              </div>
              <div className="bg-accent rounded-2xl px-6 py-4 text-center">
                <p className="font-display text-2xl font-semibold text-primary">500+</p>
                <p className="font-body text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-accent rounded-2xl px-6 py-4 text-center">
                <p className="font-display text-2xl font-semibold text-primary">3</p>
                <p className="font-body text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
