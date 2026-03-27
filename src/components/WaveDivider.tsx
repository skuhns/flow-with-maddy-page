import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fill: string;
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({
  fill,
  flip = false,
  className,
}: WaveDividerProps) => {
  return (
    <div
      className={cn(
        "w-full leading-[0] pointer-events-none relative z-10",
        flip ? "-mt-[1px] -mb-[40px] md:-mb-[70px]" : "-mb-[1px] -mt-[40px] md:-mt-[70px]",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[70px] block"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C180,90 360,10 540,50 C720,90 900,20 1080,55 C1200,75 1350,30 1440,45 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
