import  { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaRef.current) return;
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE: THREE, 
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x101010,
      midtoneColor: 0x101010,
      lowlightColor: 0x9d9d9d,
      baseColor: 0x101010,
      blurFactor: 0.19,
      speed: 0.4,
      zoom: 1,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
