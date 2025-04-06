
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";

function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array | null>(null);
  const velocities = useRef<number[]>([]);
  const time = useRef(0);

  useEffect(() => {
    positions.current = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      // Create a sphere of particles
      const radius = Math.random() * 4 + 1;
      const phi = Math.acos(-1 + Math.random() * 2);
      const theta = Math.random() * Math.PI * 2;
      
      positions.current[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i + 2] = radius * Math.cos(phi);
      
      velocities.current[i] = (Math.random() - 0.5) * 0.005;
      velocities.current[i + 1] = (Math.random() - 0.5) * 0.005;
      velocities.current[i + 2] = (Math.random() - 0.5) * 0.005;
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
        if (Math.abs(positions.current[i]) > 5) velocities.current[i] *= -1;
        if (Math.abs(positions.current[i + 1]) > 5) velocities.current[i + 1] *= -1;
        if (Math.abs(positions.current[i + 2]) > 5) velocities.current[i + 2] *= -1;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.y = time.current * 0.05;
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
        size={0.05}
        color="#8B5CF6"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RotatingBox() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#10B981" 
        wireframe 
        emissive="#10B981"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function FloatingTetrahedron() {
  const mesh = useRef<THREE.Mesh>(null);
  const time = useRef(0);
  
  useFrame(() => {
    time.current += 0.01;
    if (mesh.current) {
      mesh.current.position.y = Math.sin(time.current) * 0.5;
      mesh.current.rotation.z += 0.01;
      mesh.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={mesh} position={[2, 0, -1]}>
      <tetrahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial 
        color="#EC4899" 
        wireframe 
        emissive="#EC4899"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  const time = useRef(0);
  
  useFrame(() => {
    time.current += 0.01;
    if (mesh.current) {
      mesh.current.position.y = Math.cos(time.current) * 0.5;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={[-2, 0, 1]}>
      <sphereGeometry args={[0.7, 16, 16]} />
      <meshStandardMaterial 
        color="#3B82F6" 
        wireframe 
        emissive="#3B82F6"
        emissiveIntensity={0.5}
      />
    </mesh>
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
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <RotatingBox />
        <FloatingTetrahedron />
        <FloatingSphere />
        <Particles />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          autoRotate 
          autoRotateSpeed={0.5} 
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
        {showStats && <Stats />}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
