import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  reverse?: boolean;
  className?: string;
}

const phrases = [
  "FEEL THE BURN",
  "GOOD VIBES ONLY",
  "PILATES IS FOR EVERYBODY",
  "MUSIC ON, STRESS OFF",
  "MOVE YOUR BODY",
  "FLOW STATE",
  "STRONG IS THE NEW PRETTY",
  "SWEAT & SPARKLE",
  "PILATES PRINCESS",
  "CORE & CONFIDENCE",
  "HOT GIRL PILATES",
  "STRETCH IT OUT",
];

const separator = " ✦ ";

const MarqueeStrip = ({ reverse = false, className }: MarqueeStripProps) => {
  const content = phrases.join(separator) + separator;

  return (
    <div
      className={cn(
        "overflow-hidden bg-primary text-primary-foreground py-3 select-none",
        className
      )}
    >
      <div
        className={cn(
          "flex whitespace-nowrap",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-sm md:text-base tracking-[0.2em] uppercase"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
