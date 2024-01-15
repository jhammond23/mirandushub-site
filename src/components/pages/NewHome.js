import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshWobbleMaterial } from '@react-three/drei';

const YellowLight = ({ offset = 0, direction = 1 }) => {
  const ref = useRef();
  const { clock } = useThree();

  useFrame(() => {
    const radius = 7;
    const angle = direction * clock.getElapsedTime() + offset;
    ref.current.position.set(radius * Math.cos(angle), radius * Math.sin(angle), 0);
  });

  return <pointLight ref={ref} color="gold" distance={100} intensity={0.5} />;
};

const Materium = ({ onClick }) => {
  const mesh = useRef();
  const { clock, mouse } = useThree();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const targetScale = 50;
  const scaleIncrement = 0.035; // Adjust zoom speed here
  const spiralSpeed = 5; // Adjust spiral speed here

  const startPosition = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (isAnimating) {
      const angle = clock.getElapsedTime() * spiralSpeed;
      const spiralX = startPosition.current.x + 7 * Math.cos(angle);
      const spiralY = startPosition.current.y + 7 * Math.sin(angle);

      mesh.current.position.set(spiralX, spiralY, 0);

      const currentScale = mesh.current.scale.x;
      const newScale = currentScale + scaleIncrement;

      if (newScale >= targetScale) {
        setIsAnimating(false);
        mesh.current.scale.set(targetScale, targetScale, targetScale);
      } else {
        mesh.current.scale.set(newScale, newScale, newScale);
      }
    } else {
      mesh.current.rotation.y = mouse.x * Math.PI * 0.25;
      mesh.current.rotation.x = mouse.y * Math.PI * 0.25;
      mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
    }
  });

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsAnimating(true);
    startPosition.current = { x: mesh.current.position.x, y: mesh.current.position.y };
    onClick();
  };

  return (
    <group ref={mesh} onClick={handleClick}>
      <mesh
        className={isHovered ? 'MTRMball-hover' : 'MTRMball'} // Apply CSS class based on hover state
        onPointerOver={handleHover}
        onPointerOut={handleUnhover}
        onPointerDown={(event) => event.stopPropagation()} // Prevent OrbitControls from interfering with pointer down event
      >
        <Sphere args={[5, 32, 32]}>
          <meshStandardMaterial color="black" />
        </Sphere>
      </mesh>
      <mesh>
        <Sphere args={[5.3, 32, 32]}>
          <MeshWobbleMaterial
            color="purple"
            attach="material"
            speed={1}
            factor={0.6}
            roughness={10}
            metalness={0.1}
            transparent
            opacity={0.05}
          />
        </Sphere>
      </mesh>
    </group>
  );
};

const Scene = () => {
  const [isPostClicked, setIsPostClicked] = useState(false);

  const handleSphereClick = () => {
    setTimeout(() => {
      setIsPostClicked(true);
    }, 1000);
  };

  return (
    <div className={`newhome ${isPostClicked ? 'postClickedScreen' : ''}`}>
<Canvas
  style={{ height: '100vh', width: '100vw' }}
  camera={{ position: [0, 0, 15] }}
  onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
>
  <fog attach="fog" args={['yellow', 50, 50]} />
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />
  <YellowLight offset={0} direction={1} />
  <YellowLight offset={Math.PI} direction={-1} />
  <Materium onClick={handleSphereClick} />
  <OrbitControls enableZoom={false} />
</Canvas>

      {isPostClicked && <div className="fade-in-text">Welcome to Mirandus Hub</div>}
    </div>
  );
};

export default Scene;
