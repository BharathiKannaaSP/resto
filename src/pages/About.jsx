import React from 'react'
import Footer from '../components/Footer'
import {Canvas} from 'react-three-fiber';
import Stand from '../components/Stand';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Navbar from '../components/Navbar';
function About() {
  return (
    <div>
      <Navbar/>
      <div style={{height:'40vh',backgroundColor:'rgba(0,0,0,.6)'}}>
        {/* Using three */}
    <Canvas  >
      {/* For zoom false in @react-three-drei */}
      <OrbitControls enableZoom={true}/>
      {/* light effects */}
      <directionalLight intensity={0.5}  />
      <ambientLight intensity={0.2} />
      {/* data a component is reading is not ready yet. React can then wait for it to be ready and update the UI. */}
      <Suspense fallback={null}>
        {/* animation file created using blender (.fbx->.glb(npx gltfjsx filename) -> import ) */}
      <Stand style={{padding:"20px"}}/>
      </Suspense>
    </Canvas>
    <div style={{backgroundColor:'rgba(0,0,0,.4)'}}>
    <center>
    <h1>Megan</h1>
    <p style={{color:'gray'}}>Age-21</p>
    <span style={{color:'#4FC'}}>7525 Mountainview St. New York, NY - 10040</span>
    </center>
    </div>
      <Footer/>
    </div>
    </div>
  )
}

export default About