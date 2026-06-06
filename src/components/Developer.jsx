import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";

export default function Developer(props) {
  const group = useRef();

  const { scene } = useGLTF(
    "/avatar/avatar-VT5H0OTHWKvhfPpspfp4.glb"
  );

  const { animations } = useFBX("/avatar/Breakdance.fbx");

  animations[0].name = "idle";

  // Fix Mixamo bone names
  animations[0].tracks.forEach((track) => {
    track.name = track.name.replace("mixamorig", "");
  });

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.idle?.reset().fadeIn(0.5).play();
  }, [actions]);

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/avatar/avatar-VT5H0OTHWKvhfPpspfp4.glb");