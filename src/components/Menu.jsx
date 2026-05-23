// MENU.jsx

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {

  const sectionRef = useRef(null);

  const [active, setActive] = useState("coffee");

  const menuData = {

    coffee: [
      {
        name: "Espresso",
        price: "₹120",
        desc: "Strong and bold coffee shot.",
        img: "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=500",
      },

      {
        name: "Cappuccino",
        price: "₹180",
        desc: "Rich espresso with milk foam.",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      },

      {
        name: "Latte",
        price: "₹200",
        desc: "Smooth and creamy coffee.",
        img: "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?w=500",
      },

      {
        name: "Americano",
        price: "₹150",
        desc: "Espresso with hot water.",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      },

      {
        name: "Mocha",
        price: "₹220",
        desc: "Chocolate flavored coffee.",
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      },

      {
        name: "Flat White",
        price: "₹210",
        desc: "Velvety smooth espresso drink.",
        img: "https://i.pinimg.com/736x/71/dd/14/71dd147260cf9bcfbd02432fd441860c.jpg",
      },
    ],

    cold: [
      {
        name: "Cold Brew",
        price: "₹170",
        desc: "Smooth cold coffee.",
        img: "https://images.unsplash.com/photo-1461988091159-192b6df7054f",
      },

      {
        name: "Frappuccino",
        price: "₹220",
        desc: "Blended iced coffee.",
        img: "https://i.pinimg.com/736x/4d/e4/0c/4de40c8bbd7ca5c9a76587faf386d444.jpg",
      },

      {
        name: "Vanilla Shake",
        price: "₹190",
        desc: "Creamy vanilla drink.",
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      },
    ],

    snacks: [
      {
        name: "Burger",
        price: "₹180",
        desc: "Juicy burger snack.",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },

      {
        name: "Pizza",
        price: "₹220",
        desc: "Cheesy delight.",
        img: "https://images.unsplash.com/photo-1548365328-9f547fb0953a",
      },

      {
        name: "Croissant",
        price: "₹160",
        desc: "Buttery pastry.",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      },
    ],
  };

  const items = menuData[active];

  useGSAP(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".menu-heading",

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

      gsap.fromTo(
        ".category-btn",

        {
          y: 20,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".menu-card",

        {
          y: 60,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",

          scrollTrigger: {
            trigger: ".menu-grid",
            start: "top 85%",
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
      id="menu"
      className="bg-[#f5eee6] px-4 md:px-10 py-12 overflow-hidden"
    >

{/* HEADER */}
<div className="w-full flex flex-col items-center justify-center text-center mb-10">

  <p className="text-xl uppercase tracking-[5px] text-[#502506] mb-2">
    Menu
  </p>

  

  <div className="w-20 h-0.5 bg-[#8b6b52] mt-3 rounded-full"></div>

</div>

      {/* CATEGORY */}
      <div className="flex justify-center gap-3 flex-wrap mb-8">

        {["coffee", "cold", "snacks"].map((cat) => (

          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`category-btn px-4 py-2 rounded-full text-sm transition ${
              active === cat
                ? "bg-[#8b6b52] text-white"
                : "bg-[#e6d5c3] text-[#5c4033]"
            }`}
          >
            {cat === "cold" ? "Cold Drinks" : cat}
          </button>

        ))}

      </div>

      {/* GRID */}
      <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">

        {items.map((item, index) => (

          <div
            key={index}
            className="menu-card bg-[#fffaf5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition w-60"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-cover"
            />

            <div className="p-3">

              <div className="flex justify-between items-center mb-1">

                <h2 className="text-base font-semibold text-[#4b3225]">
                  {item.name}
                </h2>

                <span className="text-[#8b6b52] font-bold text-sm">
                  {item.price}
                </span>

              </div>

              <p className="text-xs text-[#7a5c4d] leading-5">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Menu;