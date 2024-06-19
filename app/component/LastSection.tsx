"use client"

import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin';

interface Props {
  triggerPreview: any
}

const LastSection = ({triggerPreview } : Props) => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(TextPlugin)

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger : {
        trigger : ".trigger",
        start : "230px center",
        end : "center top",
        toggleActions : "play none none reverse",
      }
    })

    tl.from(".text1", {
      scale: 0,
      duration: 1,
      ease: "elastic.out",
    }).to(".text2", {
      duration: 1,
      text : "With this combination of features and performance, the VortexSeries GT-8 Mechanical Keyboard is the perfect choice for those who want a reliable, comfortable, and feature-rich mechanical keyboard."
    }).from(".button", {
      scale: 0,
      ease: "elastic.out",
    }).to(".button1", {
      rotateX: 360,
      duration: 0.5
    }).to(".button2", {
      rotateX: 360,
      duration: 0.5
    })

  }, {scope: container})
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

  return (
    <div ref={container} className='mb-[550px] md:mb-[500px] section-empat '>
      <div className='trigger space-y-3 md:space-y-9 flex flex-col justify-center items-center'>
        <h1 className='text1 text-5xl md:text-8xl font-bold bg-gradient-to-r from-red-700 via-green-700 to-blue-700 text-transparent bg-clip-text'>Vortex GT-8</h1>
        <p className='text2 text-center text-xs md:text-base'></p>
        <div className='flex gap-5 md:gap-10 button text-xs md:text-base'>
          <button onClick={scrollToTop} className='button1 bg-green-700 px-2 md:px-4 py-1 rounded-full'>Back To Top</button>
          {/* <button onClick={() => triggerPreview()} className='button2 bg-white px-2 md:px-4 py-1 rounded-full text-black'>Wanna Try!</button> */}
        </div>
      </div>
    </div>
  )
}

export default LastSection
