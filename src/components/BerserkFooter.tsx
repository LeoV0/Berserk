import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import EpeeGutsGLB from "../assets/3D/EpeeGuts.glb";

function GutsSword() {
    const { scene } = useGLTF(EpeeGutsGLB);
  
    scene.rotation.set(0, Math.PI / 6, 0);
    scene.scale.set(3.5, 3.5, 3.5);
  
    return <primitive object={scene} />;
  }
  
  export default function BerserkFooter() {
    return (
      <footer className="relative mt-16">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center justify-between gap-6 w-full md:w-auto">
            <div className="max-w-md">
              <p className="uppercase text-[0.65rem] md:text-xs tracking-[0.3em] text-red-800/80 mb-3">
                DERNIERS MURMURES
              </p>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                « Même si tu es brisé, tant que tu tiens encore ton épée, tu peux
                continuer à avancer. »
              </p>
            </div>
  
            <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] cursor-grab">
              <Canvas camera={{ position: [0, 0.8, 6], fov: 35 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[3, 6, 3]} intensity={1.4} />
                <directionalLight position={[-3, 3, -2]} intensity={0.7} />
                <GutsSword />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
  
          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <p className="uppercase text-[0.65rem] md:text-xs tracking-[0.25em] text-gray-400">
              CRÉÉ PAR LEO
            </p>
            <a
              href="https://github.com/LeoV0"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base text-gray-100 hover:text-red-400 transition-colors underline underline-offset-4 decoration-red-700/70"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    );
  }
  