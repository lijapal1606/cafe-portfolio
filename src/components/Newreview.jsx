import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WriteReviewButton = ({ onAddReview }) => {

  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    msg: "",
    stars: 5,
    img: "",
  });

  const handleSubmit = () => {

    if (!form.name || !form.msg) return;

    onAddReview({
      ...form,

      img:
        form.img ||
        "https://i.pinimg.com/736x/7b/99/c3/7b99c3d9b91e34d45ea707faf85f48dc.jpg",
    });

    setForm({
      name: "",
      msg: "",
      stars: 5,
      img: "",
    });
  };

  // GSAP
  useGSAP(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".review-form",

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
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".review-input",

        {
          y: 20,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,

          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );

    }, formRef);

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();

  }, []);

  return (

    <div
      ref={formRef}
      className="review-form mt-10 max-w-md mx-auto bg-[#fffaf5] shadow-md rounded-2xl p-6 border border-[#eadfd5]"
    >

      {/* HEADING */}
      <h2 className="text-2xl font-serif text-[#4b3225] mb-5 text-center">
        Write a Review
      </h2>

      {/* NAME */}
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="review-input w-full mb-4 p-3 rounded-xl border border-[#e4d6c8] bg-white outline-none focus:border-[#8b6b52] text-sm"
      />

      {/* MESSAGE */}
      <textarea
        placeholder="Share your experience..."
        value={form.msg}
        onChange={(e) =>
          setForm({
            ...form,
            msg: e.target.value,
          })
        }
        className="review-input w-full mb-4 p-3 rounded-xl border border-[#e4d6c8] h-24 resize-none bg-white outline-none focus:border-[#8b6b52] text-sm"
      />

      {/* IMAGE */}
      <input
        type="text"
        placeholder="Image URL (optional)"
        alt="no image uploaded"
        value={form.img}
        onChange={(e) =>
          setForm({
            ...form,
            img: e.target.value,
          })
        }
        className="review-input w-full mb-5 p-3 rounded-xl border border-[#e4d6c8] bg-white outline-none focus:border-[#8b6b52] text-sm"
      />

      {/* STARS */}
      <div className="review-input flex items-center justify-center gap-2 mb-5">

        <span className="text-sm text-[#7a5c4d]">
          Rating:
        </span>

        {[1, 2, 3, 4, 5].map((num) => (

          <button
            key={num}
            onClick={() =>
              setForm({
                ...form,
                stars: num,
              })
            }
            className={`text-2xl transition ${
              form.stars >= num
                ? "text-amber-500 scale-110"
                : "text-gray-300"
            }`}
          >
            ★
          </button>

        ))}

      </div>

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        className="review-input w-full bg-[#8b6b52] text-white py-3 rounded-xl font-medium hover:bg-[#6f5442] transition duration-300"
      >
        Submit Review
      </button>

    </div>

  );
};

export default WriteReviewButton;