import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Home = () => {

  useGSAP(()=>{
    gsap.from("h1",{
    x: 150,
    opacity: 0,
    delay: 1,
    duration: 0.7, 
    ease: "power4",
    stagger: 0.04
  })    
  
  gsap.from("span", {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    delay:1,
    duration: 0.8, 
    ease: "power3",
    stagger: 0.25
  })

  })
  return (
    <div className="relative h-full w-full">
      <video
        className="w-full h-full object-cover rounded-lg"
        src="https://cdn.shopify.com/videos/c/o/v/fc4893b7864f472cb6f1788f96e8a005.mp4"
        loop
        muted
        autoPlay
      />
      <h1 className="absolute inset-0 z-9  flex  justify-center p-8 text-8xl text-amber-800 font-Caveat">Brew Haven</h1>
      <h2 className="absolute inset-0 z-10 flex flex-col justify-center p-6 text-6xl text-gray-300 bg-black/40">
        <span className="font-medium mb-2">let's have a break</span>
        <span className="font-extrabold">with some coffee</span>
      </h2>
    </div>
  );
};

export default Home;
