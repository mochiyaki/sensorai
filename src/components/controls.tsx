import { useEffect, useRef, RefObject } from 'react';
import { CameraControls } from '@react-three/drei';

interface ControlsProps {
  // Expected to be an array of three numbers for position and three for target.
  lookAt: [number, number, number, number, number, number];
}

export default function Controls({ lookAt }: ControlsProps) {
  const controls = useRef<CameraControls>(null);

  useEffect(() => {
    if (controls.current) {
      // spread the six numbers: position x,y,z then target x,y,z
      controls.current.setLookAt(...lookAt, true);
    }
  }, [lookAt]);

  return <CameraControls ref={controls as RefObject<CameraControls>} dollyToCursor />;
}
