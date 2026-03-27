import { motion } from "framer-motion";

const EthosSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-accent/30 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob-slower" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            My <span className="italic text-gradient">Ethos</span>
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
            Pilates should never feel like a chore. I bring the playlist, the
            energy, and the good vibes — your only job is to show up and have
            fun. Every class is a full experience: music, movement, and a whole
            lot of hype.
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you're brand new or a seasoned pro, you'll walk out feeling
            stronger, looser, and genuinely happy you came. Pilates was designed
            for every<em>body</em> — and I make sure it feels that way.
          </p>
          <p className="font-display text-2xl md:text-3xl italic font-medium pt-4 text-gradient">
            Good music. Good energy. Great workout.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EthosSection;
