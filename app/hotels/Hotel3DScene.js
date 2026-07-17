"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hotel3DScene({ accent = "#e0c28d", compact = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, compact ? 0.025 : 0.018);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
    camera.position.set(0, compact ? 7 : 9, compact ? 18 : 24);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const accentColor = new THREE.Color(accent);
    const gold = new THREE.MeshStandardMaterial({
      color: accentColor,
      metalness: 0.78,
      roughness: 0.26,
      emissive: accentColor,
      emissiveIntensity: 0.08,
    });
    const darkGlass = new THREE.MeshPhysicalMaterial({
      color: 0x141411,
      metalness: 0.2,
      roughness: 0.18,
      transmission: 0.16,
      transparent: true,
      opacity: 0.88,
    });
    const stone = new THREE.MeshStandardMaterial({
      color: 0x25221d,
      metalness: 0.18,
      roughness: 0.55,
    });
    const water = new THREE.MeshPhysicalMaterial({
      color: 0x2c7c82,
      metalness: 0.1,
      roughness: 0.16,
      transparent: true,
      opacity: 0.62,
      emissive: 0x0b3336,
      emissiveIntensity: 0.28,
    });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(8.4, 9.6, 0.45, 8), stone);
    base.position.y = -0.25;
    root.add(base);

    const pool = new THREE.Mesh(new THREE.CylinderGeometry(4.7, 4.7, 0.08, 96), water);
    pool.position.set(0, 0.05, 0);
    root.add(pool);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(5.15, 0.035, 10, 160), gold);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.17;
    root.add(ring);

    const towers = [
      [-4.7, 1.5, -1.2, 1.35, 3.8, 1.35],
      [-2.25, 2.2, 1.5, 1.1, 5.25, 1.1],
      [0, 2.9, -1.95, 1.28, 6.65, 1.28],
      [2.55, 2.05, 1.25, 1.05, 4.9, 1.05],
      [4.75, 1.35, -0.8, 1.25, 3.35, 1.25],
    ];

    towers.forEach(([x, y, z, w, h, d], index) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), index % 2 ? darkGlass : stone);
      tower.position.set(x, y, z);
      root.add(tower);

      const crown = new THREE.Mesh(new THREE.BoxGeometry(w * 1.08, 0.08, d * 1.08), gold);
      crown.position.set(x, y + h / 2 + 0.08, z);
      root.add(crown);

      for (let row = 0; row < Math.floor(h * 1.7); row += 1) {
        const windowBand = new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.025, 0.035), gold);
        windowBand.position.set(x, y - h / 2 + 0.55 + row * 0.48, z + d / 2 + 0.025);
        root.add(windowBand);
      }
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = compact ? 110 : 190;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = Math.random() * 12 - 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: accentColor,
        size: compact ? 0.04 : 0.055,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
      })
    );
    scene.add(particles);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffe6bd, 2.7);
    key.position.set(6, 10, 8);
    scene.add(key);

    const rim = new THREE.PointLight(accentColor, 65, 42);
    rim.position.set(-6, 5, 6);
    scene.add(rim);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      root.rotation.y = t * 0.11 + pointer.x * 0.18;
      root.rotation.x = -0.08 + pointer.y * 0.06;
      pool.scale.setScalar(1 + Math.sin(t * 1.9) * 0.018);
      ring.rotation.z = t * 0.18;
      particles.rotation.y = -t * 0.045;
      particles.rotation.x = Math.sin(t * 0.2) * 0.06;
      camera.position.x += (pointer.x * 1.25 - camera.position.x) * 0.035;
      camera.position.y += ((compact ? 7 : 9) - pointer.y * 0.7 - camera.position.y) * 0.035;
      camera.lookAt(0, 2.2, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [accent, compact]);

  return <div className="hotel-3d-scene" ref={mountRef} aria-label="Interactive 3D GoldenInn hotel model" />;
}
