import React, { useContext, useEffect, useState } from "react";
import OldReviewSingle from "./OldReviewSingle";

const OldReview = () => {
  const [oldreview, setOldreview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/oldReview")
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
