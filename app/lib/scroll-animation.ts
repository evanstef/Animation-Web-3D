"use client"

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export const scrollAnimation = (position : any, target : any, isMobile : any ,onUpdate : any) => {

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
      }

    let tl = gsap.timeline()

    tl.to(position, {
        x: isMobile ? 3.97 : 0.93,
        y: isMobile ? 8.87 : 5.03,
        z: isMobile ? 4.28 : 3.33,
        scrollTrigger : {
            trigger : '.section-dua',
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
        onUpdate
    }).to(target, {
        x: isMobile ? -1.52 : -2.11,
        y: isMobile ? 1.20 : 0.53,
        z: isMobile ? -0.37 : 1.09,
        scrollTrigger : {
            trigger : '.section-dua',
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
    }).to(".title-section", {
        opacity: 0,
        duration : 1,
        scrollTrigger : {
            trigger : ".section-dua",
            start : 'top bottom',
            end : 'top 85%',
            scrub : true,
        },
    }).to(position, {
        x: isMobile ? 4.98 : 4.59,
        y: isMobile ? 4.46 : 2.71,
        z: isMobile ? 4.22 : 0.83,
        scrollTrigger : {
            trigger : ".section-tiga",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
        onUpdate
    }).to(target, {
        x: isMobile ? 0.21 : -0.396,
        y: isMobile ? 0.50 : -0.071,
        z: isMobile ? -1.007 : -2.09,
        scrollTrigger : {
            trigger : ".section-tiga",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
    }).to(position, {
        x: isMobile ? -0.016 : -0.0563722572,
        y: isMobile ? 3.58 : 2.0565331984,
        z: isMobile ? 3.40 : 2.54092291,
        scrollTrigger : {
            trigger : ".section-empat",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
        onUpdate
    }).to(target, {
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
}