import { makeStyles } from '@mui/styles'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import Box from './Box'
import { OrbitControls } from '@react-three/drei'

const useStyle = makeStyles(() => ({
  canvas: {
    backgroundColor: 'red',
    height: '500px !important',
  },
}))

const Index = () => {
  const classes = useStyle()
  //   const scene = new THREE.Scene()
  //   console.log('scene', scene)
  //   const geometry = new THREE.SphereGeometry(15, 32, 16)
  //   const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  //   const sphere = new THREE.Mesh(geometry, material)
  //   scene.add(sphere)

  //   const camera = new THREE.PerspectiveCamera(45, 200, 400)
  //   scene.add(camera)

  //   const canvas = document.querySelector('.webgl')
  //   const renderer = new THREE.WebGLRenderer({ canvas })
  //   renderer.setSize(800, 600)
  //   renderer.render(scene, camera)

  return (
    <Canvas>
      <OrbitControls  />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Box></Box>
    </Canvas>
  )
}

export default Index
