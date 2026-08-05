'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Biconvex lens shape (revolution of a 2D profile via LatheGeometry)
// ---------------------------------------------------------------------------
function useLensGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape();
    const w = 1.2;
    const h = 0.9;
    shape.moveTo(-w, 0);
    shape.quadraticCurveTo(-w * 0.3, h, 0, h);
    shape.quadraticCurveTo(w * 0.3, h, w, 0);
    shape.quadraticCurveTo(w * 0.3, -h, 0, -h);
    shape.quadraticCurveTo(-w * 0.3, -h, -w, 0);
    return new THREE.LatheGeometry(shape.getPoints(64), 128, 0, Math.PI * 2);
  }, []);
}

// ---------------------------------------------------------------------------
// Precision Glass Lens with mounting ring
// ---------------------------------------------------------------------------
function PrecisionLens() {
  const groupRef = useRef<THREE.Group>(null);
  const lensGeo = useLensGeometry();
  const ringGeo = useMemo(() => new THREE.TorusGeometry(0.93, 0.055, 16, 100), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <Float speed={0.7} rotationIntensity={0.06} floatIntensity={0.12}>
      <group ref={groupRef}>
        {/* Glass lens body */}
        <mesh geometry={lensGeo} scale={1.0}>
          <meshPhysicalMaterial
            transmission={0.98}
            roughness={0.02}
            metalness={0}
            ior={1.52}
            clearcoat={1}
            clearcoatRoughness={0.08}
            thickness={0.8}
            color="#F5F8FC"
            attenuationColor="#E8F0FF"
            attenuationDistance={12.0}
          />
        </mesh>

        {/* Silver mounting ring */}
        <mesh geometry={ringGeo} scale={1.0}>
          <meshStandardMaterial
            color="#C8D4E0"
            metalness={0.88}
            roughness={0.22}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ---------------------------------------------------------------------------
// Light beam passing through the lens (enters left, refracts slightly right)
// ---------------------------------------------------------------------------
function LightBeam() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Incoming beam — horizontal, left side */}
      <mesh position={[-2.8, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 2.8, 8]} />
        <meshBasicMaterial
          color="#00D9FF"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Beam glow at entrance */}
      <mesh position={[-2.0, 0, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.85} />
      </mesh>

      {/* Outgoing beam — slightly refracted upward */}
      <mesh position={[2.1, 0.08, 0.08]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.025, 0.025, 2.8, 8]} />
        <meshBasicMaterial
          color="#00D9FF"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Beam glow at exit */}
      <mesh position={[2.0, 0.05, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Faint blue scan line — vertical plane sweeping left to right (low opacity)
// ---------------------------------------------------------------------------
function ScanLine() {
  const ref = useRef<THREE.Mesh>(null);
  const progress = useRef(-1.2);

  useFrame((_, delta) => {
    progress.current += delta * 0.35;
    if (progress.current > 1.8) progress.current = -1.2;

    if (ref.current) {
      ref.current.position.x = progress.current * 2.5;
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      const dist = Math.abs(progress.current);
      mat.opacity = 0.04 * (1 - dist / 1.8);
    }
  });

  return (
    <mesh ref={ref} position={[-3, 0, 0.05]} rotation={[0, 0, 0]}>
      <planeGeometry args={[0.04, 2.8]} />
      <meshBasicMaterial
        color="#00D9FF"
        transparent
        opacity={0.03}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

// ---------------------------------------------------------------------------
// Main export — wrapped in dynamic(...) in Hero.tsx
// ---------------------------------------------------------------------------
export default function LensScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 5, 5]} intensity={1.1} color="#FFFFFF" />
      <directionalLight position={[0, 8, 8]} intensity={0.6} color="#FFFFFF" />
      <pointLight position={[-6, 4, 3]} intensity={0.8} color="#00D9FF" />
      <pointLight position={[4, -3, -1]} intensity={0.35} color="#0B6CFF" />
      <PrecisionLens />
      <LightBeam />
      <ScanLine />
      <Environment preset="studio" environmentIntensity={0.45} />
    </Canvas>
  );
}
