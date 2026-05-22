import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";

const RustLogo = (props) => {
  const logoRef = useRef();
  const { scene } = useGLTF("/models/rust_logo/scene.gltf");
  useGSAP(() => {
    gsap.to(logoRef.current.position, {
      y: logoRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <mesh {...props}  ref={logoRef}  rotation={[0, 3.4, 0]} scale={1.8}>
      <primitive object={scene} />
    </mesh>
  );
};

export default RustLogo;
