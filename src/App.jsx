import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Review from './components/Review'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(() => {

    gsap.to('.box', {
      x: 1310,
      duration: 4,
      delay: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

  })

  return (

    <div className="relative overflow-x-hidden">

      {/* HOME SECTION */}
      <section className="h-screen">
        <Home />
      </section>

      {/* ABOUT SECTION */}
      <section className="min-h-screen bg-black">
        <About />
      </section>

      {/* FLOATING SVG */}
      {/* 
      <div className="box absolute top-[100vh] z-20">
        <svg width="80" height="80" fill="white" viewBox="0 0 24 24">
          <path d="M18 8h1a3 3 0 0 1 0 6h-1" />
          <path d="M2 8h14v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        </svg>
      </div> 
      */}

      {/* MENU SECTION */}
      <section>
        <Menu />
      </section>

      {/* REVIEW SECTION */}
      <section className="min-h-screen">
        <Review />
      </section>

      {/* CONTACT SECTION */}
      <section className="min-h-screen">
        <Contact />
      </section>

    </div>

  )
}

export default App