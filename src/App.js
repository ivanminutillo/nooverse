import { Suspense, useCallback, useMemo, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import "./index.css"
import {OrbitControls} from '@react-three/drei'


// Create a function named Grid that generate a grid of 30x30 cubes
function Grid() {
  const grid = useMemo(() => {
    const array = []
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 30; j++) {
        array.push(
          <mesh receiveShadow key={Math.random() * 5} position={[(i/2)-15, 2, (j/2)-10]}>
            <boxBufferGeometry attach="geometry" args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial attach="material" metalness={0.3} roughness={0.8} color="hotpink" emissive={'#000000'} />
          </mesh>
        )
      }
    }
    return array
  }, [])
  return <>{grid}</>
}


function App() {
  return (
    <div className="container">
    <Canvas camera={{ fov: 50, position: [0, 20, 20] }} >
      {/* Add light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Add orbit controls */}
      <OrbitControls />      
      <Suspense fallback={<div>"Loading..."</div>}>
        <Grid />
      </Suspense>
    </Canvas>
    </div>
  )
}

export default App