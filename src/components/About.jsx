import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.4,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#f5eee6]  text-black flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-12 overflow-hidden"
    >
      {/* LEFT IMAGE */}
      <div ref={imageRef} className="w-full md:w-1/2">
        <img
          src="https://i.pinimg.com/736x/6d/68/00/6d68006fff5b100d3bbac48260de7bb1.jpg"
          alt="Coffee"
          className="w-full h-125 object-cover rounded-3xl shadow-2xl"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 space-y-8">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Crafted Coffee,
          <br />
          Crafted Moments
        </h1>

        <p ref={textRef} className="text-amber-700 text-lg leading-8">
          At Brew Haven, every cup tells a story. We carefully select premium
          beans and craft each drink with precision to create a warm and
          unforgettable coffee experience. More than a café, it’s a space to
          relax, connect, and enjoy moments that matter.
        </p>

        <button
          ref={buttonRef}
          onClick={() => {
            document.getElementById("menu").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="px-8 py-4 bg-amber-600 hover:bg-amber-500 transition rounded-full text-lg font-semibold"
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default About;
