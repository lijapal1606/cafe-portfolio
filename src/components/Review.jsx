// REVIEW.jsx

import React, { useRef, useState } from "react";
import WriteReviewButton from "./Newreview";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarRating = ({ count }) => (

  <div className="flex gap-px text-xs">

    {"★".repeat(count).split("").map((s, i) => (
      <span key={i} className="text-amber-600">
        {s}
      </span>
    ))}

  </div>

);

const Review = () => {

  const sectionRef = useRef(null);

  const [reviews, setReviews] = useState([

    {
      name: "Aisha",
      msg: "Amazing quality!",
      stars: 5,
      img: "https://i.pinimg.com/736x/7b/99/c3/7b99c3d9b91e34d45ea707faf85f48dc.jpg",
    },

    {
      name: "Riya",
      msg: "Looks great!",
      stars: 4,
      img: "https://i.pinimg.com/1200x/b1/0c/47/b10c477437fc84cc1082cfe669e6540d.jpg",
    },

    {
      name: "Mira",
      msg: "Best coffee vibes.",
      stars: 5,
      img: "https://i.pinimg.com/736x/9b/08/3f/9b083fbcb6319e5f58d2d7fa5079c5f6.jpg",
    },

  ]);

  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  useGSAP(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".review-heading",

        {
          y: 40,
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
        ".review-card",

        {
          y: 60,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,

          scrollTrigger: {
            trigger: ".review-wrapper",
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
      className="bg-[#f8f1ea] px-4 md:px-10 py-12 overflow-hidden"
    >

      {/* HEADER */}
      <div className="review-heading text-center mb-8">

        <p className="text-xs tracking-[4px] uppercase text-[#9c7b63] mb-2">
          Reviews
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-[#4b3225]">
          Customer Reviews
        </h2>

      </div>

      {/* REVIEWS */}
      <div className="review-wrapper flex gap-4 overflow-x-auto pb-4">

        {reviews.map((r, index) => (

          <div
            key={index}
            className="review-card min-w-57.5 max-w-57.5 bg-[#fffaf5] rounded-xl overflow-hidden shadow-sm shrink-0"
          >

            <div className="relative h-36">

              <img
                src={r.img}
                alt={r.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1">

                <StarRating count={r.stars} />

              </div>

            </div>

            <div className="p-3">

              <p className="font-semibold text-[#4b3225] text-sm">
                {r.name}
              </p>

              <p className="text-xs text-[#7a5c4d] mt-1 leading-5">
                "{r.msg}"
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* BUTTON */}
      <div className="mt-8 flex justify-center">

        <WriteReviewButton onAddReview={addReview} />

      </div>

    </section>

  );
};

export default Review;