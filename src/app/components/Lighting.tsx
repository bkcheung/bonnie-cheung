export default function Lighting() {
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
