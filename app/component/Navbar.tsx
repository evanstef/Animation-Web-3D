"use client"

import React, { useRef } from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import logo from '../../public/logo-1.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const container = useRef(null)

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from(container.current, {
            duration: 1,
            y: -100,
            opacity: 0,
            delay: 1.2,
            ease: "bounce",
        }).from(".logo", {
            scale: 0,
            duration: 1,
            ease: "elastic.out",
        }).to(".logo" , {
            rotateY: 360,
            duration: 0.5
        }).from(".isi p", {
            scale: 0,
            stagger: 0.3,
            ease: "elastic.out",
        })
    }, {scope: container})

  return (
    <div ref={container} className='border-b border-green-500'>
    <Wrapper>
            <div className='flex justify-center md:justify-between items-center md:py-3 py-5'>
                <div className='logo '>
                    <Image  src={logo} width={130} height={130} alt='logo'/>
                </div>
                <div className='hidden md:flex justify-between md:w-1/2 isi'>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Service</p>
                    <p>Blog</p>
                    <p>About</p>
                </div>
            </div>
    </Wrapper>
    </div>
    
  )
}

export default Navbar
