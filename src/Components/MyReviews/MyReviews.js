import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Authentication/AuthProvideContext";
import OldReview from "../Review/OldReview";
import MyreviewSingle from "./MyreviewSingle";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const [oldreview, setOldreview] = useState([]);

  useEffect(() => {
    fetch("https://review-server-three.vercel.app/MyReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setOldreview(data));
  }, []);

  return (
    <div>
      {oldreview.map((old) => (
        <MyreviewSingle key={old._id} review={old}></MyreviewSingle>
      ))}
    </div>
  );
};

export default MyReviews;
