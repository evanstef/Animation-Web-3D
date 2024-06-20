"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutSection = () => {
  const container = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    
    gsap.from(".text1", {
      opacity: 0,
      x: -100,
      scrollTrigger : {
        trigger : ".ini-content",
        start : "top center",
        end : "center top",
        toggleActions : "play none none reverse",
      }
    })

    gsap.from(".paragraf p", {
      opacity: 0,
      x: -100,
      stagger: 0.15,
      scrollTrigger : {
        trigger : ".ini-content",
        start : "top center",
        end : "center top",
        toggleActions : "play none none reverse",
      }
    })
  }, {scope: container})
  return (
    <div ref={container} className=' mb-[550px] md:mb-40 section-dua'>
    <div className='ini-content'>
    <h1 className='text1 text-5xl md:text-8xl font-bold bg-gradient-to-r from-red-700 via-green-700 to-blue-700 text-transparent bg-clip-text'>Vortex GT-8</h1>
    <div className='paragraf text-xs md:text-base'>
      <p>Specification : </p>
      <p>⚪ Hotswappable Universal 5 Pin Switch South Facing PCB</p>
      <p>⚪ Outemu Switch 50 Million Clicks Lifetime</p>
      <p>⚪ OEM Profile, Abs Keycaps With Elegant Font</p>
      <p>⚪ Rotary Aluminium Knob (Programmable)</p>
      <p>⚪ 3 Mode Of Connection (Bluetooth 5.0 Up To 3 Device, 2.4 GHz Wireless Dongle, Wired)</p>
      <p>⚪ Battery 2200mAh (1 Month Warranty)</p>
      <p>⚪ Mac OS Mode ( FN+L_alt ) *Download the patch on website first</p>
      <p>⚪ RGB Programable Lightning, and Music Rhythm</p>
      <p>⚪ Full Keys Anti Ghosting</p>
      <p>⚪ Upgraded Stabilizer</p>
      <p>⚪ Include Eva Plate Foam & Case Foam</p>
      <p>⚪ Braided Cable Type C Connector</p>
      <p>⚪ Solid Body Build</p>
      <p>⚪ Free Keycaps Puller & Switch Puller</p>
      <p>⚪ Software & Patch Available On Our Website www.vortexseries.net</p>
      <p>⚪ 1 Year Warranty VortexSeries</p>
    </div>
    
    </div>   
    </div>
  )
}

export default AboutSection
