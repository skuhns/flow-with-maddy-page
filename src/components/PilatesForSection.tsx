import { motion } from "framer-motion";

const offerings = [
  { emoji: "🎈", title: "Private Parties", description: "Bachelorette parties, birthdays, and celebrations made unforgettable with a private mat pilates class." },
  { emoji: "💼", title: "Corporate Events", description: "Energize your team with a group pilates session perfect for team building and wellness initiatives." },
  { emoji: "🌳", title: "Outdoor Recreation", description: "Take the practice outside — pilates in the park, on the patio, or wherever the vibe takes us." },
];

const PilatesForSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            Pilates <span className="italic text-primary">For</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow"
            >
              <span className="text-5xl block mb-4">{item.emoji}</span>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilatesForSection;
