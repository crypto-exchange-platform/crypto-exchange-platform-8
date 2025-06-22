
import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, Stars } from "@react-three/drei";

export const Hero: FC = () => (
  <section
    id="hero"
    className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
  >
    <div className="absolute inset-0 gradient-anim mix-blend-overlay opacity-30"></div>

    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 flicker-anim">
        Welcome to CryptoWave
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-300 overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 typewriter-anim">
        Trade. Invest. Succeed.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-200 font-semibold drop-shadow-[0_0_8px_rgba(128,0,128,0.7)] hover:drop-shadow-[0_0_20px_rgba(128,0,128,0.9)] transition">
          Get Started
        </button>
        <button className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] hover:bg-cyan-400 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] transition">
          Learn More
        </button>
      </div>
    </div>

    <div className="sparkles-container">
  {Array.from({ length: 30 }).map((_, i) => (
    <div
      key={i}
      className="sparkle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`
      }}
    />
  ))}
</div>
 

    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5], fov: 60 }}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <mesh rotation={[Math.PI / 2, 0, 0]}>  
        <icosahedronGeometry args={[1.5, 0]} />
        <MeshWobbleMaterial color="#00ffff" speed={2} factor={0.6} />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  </section>
);
 