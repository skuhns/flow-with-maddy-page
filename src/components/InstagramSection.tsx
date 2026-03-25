import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";

const posts = [
  { src: insta1, alt: "Blue-lit studio session", url: "https://www.instagram.com/p/DVwDoJajWcy/" },
  { src: insta2, alt: "Reformer long stretch", url: "https://instagram.com/maddyxpilates" },
  { src: insta3, alt: "Studio mirror selfie", url: "https://instagram.com/maddyxpilates" },
];

const InstagramSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground">
            Follow the <span className="italic text-primary">Flow</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Join the community on Instagram
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
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/maddyxpilates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-lg hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            @maddyxpilates
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
