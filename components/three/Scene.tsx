"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import * as THREE from "three";

// Spotlight beam cone
function SpotlightBeam() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 3, 0]}>
      {/* Main spotlight cone */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[4, 8, 64, 1, true]} />
        <meshBasicMaterial
          color="#FFB800"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Inner brighter cone */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[2.5, 7, 64, 1, true]} />
        <meshBasicMaterial
          color="#FFD666"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Core bright cone */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[1.2, 6, 64, 1, true]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// Light source at top
function LightSource() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Float
      speed={prefersReducedMotion ? 0 : 2}
      rotationIntensity={0}
      floatIntensity={prefersReducedMotion ? 0 : 0.3}
    >
      <group position={[0, 3.5, 0]}>
        {/* Outer glow */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial
            color="#FFD666"
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Inner bright core */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial
            color="#FFFFFF"
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Lens flare rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1, 1.2, 64]} />
          <meshBasicMaterial
            color="#FFB800"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Floating particles in the light beam
function LightParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2;
      const y = Math.random() * -6;
      temp.push({
        position: [
          Math.cos(angle) * radius * (1 + y * -0.15),
          y,
          Math.sin(angle) * radius * (1 + y * -0.15)
        ] as [number, number, number],
        scale: 0.02 + Math.random() * 0.04,
        speed: 0.5 + Math.random() * 1,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.children.forEach((child, i) => {
        const particle = particles[i];
        if (particle) {
          child.position.y = particle.position[1] + Math.sin(state.clock.elapsedTime * particle.speed + particle.offset) * 0.3;
          (child as THREE.Mesh).material = (child as THREE.Mesh).material || {};
          const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          mat.opacity = 0.3 + Math.sin(state.clock.elapsedTime * particle.speed + particle.offset) * 0.2;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshBasicMaterial color="#FFD666" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// Ground glow effect
function GroundGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <circleGeometry args={[4, 64]} />
      <meshBasicMaterial
        color="#FFB800"
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </mesh>
  );
}

export function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 5, 0]} intensity={2} color="#FFB800" distance={15} />

      <SpotlightBeam />
      <LightSource />
      <LightParticles />
      <GroundGlow />
    </Canvas>
  );
}
