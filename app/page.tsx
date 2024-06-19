"use client"

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Wrapper from './component/Wrapper'
import TitleSection from './component/TitleSection'
import AboutSection from './component/AboutSection'
import OtherSection from './component/OtherSection'
import LastSection from './component/LastSection'
import WebGIViewer from './component/WebGIViewer'

const Page = () => {
  const webgiViewer = useRef<any>(null)
  const containeRef = useRef<any>(null)

  function handlePreview() {
    webgiViewer.current.triggerPreview()
  }

  return (
    <div>
      <WebGIViewer container={containeRef} ref={webgiViewer} />
    <Wrapper> 
      <div ref={containeRef} className='duration-500'>
        <TitleSection />
        <AboutSection />
        <OtherSection />
        <LastSection triggerPreview={handlePreview} />
      </div>
    </Wrapper>
    </div>
    
    
  )
}

export default Page
