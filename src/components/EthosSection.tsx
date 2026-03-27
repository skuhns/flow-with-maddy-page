import { motion } from "framer-motion";

const EthosSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            My <span className="italic text-primary">Ethos</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            Pilates was designed for every<em>body</em> — and that's exactly how I teach it.
            As a 500-hour comprehensively certified instructor trained across all six apparatuses,
            I bring energy, passion, and intention to every session.
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            My goal is simple: make pilates fun, accessible, and empowering.
            Whether you're stepping onto the mat for the first time or deepening an
            existing practice, I create classes where every level feels challenged
            and successful.
          </p>
          <p className="font-display text-2xl md:text-3xl italic text-primary font-medium pt-4">
            Movement should feel good — let's make it happen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EthosSection;
