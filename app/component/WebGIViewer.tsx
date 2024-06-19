"use client"

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck,
    AssetManagerBasicPopupPlugin,
    CanvasSnipperPlugin,
    FileTransferPlugin,
    IViewerApp,
    TweakpaneUiPlugin,
    IViewerPlugin
    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation';

interface Props { 
  props : any
  ref : any
}

// eslint-disable-next-line react/display-name
const WebGIViewer = forwardRef((props : any, ref) => {
  const canvasRef = useRef<any>(null)
  const [viewerRef, setViewerRef] = useState<any>(null)
  const [cameraRef, setCameraRef] = useState<any>(null)
  const [positionRef, setPositionRef] = useState<any>(null)
  const [targetRef, setTargetRef] = useState<any>(null)
  const [preview, setPreview] = useState(false)
  const [isMobile, setIsMobile] = useState<any>(null)
  const canvasContainerRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    
    triggerPreview() {
      props.container.current.style.opacity = "0"
      canvasContainerRef.current.style.pointerEvents = "all"
      setPreview(true)

      gsap.to(positionRef, {
        x: isMobile ? -0.18 : -0.0099285421,
        y: isMobile ? 14.96 : 7.5170077583,
        z: isMobile ? 12.02 : 4.9140278897,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty()
          cameraRef.positionTargetUpdated(true)
        }
      })

      gsap.to(targetRef, {
        x: isMobile ? -0.18 : 0,
        y: isMobile ? 0.07 : 0.00,
        z: isMobile ? -0.12 : 0.00,
        duration: 2,
      })

      
      viewerRef.scene.activeCamera.setCameraOptions({controlsEnabled : true})
    }
  }))


  gsap.registerPlugin(ScrollTrigger)

  const memorizedScrollAnimation = useCallback((position : any, target : any, isMobile : any ,onUpdate : any) => {
    if(position && target && onUpdate) {
        scrollAnimation(position, target, isMobile ,onUpdate)
    }
  }, [])
  
  const setupViewer = useCallback(async () => {
    
    const viewer : any = new ViewerApp({
        canvas : document.getElementById("canvas") as HTMLCanvasElement,
    })

    setViewerRef(viewer)

    const isMobileOrTablet = mobileAndTabletCheck()

    setIsMobile(isMobileOrTablet)


    const manager = await viewer.addPlugin(AssetManagerPlugin)

    const camera = viewer.scene.activeCamera
    const position = camera.position
    const target = camera.target

    setCameraRef(camera)
    setPositionRef(position)
    setTargetRef(target)

    // await viewer.addPlugin(GBufferPlugin)
    // await viewer.addPlugin(new ProgressivePlugin(32))
    await viewer.addPlugin(new TonemapPlugin(true))
    await viewer.addPlugin(GammaCorrectionPlugin)
    // await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    await viewer.addPlugin(BloomPlugin)


    viewer.renderer.refreshPipeline()


    // Import and add a GLB file.
    await manager.addFromPath("vortex.glb")


    // // buat ilangin background
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true

    // supaya user tidak bisa merotate 3d model nya
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })

    // pengecekan bila posisi dan target awal 3d model bila berada di mode mobile
    if(isMobileOrTablet) {
      position.set(0.0236904186, 15.21, 11.7209968833)
      target.set(0.0128017594, 0.4913113388, -0.6224250840)
    }
    
    window.scrollTo(0, 0)

    let needsUpdate = true

    const onUpdate = () => {
        needsUpdate = true
        viewer.setDirty()
    }

    viewer.addEventListener('preFrame', () => {
      if(needsUpdate) {
        camera.positionTargetUpdated(true)
        needsUpdate = false
      }
    })

  
    memorizedScrollAnimation(position, target, isMobile , onUpdate)

  }, [memorizedScrollAnimation, isMobile]) 


  useEffect(() => {
    setupViewer()
  }, [setupViewer])


  // function untuk menghandle exit preview
  const handleExit = useCallback(() => { 
    props.container.current.style.opacity = "1"
    canvasContainerRef.current.style.pointerEvents = "none"
    viewerRef.scene.activeCamera.setCameraOptions({controlsEnabled : false})

    gsap.to(positionRef, {
      x: isMobile ? -0.016 : -0.0563722572,
      y: isMobile ? 3.58 : 2.0565331984,
      z: isMobile ? 3.40 : -2.54092291,
      scrollTrigger : {
          trigger : ".section-empat",
          start : 'top bottom',
          end : 'top center',
          scrub : 2,
          immediateRender : false,
      },
      onUpdate : () => {
        viewerRef.setDirty()
        cameraRef.positionTargetUpdated(true)
      }
  })

  gsap.to(targetRef, {
      x: isMobile ? -0.01 : -0.0115624336,
      y: isMobile ? -0.244 : 0.2188733977,
      z: isMobile ? -0.49 : -0.8279345944,
      scrollTrigger : {
          trigger : ".section-empat",
          start : 'top bottom',
          end : 'top center',
          scrub : 2,
          immediateRender : false,
      },
  })

  setPreview(false)

 }, [viewerRef, positionRef, targetRef, cameraRef, props, isMobile])


  return (
    <div ref={canvasContainerRef} className='w-screen h-screen fixed z-10 flex justify-end flex-col items-center top-0 pointer-events-none min-h-[831px] bg-transparent'  id='canvar-web-gi-container'>
      <canvas className="w-full h-full bg-transparent" id="canvas" ref={canvasRef} />
      {
        preview && (
          <button onClick={() => handleExit()} className='bg-green-700 px-4 py-1 rounded-full absolute cursor-pointer z-20 top-8 min-w-7 text-center'>Exit Preview</button>
        )
      }
    </div>
  )
}) 
  
export default WebGIViewer
