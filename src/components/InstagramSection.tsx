import { motion } from "framer-motion";
import { Instagram, Mail, Music2 } from "lucide-react";

import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";

const posts = [
  {
    src: insta1,
    alt: "Blue-lit studio session",
    url: "https://www.instagram.com/p/DVwDoJajWcy/",
  },
  {
    src: insta2,
    alt: "Reformer long stretch",
    url: "https://www.instagram.com/p/DKnA2u5sIqa/",
  },
  {
    src: insta3,
    alt: "Studio mirror selfie",
    url: "https://www.instagram.com/p/DKHt-BetiT7/",
  },
];

const InstagramSection = () => {
  return (
    <section id="contact" className="py-16 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            Follow the <span className="italic text-gradient">Flow</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Find my full Club Pilates schedule and information about private
            reformer sessions on my Insta
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          <motion.a
            href="https://instagram.com/maddyxpilates"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-body font-medium text-base hover:shadow-lg transition-shadow"
          >
            <Instagram className="w-5 h-5" />
            @maddyxpilates
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@maddyxpilates"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 text-secondary-foreground px-7 py-3.5 rounded-full font-body font-medium text-base hover:shadow-lg transition-shadow bg-rose-300"
          >
            <Music2 className="w-5 h-5" />
            @maddyxpilates
          </motion.a>
          <a
            href="mailto:rohnmaddy@gmail.com"
            className="inline-flex items-center gap-2.5 text-accent-foreground px-7 py-3.5 rounded-full font-body font-medium text-base hover:shadow-lg hover:scale-105 active:scale-95 transition-all bg-rose-200"
          >
            <Mail className="w-5 h-5" />
            rohnmaddy@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
