import React from "react";
import BannerItem from "./BannerItem";

import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";

const bannerData = [
  {
    image: img1,
    prev: 3,
    next: 2,
    id: 1,
  },
  {
    image: img2,
    prev: 1,
    next: 3,
    id: 2,
  },
  {
    image: img3,
    prev: 2,
    next: 1,
    id: 3,
  },
];
const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
