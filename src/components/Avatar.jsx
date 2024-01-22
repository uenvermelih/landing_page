/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/model.glb -o src/components/Avatar.jsx -r public 
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useFBX, useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useControls } from 'leva'
import { useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Avatar(props) {
  
  const { nodes, materials } = useGLTF('/models/model.glb')

  const { playAudio, script } = useControls({
    playAudio: false,
    script: { value: "Audio" },

  })

  const audio = useMemo(() => new Audio(`/audio/${script}.mp3`), [script])

  useEffect(() => {
    if (playAudio) {
      console.log("play audio");
      audio.play()
    } else {
      audio.pause()
      console.log("pause audio");
    }
  }, [playAudio])

  
  
  
  const { animations } = useFBX('/animations/Idle.fbx')
  const { actions } = useAnimations(animations, nodes.mixamorigHips)
  
  nodes.mixamorigHips.scale.set(60, 60, 60); // increases the size of the model

  React.useEffect(() => {
    if (actions && actions['mixamo.com']) {
      actions['mixamo.com'].play();
    } else {
      console.error('"mixamo.com" animation not found');
    }
  }, [actions])
  

  useEffect(() => {console.log(nodes)}, []);


  const ref = useRef()
  const tl = useRef()

  const scroll = useScroll()

  useFrame(() => { tl.current.seek(scroll.offset * tl.current.duration()) })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.position, 
      { duration: 3, 
        x: -7,
        z: 3,
       },
        0
    )

    tl.current.to(
      ref.current.rotation,
      { duration: 3,
        y: 0.8,
      },
    0
    )

  }, [])


  return (

    <group {...props} dispose={null} ref={ref}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh geometry={nodes.model_T.geometry} material={materials.Body} skeleton={nodes.model_T.skeleton} />
    </group>
  )
}

useGLTF.preload('/models/model.glb')
