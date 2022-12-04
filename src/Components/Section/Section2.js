import React, { useEffect, useState } from "react";
import im1 from "../../assets/images/banner/1.jpg";
import im2 from "../../assets/images/banner/2.jpg";
import im3 from "../../assets/images/banner/3.jpg";
import "@splidejs/react-splide/css/sea-green";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Section2 = () => {
  const [oldreview, setOldreview] = useState([]);
  useEffect(() => {
    fetch("https://review-server-three.vercel.app/oldReview")
      .then((res) => res.json())
      .then((data) => setOldreview(data));
  }, []);

  console.log(oldreview);

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
      {oldreview.map((old) => {
        return (
          <SplideSlide>
            <div class="bg-slate-200  w-80 shadow-lg mx-auto rounded-xl p-10 ">
              <p class="text-gray-600 text-white ">
                <span class="  text-2xl  font-bold text-indigo-500">
                  {old.topic}
                </span>
              </p>
              <p class="text-gray-600 text-white">
                <span class="text-lg font-bold text-indigo-500">“</span>
                {old.areatext}
                <span class="text-lg font-bold text-indigo-500">”</span>
              </p>
              <div class="flex items-center mt-4">
                <a href="#" class="relative block">
                  <img
                    alt="profil"
                    src={old.photo}
                    class="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div class="flex flex-col justify-between ml-2">
                  <span class="text-sm font-semibold text-indigo-500">
                    {old.name}
                  </span>
                  <span class="flex items-center text-xs dark:text-gray-400">
                    {old.email}
                  </span>
                </div>
              </div>
            </div>
          </SplideSlide>
        );
      })}

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">Prev</button>
        <button className="splide__arrow splide__arrow--next">Next</button>
      </div>
    </Splide>
  );
};

export default Section2;
