
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";

function Grid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.getElapsedTime() % 1) * 2;
    }
  });
  
  return (
    <gridHelper 
      ref={gridRef}
      args={[40, 40, '#00AAFF', '#05070E']}
      position={[0, -2, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

function Particles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array | null>(null);
  const velocities = useRef<number[]>([]);
  const time = useRef(0);

  useEffect(() => {
    positions.current = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      // Create scattered particles
      positions.current[i] = (Math.random() - 0.5) * 20;      // x
      positions.current[i + 1] = (Math.random() - 0.5) * 20;  // y
      positions.current[i + 2] = (Math.random() - 0.5) * 20;  // z
      
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
        
        // Boundary check and wrap around
        if (Math.abs(positions.current[i]) > 10) positions.current[i] *= -0.95;
        if (Math.abs(positions.current[i + 1]) > 10) positions.current[i + 1] *= -0.95;
        if (Math.abs(positions.current[i + 2]) > 10) positions.current[i + 2] *= -0.95;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.y = time.current * 0.01;
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
        color="#00AAFF"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CircuitLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  // Create circuit-like lines
  const lines = [];
  const count = 20;
  
  for (let i = 0; i < count; i++) {
    const points: THREE.Vector3[] = [];
    const segments = Math.floor(Math.random() * 5) + 3;
    let x = (Math.random() - 0.5) * 10;
    let y = (Math.random() - 0.5) * 10;
    let z = (Math.random() - 0.5) * 10;
    
    // Create path with right-angle segments (circuit-like)
    points.push(new THREE.Vector3(x, y, z));
    
    for (let j = 0; j < segments; j++) {
      // Decide which direction to move (x, y, or z)
      const direction = Math.floor(Math.random() * 3);
      const distance = (Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      
      if (direction === 0) x += distance;
      else if (direction === 1) y += distance;
      else z += distance;
      
      points.push(new THREE.Vector3(x, y, z));
    }
    
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const color = Math.random() > 0.7 ? "#00FF41" : "#00AAFF";
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: color, 
      transparent: true, 
      opacity: Math.random() * 0.5 + 0.3
    });
    
    lines.push(
      <line key={i} geometry={lineGeometry} material={lineMaterial} />
    );
  }
  
  return <group ref={linesRef}>{lines}</group>;
}

interface ThreeSceneProps {
  showStats?: boolean;
}

const ThreeScene = ({ showStats = false }: ThreeSceneProps) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color="#00AAFF" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#00FF41" intensity={0.2} />
        
        <CircuitLines />
        <Particles />
        <Grid />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          autoRotate 
          autoRotateSpeed={0.1} 
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
