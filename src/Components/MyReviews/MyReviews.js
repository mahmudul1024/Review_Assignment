import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Authentication/AuthProvideContext";
import OldReview from "../Review/OldReview";
import MyreviewSingle from "./MyreviewSingle";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const [oldreview, setOldreview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/MyReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setOldreview(data));
  }, [oldreview]);

  console.log(oldreview);

  const handleTrash = (id) => {
    fetch(`http://localhost:5000/delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Review deleted successfully");
        }
      });
  };

  return (
    <div>
      {oldreview.map((old) => (
        <MyreviewSingle
          handleTrash={handleTrash}
          key={old._id}
          review={old}
        ></MyreviewSingle>
      ))}
    </div>
  );
};

export default MyReviews;
