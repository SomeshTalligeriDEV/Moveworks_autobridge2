import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const RotatingCube = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox
        ref={meshRef}
        args={[1 * scale, 1 * scale, 1 * scale]}
        position={position}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
        />
      </RoundedBox>
    </Float>
  );
};

const ConnectorLine = ({ start, end }) => {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#FF8B7B" linewidth={2} />
    </line>
  );
};

const Scene3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFB8A8" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} castShadow />
        
        {/* Central Hub */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
          <RoundedBox args={[2, 2, 2]} radius={0.2} smoothness={4} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#FF8B7B"
              roughness={0.1}
              metalness={0.9}
              emissive="#FF8B7B"
              emissiveIntensity={0.3}
            />
          </RoundedBox>
        </Float>

        {/* Orbiting Cubes */}
        <RotatingCube position={[-3, 1, 0]} color="#FFB8A8" scale={0.7} />
        <RotatingCube position={[3, -1, 0]} color="#FFA996" scale={0.7} />
        <RotatingCube position={[0, 2.5, -2]} color="#FF9F8E" scale={0.6} />
        <RotatingCube position={[0, -2.5, 2]} color="#FFD6CC" scale={0.6} />

        {/* Connector Lines */}
        <ConnectorLine start={[0, 0, 0]} end={[-3, 1, 0]} />
        <ConnectorLine start={[0, 0, 0]} end={[3, -1, 0]} />
        <ConnectorLine start={[0, 0, 0]} end={[0, 2.5, -2]} />
        <ConnectorLine start={[0, 0, 0]} end={[0, -2.5, 2]} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;