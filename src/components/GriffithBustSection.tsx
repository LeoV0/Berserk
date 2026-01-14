import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import GriffithBustViewer from "./GriffithBustViewer";
import GriffithBustGLB from "../assets/3D/GriffithFemto.glb";

export default function GriffithBustSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  
  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0" />

      <div className="w-full max-w-4xl mx-auto text-center mb-12 relative z-10">

        <motion.h2
          className="mt-3 text-lg md:text-2xl tracking-[0.35em] uppercase text-red-400/80 "
        >
          GRIFFITH
        </motion.h2>

        <motion.p
          className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Celui qui rêvait d’un royaume, et qui a offert tout ce qu’il avait pour le toucher.
        </motion.p>
      </div>

      <motion.div
        className="w-full max-w-2xl h-[420px] md:h-[520px] relative z-10"
      >
        <GriffithBustViewer
          modelPath={GriffithBustGLB}
          scrollProgress={scrollYProgress}
        />
      </motion.div>
    </section>
  );
}
