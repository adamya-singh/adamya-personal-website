
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";

function Particles({ count = 3000 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array | null>(null);
  const velocities = useRef<number[]>([]);
  const time = useRef(0);

  useEffect(() => {
    positions.current = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      // Create a sphere of particles
      const radius = Math.random() * 4 + 2;
      const phi = Math.acos(-1 + Math.random() * 2);
      const theta = Math.random() * Math.PI * 2;
      
      positions.current[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i + 2] = radius * Math.cos(phi);
      
      velocities.current[i] = (Math.random() - 0.5) * 0.002;
      velocities.current[i + 1] = (Math.random() - 0.5) * 0.002;
      velocities.current[i + 2] = (Math.random() - 0.5) * 0.002;
    }
  }, [count]);

  useFrame(() => {
    time.current += 0.01;
    
    if (mesh.current && positions.current) {
      for (let i = 0; i < count * 3; i += 3) {
        // Orbital motion
        positions.current[i] += velocities.current[i];
        positions.current[i + 1] += velocities.current[i + 1];
        positions.current[i + 2] += velocities.current[i + 2];
        
        // Boundary check and reverse direction when hit
        if (Math.abs(positions.current[i]) > 6) velocities.current[i] *= -1;
        if (Math.abs(positions.current[i + 1]) > 6) velocities.current[i + 1] *= -1;
        if (Math.abs(positions.current[i + 2]) > 6) velocities.current[i + 2] *= -1;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.y = time.current * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current as Float32Array}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RotatingWireframeObjects() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Icosahedron */}
      <mesh position={[0, 0, 0]} scale={0.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial 
          color="#3B82F6" 
          wireframe 
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Octahedron */}
      <mesh position={[1.5, -0.5, 0.5]} scale={0.4} rotation={[0, Math.PI/4, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
          color="#EC4899" 
          wireframe 
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Tetrahedron */}
      <mesh position={[-1.5, 0.5, -0.5]} scale={0.4} rotation={[Math.PI/6, 0, Math.PI/4]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
          color="#10B981" 
          wireframe 
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

interface ThreeSceneProps {
  showStats?: boolean;
}

const ThreeScene = ({ showStats = false }: ThreeSceneProps) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} />
        
        <RotatingWireframeObjects />
        <Particles />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          autoRotate 
          autoRotateSpeed={0.3} 
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
          enableRotate={false}
        />
        {showStats && <Stats />}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
