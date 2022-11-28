import React from "react";

const BannerItem = ({ slide }) => {
  const { image, prev, next, id } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="img-gradient w-full ">
        <img src={image} alt="" className="w-full h-full rounded-xl" />
      </div>
      <div className=" w-full absolute   text-center    top-1/4  ">
        <h2 className="lg:text-6xl md:text-6xl text-3xl   font-bold text-white ">
          Bring your story to life
        </h2>
        <div className="flex justify-center mt-5">
          <p className="   text-white text-center lg:w-1/2 md:w-1/2 w-full lg md:text-xl ">
            Visual content is king. Whether you need to breathe life into social
            media marketing, or Helix photographers tell dimensional stories
            with photos
          </p>
        </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle ">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
