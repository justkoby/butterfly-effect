import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const ParticleSwarm = () => {
  const meshRef = useRef();
  const count = 12000; // Slightly reduced for performance on web
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor; 
  
  const positions = useMemo(() => {
     const pos = [];
     for(let i=0; i<count; i++) pos.push(new THREE.Vector3((Math.random()-0.5)*100, (Math.random()-0.5)*100, (Math.random()-0.5)*100));
     return pos;
  }, []);

  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.18), []);

  const PARAMS = useMemo(() => ({"scale":4.5,"pulse":1.8,"glow":0.95}), []);
  const addControl = (id, l, min, max, val) => {
      return PARAMS[id] !== undefined ? PARAMS[id] : val;
  };
  const setInfo = () => {};
  const annotate = () => {};

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;

    for (let i = 0; i < count; i++) {
        const scale = addControl("scale", "Jellyfish Scale", 1, 15, 6);
        const pulseRate = addControl("pulse", "Swim Speed", 0.1, 5, 1.8);
        const bioGlow = addControl("glow", "Bioluminescence", 0, 1, 0.95);
        
        const p = i / count;
        const theta = i * 2.39996323;
        
        let x = 0, y = 0, z = 0;
        let h = 0, s = 0, l = 0;
        
        const t = time * pulseRate;
        const contraction = Math.pow(Math.max(0, Math.sin(t)), 4);
        const swimOffset = Math.sin(t - 1.0) * 1.5;
        
        if (p < 0.40) {
        const u = p / 0.40;
        y = 4 - 4 * u;
        let r = 5 * Math.sqrt(Math.max(0, 1 - Math.pow(1 - u, 2)));
        r += contraction * u * 1.5; 
        
        const rimRipple = (u > 0.8) ? Math.sin(theta * 30 + time * 3) * 0.15 * (u - 0.8) : 0;
        r += rimRipple;
        
        x = r * Math.cos(theta);
        z = r * Math.sin(theta);
        
        // Shades of pink
        h = 0.92 + u * 0.05; 
        s = 0.8;
        l = 0.4 + 0.3 * bioGlow * (1 - u) + contraction * 0.1;
        }
        else if (p < 0.55) {
        const u = (p - 0.40) / 0.15;
        const lobe = Math.pow(Math.abs(Math.sin(theta * 2)), 0.5);
        y = 2.5 - 2.5 * u; 
        
        let r = 2.0 * lobe * Math.sin(u * Math.PI);
        r *= 1.0 - contraction * 0.2; 
        
        x = r * Math.cos(theta);
        z = r * Math.sin(theta);
        
        const pulseGlow = Math.max(0, Math.sin(t + u * 2));
        h = 0.95 + Math.sin(time * 0.5) * 0.03; 
        s = 0.9;
        l = 0.5 + 0.4 * bioGlow * pulseGlow;
        }
        else if (p < 0.75) {
        const u = (p - 0.55) / 0.20;
        y = 1.0 - 9 * u;
        const spiral = u * 15 + theta * 0.1;
        const wave = Math.sin(t - u * 6);
        
        let r = 0.2 + 1.2 * Math.pow(1 - u, 2) + Math.abs(Math.sin(theta * 40)) * 0.3;
        r *= 1.0 - contraction * 0.1;
        
        x = r * Math.cos(spiral) + wave * 0.8 * u;
        z = r * Math.sin(spiral) + wave * 0.8 * u;
        
        h = 0.98 - u * 0.1;
        s = 0.7;
        l = 0.3 + 0.5 * bioGlow * Math.pow(1 - u, 2);
        }
        else {
        const u = (p - 0.75) / 0.25;
        const numTentacles = 32;
        const tIndex = i % numTentacles;
        const tAngle = (tIndex / numTentacles) * Math.PI * 2;
        
        y = 0 - 16 * u; 
        
        const baseR = 5 + contraction * 1.5;
        
        const delay = u * 8;
        const driftX = Math.sin(t * 0.7 - delay + tIndex) * (1 + u * 5);
        const driftZ = Math.cos(t * 0.9 - delay + tIndex) * (1 + u * 5);
        
        x = baseR * Math.cos(tAngle) + driftX;
        z = baseR * Math.sin(tAngle) + driftZ;
        
        const microOffset = Math.sin(i * 137.5) * 0.06;
        x += microOffset;
        z += microOffset;
        
        const biolumPulse = Math.max(0, Math.sin(t * 2 - u * 12));
        
        h = 0.93;
        s = 0.8;
        l = 0.3 + 0.5 * bioGlow * biolumPulse * Math.pow(1 - u, 0.5);
        }
        y += swimOffset;
        
        target.set(x * scale, y * scale, z * scale);
        color.setHSL(h, s, Math.max(0, Math.min(1, l)));
        
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

export default function JellyfishSimulation() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFF', borderRadius: '32px', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 80], fov: 60 }}>
        <fog attach="fog" args={['#FFFFFF', 0.01]} />
        <ParticleSwarm />
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
        <Effects disableGamma>
            <unrealBloomPass threshold={0.5} strength={1.2} radius={0.8} />
        </Effects>
      </Canvas>
    </div>
  );
}
