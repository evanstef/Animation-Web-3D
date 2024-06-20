"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const OtherSection = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(".ini-content p", {
      scale: 0,
      x: "+=50",
      stagger: 0.2,
      scrollTrigger : {
        trigger : ".trigger",
        start : "100px center",
        end : "center top",
        toggleActions : "play none none reverse",
      }
    })
  }, {scope: container})

  return (
    <div ref={container} className='section-tiga md:flex md:justify-end mb-[300px] md:mb-40'>
      <div className='md:w-1/2 trigger'>
            <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-r from-red-700 via-green-700 to-blue-700 text-transparent bg-clip-text'>Vortex GT-8</h1>
            <div className='text-xs md:text-base space-y-4 md:space-y-9 ini-content'>
                <p>Main Features : </p>
                <p><span className='font-bold'>Premium Mechanical Switches</span> : Equipped with a choice of Cherry MX or Gateron mechanical switches, offering tactile feedback and satisfying click sounds, along with a long lifespan of up to tens of millions of keystrokes.</p>
                <p><span className='font-bold'>Ergonomic Design</span>: Ergonomically designed to reduce fatigue during long-term use, complete with a comfortable palm rest.</p>
                <p><span className='font-bold'>RGB Lighting</span> : Customizable RGB lighting with various lighting effects and colors, allowing for personalization according to user preferences.</p>
                <p><span className='font-bold'>Key Rollover and Anti-Ghosting</span>: N-key rollover and anti-ghosting features ensure every keystroke is accurately registered, even when pressing multiple keys simultaneously.
                Durable Build Quality: Sturdy aluminum frame provides extra durability and stability during intensive use.</p>
                <p><span className='font-bold'>Macro Functionality and Customization</span> : Supports macro programming and customizable profiles for added efficiency and convenience.</p>
            </div>
      </div>
      
    </div>
  )
}

export default OtherSection
