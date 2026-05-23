import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const sectionRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent!");
  };

  // GSAP
  useGSAP(() => {

    const ctx = gsap.context(() => {

      // HEADING
      gsap.fromTo(
        ".contact-heading",

        {
          y: 50,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          duration: 1,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // FORM
      gsap.fromTo(
        ".contact-form",

        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },

        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
          },
        }
      );

      // INFO
      gsap.fromTo(
        ".contact-info",

        {
          y: 30,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,

          scrollTrigger: {
            trigger: ".contact-info-wrapper",
            start: "top 90%",
          },
        }
      );

    }, sectionRef);

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={sectionRef}
      className="bg-[#f8f1ea] px-4 md:px-10 py-14 overflow-hidden"
    >

      {/* HEADING */}
      <div className="contact-heading text-center mb-10">

        <p className="uppercase tracking-[4px] text-xs text-[#9c7b63] mb-2">
          Contact
        </p>

        <h1 className="text-3xl md:text-5xl font-serif text-[#4b3225]">
          Get In Touch
        </h1>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="contact-form bg-[#fffaf5] shadow-md rounded-2xl p-5 md:p-8 w-full max-w-md mx-auto"
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl border border-[#e8d9cb] bg-white outline-none focus:border-[#8b6b52] text-sm"
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl border border-[#e8d9cb] bg-white outline-none focus:border-[#8b6b52] text-sm"
          required
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-5 p-3 rounded-xl border border-[#e8d9cb] h-32 resize-none bg-white outline-none focus:border-[#8b6b52] text-sm"
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#8b6b52] text-white py-3 rounded-xl hover:bg-[#6f5442] transition duration-300"
        >
          Send Message
        </button>

      </form>

      {/* INFO */}
      <div className="contact-info-wrapper flex flex-col md:flex-row justify-center gap-5 mt-10">

        <div className="contact-info bg-[#fffaf5] px-6 py-4 rounded-xl shadow-sm text-center min-w-55">

          <p className="text-[#8b6b52] text-sm mb-1">
            Email
          </p>

          <p className="text-[#4b3225] font-medium">
            brew@haven.com
          </p>

        </div>

        <div className="contact-info bg-[#fffaf5] px-6 py-4 rounded-xl shadow-sm text-center min-w-55">

          <p className="text-[#8b6b52] text-sm mb-1">
            Phone
          </p>

          <p className="text-[#4b3225] font-medium">
            +91 98765 43210
          </p>

        </div>

        <div className="contact-info bg-[#fffaf5] px-6 py-4 rounded-xl shadow-sm text-center min-w-55">

          <p className="text-[#8b6b52] text-sm mb-1">
            Location
          </p>

          <p className="text-[#4b3225] font-medium">
            Kolkata, India
          </p>

        </div>

      </div>

    </section>

  );
};

export default Contact;