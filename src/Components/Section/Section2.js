import React, { useEffect, useState } from "react";

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

  return (
    <Splide
      options={{
        type: "loop",
        gap: "1em",
        drag: "free",
        arrows: true,
        pagination: true,
        perPage: 3,

        breakpoints: {
          100: {
            perPage: 1,
            gap: "2em",
          },
          300: {
            perPage: 1,
            gap: "2em",
          },
          635: { perPage: 1, gap: "2em" },
        },

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
          <SplideSlide key={old._id}>
            <div className="bg-slate-200  md:w-50 lg:w-80 sm:w-80  shadow-lg    rounded-xl  p-8 h-full">
              <p className="text-gray-600 text-white ">
                <span className="  md:text-2xl  font-bold text-indigo-500">
                  {old?.topic?.substring(0, 20)}
                </span>
              </p>
              <p className="text-gray-600 text-white">
                <span className="text-lg font-bold text-indigo-500">“</span>
                {old?.areatext?.substring(0, 25) + "..."}
                <span className="md:text-lg font-bold text-indigo-500">”</span>
              </p>
              <div className="flex items-center mt-4">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src={old.photo}
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col justify-between ml-2">
                  <span className="md:text-sm font-semibold text-xs  text-indigo-500">
                    {old.name}
                  </span>
                  {/* <span className="flex items-center text-xs text-gray-400">
                    {old.email}
                  </span> */}
                </div>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Section2;
