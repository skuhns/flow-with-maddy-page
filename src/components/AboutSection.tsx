import { motion } from "framer-motion";
import aboutPortrait from "@/assets/about-portrait.jpg";

const CHICAGO_FLAG_URL = "https://design.chicago.gov/assets/img/Flag_of_Chicago,_Illinois.svg";

const cardHover = {
  whileHover: { scale: 1.04, rotate: -1 },
  whileTap: { scale: 0.97 },
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-16 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-32 w-72 h-72 bg-coral-light/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 -right-32 w-80 h-80 bg-blush/30 rounded-full blur-3xl animate-blob-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            About <span className="italic text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Portrait image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-2 relative"
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
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-coral-light rounded-full -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-blush rounded-full -z-10 animate-float" />
          </motion.div>

          {/* Intro text - spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-2 bg-card rounded-2xl border border-border p-8 md:p-10 flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground font-medium mb-4">
              Hey, I'm Maddy! ✨
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed md:text-lg">
              I'm described by clients as having an exciting energy that makes even the most challenging classes feel fast and fun. If you want an instructor who is friendly and encouraging that will push you to try new things and laugh with you through a spicy ab series then I am your girl. Whether you're looking to practice pilates at the lakefront with your girls on a saturday before brunch or add some spice to your morning at the air bnb on your bachelorette trip, a private mat pilates class brings movement and magic. I plan the class to meet your individual needs and meet you where you're at in your practice. No previous pilates experience? No problem.
            </p>
          </motion.div>

          {/* 500+ hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            {...cardHover}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-1 bg-card rounded-2xl border border-border p-4 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <span className="font-display text-3xl md:text-4xl font-bold text-gradient leading-none">
              500+
            </span>
            <span className="font-body text-xs md:text-sm text-muted-foreground mt-1.5 leading-tight">
              Hour Comprehensive
              <br />
              Pilates Education
            </span>
          </motion.div>

          {/* Chicago */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            {...cardHover}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="col-span-1 bg-card rounded-2xl border border-border p-4 flex flex-col items-center justify-center text-center cursor-pointer gap-1 relative overflow-hidden"
          >
            <img
              src={CHICAGO_FLAG_URL}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />
            <span className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-none relative">
              Chicago
            </span>
            <span className="font-body text-xs md:text-sm text-muted-foreground leading-tight relative">
              Based
            </span>
          </motion.div>

          {/* Club Pilates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            {...cardHover}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="col-span-1 md:col-span-2 bg-card rounded-2xl border border-border p-4 flex flex-col items-center justify-center text-center cursor-pointer gap-1"
          >
            <span className="text-2xl">🪷</span>
            <span className="font-display text-2xl md:text-3xl font-semibold text-gradient leading-none">
              Club Pilates
            </span>
            <span className="font-body text-xs md:text-sm text-muted-foreground leading-tight">
              Home Studio
            </span>
          </motion.div>

          {/* 2+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            {...cardHover}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="col-span-1 md:col-span-2 bg-card rounded-2xl border border-border p-4 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <span className="font-display text-3xl md:text-4xl font-bold text-gradient leading-none">
              2+
            </span>
            <span className="font-body text-xs md:text-sm text-muted-foreground mt-2 leading-tight">
              Years Teaching Full Time
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
