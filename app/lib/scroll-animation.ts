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
        x: isMobile ? 3.97 : 4.29,
        y: isMobile ? 8.87 : 10.74,
        z: isMobile ? 4.28 : 6.21,
        scrollTrigger : {
            trigger : '.section-dua',
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
        onUpdate
    }).to(target, {
        x: isMobile ? -1.52 : -2.23,
        y: isMobile ? 1.20 : 0.34,
        z: isMobile ? -0.37 : 1.56,
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
        x: isMobile ? 4.98 : 10.41,
        y: isMobile ? 4.46 : 6.75,
        z: isMobile ? 4.22 : 3.61,
        scrollTrigger : {
            trigger : ".section-tiga",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
        onUpdate
    }).to(target, {
        x: isMobile ? 0.21 : 0.75,
        y: isMobile ? 0.50 : 0.68,
        z: isMobile ? -1.007 : -2.86,
        scrollTrigger : {
            trigger : ".section-tiga",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
    }).to(position, {
        x: isMobile ? -0.00 : -0.083,
        y: isMobile ? 15.20 : 6.34,
        z: isMobile ? 8.24 : 3.72,
        scrollTrigger : {
            trigger : ".section-empat",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
        onUpdate
    }).to(target, {
        x: isMobile ? 0.02 : -0.081,
        y: isMobile ? 1.07 : -0.75,
        z: isMobile ? -1.54 : -1.14,
        scrollTrigger : {
            trigger : ".section-empat",
            start : 'top bottom',
            end : 'top center',
            scrub : 2,
            immediateRender : false,
        },
    })
}