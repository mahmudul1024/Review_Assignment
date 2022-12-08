import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Authentication/AuthProvideContext";
import OldReview from "../Review/OldReview";
import MyreviewSingle from "./MyreviewSingle";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const [oldreview, setOldreview] = useState([]);
  const [deleterev, setDeleterev] = useState(false);
  let [Len, setLen] = useState(null);

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
  }, [Len]);

  console.log(oldreview);

  const handleTrash = (id) => {
    fetch(`http://localhost:5000/delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // alert("Review deleted successfully");
          const remainingReview = oldreview.filter((old) => old._id !== id);
          setOldreview(remainingReview);
        }
      });
  };

  const handleChange = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.topic.value;
    const areatext = form.areatext.value;
    let topicLength = areatext.length;
    console.log(topicLength);

    // console.log(event, id);

    // console.log("ami ekhane asi", topic, areatext, id);

    fetch(`http://localhost:5000/edit/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ change: { topic, areatext, id } }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ami changed data", data);
        setLen(topicLength);
      });
  };

  return (
    <div>
      {oldreview.map((old) => (
        <MyreviewSingle
          handleTrash={handleTrash}
          key={old._id}
          review={old}
          handleChange={handleChange}
        ></MyreviewSingle>
      ))}
    </div>
  );
};

export default MyReviews;
