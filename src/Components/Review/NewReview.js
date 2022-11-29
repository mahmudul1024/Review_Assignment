import React from "react";

const NewReview = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const topic = form.topic.value;
    const areatext = form.areatext.value;

    console.log(name, email, topic, areatext);
  };

  return (
    <div className="">
      <div className=" p-10 ">
        <h2 className="text-4xl py-10">Leave us a Review</h2>
        <form onSubmit={handleReview}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input w-full max-w-xs bg-slate-300 mr-3"
          />
          <input
            type="email"
            name="email"
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
            name="areatext"
          ></textarea>
          <br />
          <button className="btn btn-success w-1/4 ">Wide</button>
        </form>
      </div>
    </div>
  );
};

export default NewReview;
