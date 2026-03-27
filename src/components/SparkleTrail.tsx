import { useEffect, useRef, useCallback } from "react";

const COLORS = [
  "hsl(350, 65%, 65%)",
  "hsl(12, 76%, 68%)",
  "hsl(340, 40%, 80%)",
  "hsl(25, 80%, 75%)",
];

const SparkleTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  const createSparkle = useCallback((x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    const sparkle = document.createElement("div");
    const size = Math.random() * 8 + 4;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const rotation = Math.random() * 360;

    sparkle.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="transform: rotate(${rotation}deg)">
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z"/>
    </svg>`;

    Object.assign(sparkle.style, {
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
    });

    container.appendChild(sparkle);

    sparkle.animate(
      [
        { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        {
          opacity: 0,
          transform: `translate(calc(-50% + ${(Math.random() - 0.5) * 30}px), calc(-50% + ${Math.random() * 20 + 10}px)) scale(0)`,
        },
      ],
      { duration: 600, easing: "ease-out" }
    ).onfinish = () => sparkle.remove();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn.current < 50) return;
      lastSpawn.current = now;
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [createSparkle]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default SparkleTrail;
