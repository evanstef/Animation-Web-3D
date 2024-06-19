"use client"

import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Wrapper from './Wrapper'
import TitleSection from './TitleSection'
import AboutSection from './AboutSection'
import OtherSection from './OtherSection'
import LastSection from './LastSection'


const WebGIViewer = dynamic(() => import('./WebGIViewer'), { ssr: false })

const AllComponent = () => {
  const webgiViewer = useRef<any>(null)
  const containeRef = useRef<any>(null)

  function handlePreview() {
    if (webgiViewer.current) {
        webgiViewer.current.triggerPreview();
      } else {
        console.log('webgiViewer.current is null');
      }
  }

//   useEffect(() => {
//     console.log('WebGIViewer ref:', webgiViewer.current);
//   }, []);

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

export default AllComponent
