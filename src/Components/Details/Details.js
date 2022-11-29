import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import NewReview from "../Review/NewReview";
import OldReview from "../Review/OldReview";

const Details = () => {
  const [dataserved, setDataserved] = useState([]);
  const { data } = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/detailsId`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => setDataserved(data));
  }, []);

  return (
    <div>
      <h2>I am here with id {data}</h2>
      <div className="card card-compact w-3/4 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="w-full " src={dataserved.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center ">
            <h2 className="card-title text-3xl ">{dataserved.title}</h2>
          </div>

          <div className="bg-green-300  w-full  rounded p-5 ">
            <p className="bg-white p-8 text-lg   ">{dataserved.description}</p>
          </div>
        </div>
      </div>
      <OldReview></OldReview>
      <NewReview></NewReview>
    </div>
  );
};

export default Details;
