import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";
import BehelitModel from "../assets/3D/Behelit.glb";

function BehelitMesh({ progress }: { progress: number }) {
  const ref = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF(BehelitModel);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const anyRef = ref.current as any;
    if (anyRef._p === undefined) anyRef._p = 0;
    anyRef._p = THREE.MathUtils.lerp(anyRef._p, progress, 3 * delta);
    const p = anyRef._p;

    const baseX = 0;
    const baseY = 1;
    const baseZ = 0;

    const offsetY = -1.8 * p;
    const offsetX = Math.sin(p * Math.PI * 2) * 0.5;
    const rotation = p * Math.PI * 3;

    ref.current.position.set(baseX + offsetX, baseY + offsetY, baseZ);
    ref.current.rotation.set(0, rotation, 0);
  });

  return (
    <group ref={ref} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}

export default function BehelitFloating() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const eased = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: (t) => t * t * (3 - 2 * t),
  });

  eased.on("change", (v) => {
    setProgress(v);
  });

  const scaleCanvas = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-lg md:text-2xl tracking-[0.35em] uppercase text-red-400/80">
          L’ŒUF DU ROI
        </h2>
        <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Quand tu arrives à son niveau, le destin se met en marche.
        </p>
      </div>

      <motion.div
        className="w-full max-w-2xl h-[420px] md:h-[520px]"
        style={{ scale: scaleCanvas }}
      >
        <Canvas camera={{ position: [0, 0.3, 5], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[4, 6, 4]} intensity={0.6} />
          <directionalLight position={[-3, -4, -2]} intensity={0.25} />
          <BehelitMesh progress={progress} />
        </Canvas>
      </motion.div>
    </section>
  );
}
