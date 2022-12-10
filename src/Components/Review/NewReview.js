import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Authentication/AuthProvideContext";

const NewReview = () => {
  const { user } = useContext(authContext);
  let navigate = useNavigate();

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const topic = form.topic.value;
    const areatext = form.areatext.value;
    const photo = user?.photoURL;

    console.log(name, email, topic, areatext, photo);

    const review = { name, email, topic, areatext, photo };

    fetch("https://review-server-three.vercel.app/newReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ review }),
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/myreview");
  };

  return (
    <div className="">
      {user?.uid ? (
        <>
          <div className=" p-10 ">
            <h2 className="text-4xl py-10">Leave us a Review</h2>
            <form onSubmit={handleReview}>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                required
                placeholder="Your Name"
                className="input w-full max-w-xs bg-slate-300 mr-3"
              />
              <input
                type="email"
                required
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Type your email here"
                className="input w-full max-w-xs my-3 bg-slate-300"
              />
              <br />
              <input
                type="text"
                name="topic"
                placeholder="topic text"
                className="input input-bordered input-lg w-full max-w-xs"
              />
              <br />
              <textarea
                className="textarea textarea-warning my-3 lg:w-1/2 w-full "
                placeholder="Your review description"
                required
                name="areatext"
              ></textarea>
              <br />
              <button className="btn btn-success w-1/4 ">Post review</button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-4xl text-center py-10">
            Please <Link onClick={handleLogin}>Login</Link> to leave a Review
          </h2>
        </>
      )}
    </div>
  );
};

export default NewReview;
