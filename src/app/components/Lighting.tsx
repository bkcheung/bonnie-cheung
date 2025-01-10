import React from "react";

function Lighting() {
  return (
    <group>
      <directionalLight position={[-10, 30, 10]} intensity={1} />
      <directionalLight position={[-10, 30, -10]} intensity={1} />
      <directionalLight position={[10, 30, 10]} intensity={1} />
      <directionalLight position={[10, 30, -10]} intensity={1} />
      <ambientLight />
    </group>
  );
}

export default React.memo(Lighting);
