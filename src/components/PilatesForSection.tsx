import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const rotatingWords = [
  "Parties",
  "Health",
  "Events",
  "Longevity",
  "Fun",
  "Everyone",
  "You",
];

const useTypewriter = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1800,
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (displayed.length < currentWord.length) {
        return {
          next: currentWord.slice(0, displayed.length + 1),
          delay: typingSpeed,
        };
      }
      return { next: displayed, delay: pauseDuration, startDeleting: true };
    }

    if (displayed.length > 0) {
      return {
        next: currentWord.slice(0, displayed.length - 1),
        delay: deletingSpeed,
      };
    }
    return { next: "", delay: typingSpeed, nextWord: true };
  }, [
    words,
    wordIndex,
    displayed,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  useEffect(() => {
    const { next, delay, startDeleting, nextWord } = tick();
    const timeout = setTimeout(() => {
      setDisplayed(next);
      if (startDeleting) setIsDeleting(true);
      if (nextWord) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [tick, words.length]);

  return displayed;
};

const offerings = [
  {
    emoji: "🏙️",
    title: "Studio Classes",
    description:
      "Come take a reformer class with me at Club Pilates chicago! Find me on the schedule at multiple studios almost every day of the week. ",
  },
  {
    emoji: "⭐️",
    title: "Private Lessons",
    description:
      "Perfect whether you are brand new to pilates and looking to improve form and feel confident or you are an advanced client looking to deepen your mind body connection!",
  },
  {
    emoji: "🏠",
    title: "In-Home Sessions",
    description:
      "I come to you! Get a personalized mat pilates workout in the comfort of your own space.",
  },
  {
    emoji: "🥂",
    title: "Parties",
    description:
      "Birthday babe? Bachelorette Trip? Baby shower? Nothing makes your party more memorable than a bonding sesh down on the mat!",
  },
  {
    emoji: "🎂",
    title: "Birthday Parties",
    description:
      "A birthday workout that's actually fun. Sweat, laugh, and celebrate with your favorite people.",
  },
  {
    emoji: "💼",
    title: "Corporate Events",
    description:
      "Energize your team with a group pilates session perfect for team building and wellness days. In person or remote!",
  },
];

const PilatesForSection = () => {
  const currentWord = useTypewriter(rotatingWords);

  return (
    <section className="py-16 md:py-20 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob-slow" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-coral-light/30 rounded-full blur-3xl animate-blob-slower" />
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
            Pilates For{" "}
            <span className="italic text-gradient">
              {currentWord}
              <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-0.5 align-baseline animate-pulse" />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 text-center border border-border hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-4xl md:text-5xl block mb-3">{item.emoji}</span>
              <h3 className="font-display text-lg md:text-2xl font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
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
