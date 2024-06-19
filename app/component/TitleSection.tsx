"use client"

import React, { useRef } from 'react'
import Wrapper from './Wrapper'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'

const TitleSection = () => {
  const container = useRef(null)

  gsap.registerPlugin(TextPlugin)

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from(".text1", {
      opacity: 0,
      y: "+=50",
      duration: 1,
      delay: 4,
    }).from(".text2 p", {
      opacity: 0,
      x:100,
      duration: 0.3,
      stagger: 0.1,
    }).from(".text5 p", {
      opacity: 0,
      x: 100,
      duration: 0.3,
      stagger: 0.1,
    }).to(".text3", {
      duration: 1.5,
      text : "The VortexSeries GT-8 Mechanical Keyboard is a high-performance mechanical keyboard designed for gamers, programmers, and professionals seeking a superior typing experience. This keyboard stands out with its ergonomic design, high-quality switches, and advanced features that enhance productivity and comfort."
    }).from(".button1", {
      scale: 0,
      ease: "elastic.out",
    }).from(".button2", {
      scale: 0,
      ease: "elastic.out",
    })
   }, {scope: container})
  return (
    <div ref={container} className='flex flex-col justify-center items-center mt-5 space-y-2 md:space-y-3 title-section'>
        <h1 className='text1 text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-700 via-green-700 to-blue-700 text-transparent bg-clip-text'>Vortex GT-8</h1>
        <div className='text-2xl md:text-7xl font-bold flex gap-6'>
          <div className='text2 flex gap-1'>
            <p>M</p>
            <p>e</p>
            <p>c</p>
            <p>h</p>
            <p>a</p>
            <p>n</p>
            <p>i</p>
            <p>c</p>
            <p>a</p>
            <p>l</p>
          </div>
          
          <div className='text5 flex gap-1'>
            <p>K</p>
            <p>e</p>
            <p>y</p>
            <p>b</p>
            <p>o</p>
            <p>a</p>
            <p>r</p>
            <p>d</p>
          </div>
        </div>
        <p className='text3 text-center text-xs md:text-base'></p>
        <p className='button1 bg-green-700 px-2 md:px-4 py-1 rounded-full text-sm md:text-base'>Scroll Down</p>
        <div className='button2 border px-[2px] md:px-1 py-1 rounded-full'>
            <div className='animate-bounce text-sm md:text-base'> | </div>
        </div>
    </div>
  )
}

export default TitleSection
