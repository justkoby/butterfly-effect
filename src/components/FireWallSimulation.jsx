import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const ParticleSwarm = () => {
  const meshRef = useRef();
  const count = 15000; // Optimized for background
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor; 
  
  const positions = useMemo(() => {
     const pos = [];
     for(let i=0; i<count; i++) pos.push(new THREE.Vector3((Math.random()-0.5)*400, (Math.random()-0.5)*400, (Math.random()-0.5)*400));
     return pos;
  }, []);

  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.35), []);

  const PARAMS = useMemo(() => ({"width":600,"height":250,"separation":20,"speed":1.2}), []);
  const addControl = (id, l, min, max, val) => {
      return PARAMS[id] !== undefined ? PARAMS[id] : val;
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;

    for (let i = 0; i < count; i++) {
        const wallWidth = addControl("width", "Wall Width", 100, 800, 450);
        const wallHeight = addControl("height", "Flame Height", 50, 400, 180);
        const separation = addControl("separation", "Separation", 0, 50, 25);
        const burnSpeed = addControl("speed", "Burn Speed", 0, 5, 1.8);
        
        const t = time * burnSpeed;
        
        const layer = i % 3;
        const layerOffset = (layer - 1) * 15; 
        
        const xBase = ((i % (count / 3)) / (count / 3) * 2.0 - 1.0) * (wallWidth * 0.5);
        const yBase = -80;
        
        const yPosBase = (i % 120) / 120 * wallHeight; 
        const tempRatio = Math.max(0, Math.min(1.0, yPosBase / wallHeight));
        const finalY = yBase + yPosBase + (tempRatio * tempRatio * 40);
        
        const layerTime = t + layer * 0.5;
        const sepFactor = Math.pow(tempRatio, 2.5);
        const noiseX = Math.sin(xBase * 0.04 + finalY * 0.08 - layerTime * 4.0) * separation * sepFactor;
        
        target.set(xBase + noiseX, finalY, layerOffset + Math.sin(xBase * 0.02 + layerTime) * 8);
        
        // Fire colors (Red to Yellow)
        const hue = (0.12 - layer * 0.02) * (1.0 - tempRatio); 
        const saturation = 0.9 + layer * 0.05;
        const fadeOut = 1.0 - Math.pow(tempRatio, 5.0); 
        const lightness = (0.85 * (1.0 - tempRatio * 0.6)) * fadeOut;
        
        color.setHSL(hue, saturation, Math.max(0, lightness));
        
        positions[i].lerp(target, 0.1);
        dummy.position.copy(positions[i]);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]} />
  );
};

export default function FireWallSimulation() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.6 }}>
      <Canvas camera={{ position: [0, 0, 150], fov: 60 }} alpha={true}>
        <ParticleSwarm />
        <Effects disableGamma>
            <unrealBloomPass threshold={0} strength={1.2} radius={0.5} />
        </Effects>
      </Canvas>
    </div>
  );
}
