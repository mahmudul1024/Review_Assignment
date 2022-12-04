import React from "react";
import im1 from "../../assets/images/banner/1.jpg";
import im2 from "../../assets/images/banner/2.jpg";
import im3 from "../../assets/images/banner/3.jpg";
import "@splidejs/react-splide/css/sea-green";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Section2 = () => {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 3,

        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="text-lg font-bold text-indigo-500">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span class="text-lg font-bold text-indigo-500">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="relative block">
              <img
                alt="profil"
                src={im1}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-2">
              <span class="text-sm font-semibold text-indigo-500">
                Jean Miguel
              </span>
              <span class="flex items-center text-xs dark:text-gray-400">
                User of Tail-Kit
                <img src={""} class="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="text-lg font-bold text-indigo-500">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span class="text-lg font-bold text-indigo-500">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="relative block">
              <img
                alt="profil"
                src={im2}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-2">
              <span class="text-sm font-semibold text-indigo-500">
                Jean Miguel
              </span>
              <span class="flex items-center text-xs dark:text-gray-400">
                User of Tail-Kit
                <img src={""} class="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="text-lg font-bold text-indigo-500">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span class="text-lg font-bold text-indigo-500">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="relative block">
              <img
                alt="profil"
                src={im3}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-2">
              <span class="text-sm font-semibold text-indigo-500">
                Jean Miguel
              </span>
              <span class="flex items-center text-xs dark:text-gray-400">
                User of Tail-Kit ki
                <img src={""} class="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </SplideSlide>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">Prev</button>
        <button className="splide__arrow splide__arrow--next">Next</button>
      </div>
    </Splide>
  );
};

export default Section2;
