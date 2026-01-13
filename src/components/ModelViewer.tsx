    import { Canvas } from "@react-three/fiber";
    import { OrbitControls, useGLTF } from "@react-three/drei";

    interface ModelViewerProps {
    modelPath: string;
    scale?: number;
    position?: [number, number, number];
    }

    function Model({ modelPath, scale = 1, position = [0, 0, 0] }: ModelViewerProps) {
    const gltf = useGLTF(modelPath);
    return <primitive object={gltf.scene} scale={scale} position={position} />;
    }

    export default function ModelViewer({ modelPath, scale, position }: ModelViewerProps) {
    return (
        <div className="w-full h-[500px] md:h-[700px]">
        <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model modelPath={modelPath} scale={scale} position={position} />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
        </div>
    );
    }
