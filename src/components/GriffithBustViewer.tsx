import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface GriffithBustProps {
  modelPath: string;
  scrollProgress: MotionValue<number>;
}

function Bust({ modelPath }: GriffithBustProps) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.rotation.set(0, -1.5, 0);
    ref.current.position.set(0, 0, 0);
    ref.current.scale.set(1.8, 1.8, 1.8);
  }, [scene]);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();
    const baseY = -1.5;
    const amplitude = 0.15;
    const speed = 0.3;

    ref.current.rotation.y = baseY + Math.sin(t * speed) * amplitude;
  });

  return <primitive ref={ref} object={scene} />;
}

export default function GriffithBustViewer({
  modelPath,
  scrollProgress,
}: GriffithBustProps) {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
        <ambientLight intensity={0.6} />

        <spotLight
          position={[2, 4, 3]}
          angle={0.5}
          penumbra={0.8}
          intensity={3}
          color="#f0e0ff"
          castShadow
        />

        <pointLight position={[-2, 2, -2]} intensity={1.5} color="#e0c0ff" />

        <Bust modelPath={modelPath} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
