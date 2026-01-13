import { useEffect, useRef } from "react";
import gsap from "gsap";
import MarqueSacrifice3D from "./MarqueSacrifice";

interface Props {
  onComplete: () => void;
}

export default function IntroReveal({ onComplete }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 2.0,
        ease: "power3.in",
        onComplete: () => {
          document.body.style.overflow = originalOverflow;
          onComplete();
        },
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      <div className="relative z-10">
        <MarqueSacrifice3D />
      </div>
    </div>
  );
}
