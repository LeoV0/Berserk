import { useEffect, useRef } from "react";
import gsap from "gsap";
import BerserkTitle from "./BerserkTitle";

interface HeroProps {
  introComplete: boolean;
}

export default function Hero({ introComplete }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!introComplete) return;

    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 80, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.2,
        ease: "power4.out",
      }
    );
  }, [introComplete]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 hero-content text-center px-6">
        <BerserkTitle />
      </div>
    </div>
  );
}
