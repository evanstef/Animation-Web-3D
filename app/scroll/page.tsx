"use client"

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Page = () => {
   const container = useRef(null)

   gsap.registerPlugin(ScrollTrigger)

   useGSAP(() => {
    gsap.to(".a", {
        x: 1000,
        rotation: 360,
        duration: 3,
        backgroundColor: "red",
    })

    gsap.to(".b", {
        x: 1000,
        rotation: 360,
        duration: 3,
        opacity: 1,
        backgroundColor: "green",
        scrollTrigger : {
            trigger: ".b",
            start: "top 500px",
            toggleActions : "play none none reverse",
            markers: true
        }
    })

    
   }, {scope: container})

  return (
    <div ref={container} className='space-y-[1000px] px-14 py-10'>
      <div className='w-40 h-40 bg-green-300 a'>A</div>
      <div className='w-40 h-40 bg-red-500 opacity-0 b'>B</div>
      <div className='w-40 h-40 bg-lime-500 c'>C</div>
    </div>
  )
}

export default Page
