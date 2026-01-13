import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import MarqueSacrificeGLB from "../assets/3D/Sacrifice.glb";

export default function MarqueSacrifice3D() {
  const { scene } = useGLTF(MarqueSacrificeGLB);

  scene.rotation.set(0.1, 1.5, 0);
  scene.scale.set(2, 2, 2);

  return (
    <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        <primitive object={scene} />
      </Canvas>
    </div>
  );
}
