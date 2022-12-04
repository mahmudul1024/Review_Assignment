import React, { useContext, useEffect, useState } from "react";
import OldReviewSingle from "./OldReviewSingle";

const OldReview = () => {
  const [oldreview, setOldreview] = useState([]);
  useEffect(() => {
    fetch("https://review-server-three.vercel.app/oldReview")
      .then((res) => res.json())
      .then((data) => setOldreview(data));
  }, []);

  console.log(oldreview);

  return (
    <div>
      {oldreview.map((rev) => (
        <OldReviewSingle key={rev._id} review={rev}></OldReviewSingle>
      ))}
    </div>
  );
};

export default OldReview;
