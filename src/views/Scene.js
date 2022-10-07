import { Suspense } from 'react';
import { useThree } from 'react-three-fiber';

import Lights from '../components/Lights';
import PoolTable from '../components/PoolTable';
import PoolBall from '../components/PoolBall';
import ballTextures from '../utils/ballTextures';

const points = [
  [-5, -12, 20],
  [5, -12, 20],
  [-5, 12, 20],
  [5, 12, 20],
];

const Scene = () => {
  const { camera } = useThree();

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  camera.up.set(0, 0, 1);
  camera.position.set(-6, 30, 20);

  return (
    <>
      <Lights
        type="AmbientLight"
        color={0xffffff}
        intensity={0.2}
        position={[0, 0, 0]}
      />
      {points.map(pos => (
        <Lights
          type="PointLight"
          color={0xffffff}
          intensity={0.4}
          distance={100}
          position={pos}
          castShadow
        />
      ))}
      <Suspense fallback={<mesh />}>
        <PoolTable />
      </Suspense>
      <object3D>
        <PoolBall position={[0, -16, 0]} textureURL={ballTextures.zero} />
        <PoolBall position={[-1.01, 15, 0]} textureURL={ballTextures.one} />
        <PoolBall position={[1.01, 17, 0]} textureURL={ballTextures.two} />
        <PoolBall position={[-0.51, 16, 0]} textureURL={ballTextures.three} />
        <PoolBall position={[-1.01, 17, 0]} textureURL={ballTextures.four} />
        <PoolBall position={[-2.02, 17, 0]} textureURL={ballTextures.five} />
        <PoolBall position={[1.53, 16, 0]} textureURL={ballTextures.six} />
        <PoolBall position={[0.51, 14, 0]} textureURL={ballTextures.seven} />
        <PoolBall position={[0, 15, 0]} textureURL={ballTextures.eight} />
        <PoolBall position={[0, 13, 0]} textureURL={ballTextures.nine} />
        <PoolBall position={[0.51, 16, 0]} textureURL={ballTextures.ten} />
        <PoolBall position={[2.02, 17, 0]} textureURL={ballTextures.eleven} />
        <PoolBall position={[-0.51, 14, 0]} textureURL={ballTextures.twelve} />
        <PoolBall position={[0, 17, 0]} textureURL={ballTextures.thirteen} />
        <PoolBall
          position={[-1.53, 16, 0]}
          textureURL={ballTextures.fourteen}
        />
        <PoolBall position={[1.01, 15, 0]} textureURL={ballTextures.fifteen} />
      </object3D>
    </>
  );
};

export default Scene;
