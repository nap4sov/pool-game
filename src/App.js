import { Canvas } from 'react-three-fiber';
import { Stars } from '@react-three/drei';

import Scene from './views/Scene';
import Controls from './components/Controls';

function App() {
  return (
    <>
      <Canvas>
        <Stars />
        <Scene />
        <Controls />
      </Canvas>
    </>
  );
}

export default App;
