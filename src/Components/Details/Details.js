import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import NewReview from "../Review/NewReview";
import OldReview from "../Review/OldReview";

const Details = () => {
  const [dataserved, setDataserved] = useState([]);
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>I am here with id {data._id}</h2>
      <div className="card card-compact w-3/4 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="w-full " src={data.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center ">
            <h2 className="card-title text-3xl ">{data.title}</h2>
          </div>

          <div className="bg-green-300  w-full  rounded p-5 ">
            <p className="bg-white p-8 text-lg   ">{data.description}</p>
          </div>
        </div>
      </div>
      <OldReview></OldReview>
      <NewReview></NewReview>
    </div>
  );
};

export default Details;
