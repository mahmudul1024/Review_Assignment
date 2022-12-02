import React from "react";

const MyreviewSingle = ({ review }) => {
  return (
    <div className="mt-12  bg-yellow-200 mx-10 rounded-lg ">
      <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
        <div className="pt-3 pb-3 md:pb-1  md:px-16 bg-white bg-opacity-40 ">
          <div className=" text-center md:flex ">
            <div className="avatar pr-4">
              <div className="w-14 md:w-10 lg:w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review?.photo} />
              </div>
            </div>
            <h4 className="w-full  md:w-auto text-xl font-heading font-medium">
              {review.name}
            </h4>
            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
            <span className="mr-4 text-xl font-heading font-medium">5.0</span>
            <div className="inline-flex">
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block text-gray-200" href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 ">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <h2 className="py-3 text-2xl font-bold">{review.topic}</h2>
              <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                {review.areatext}
              </p>
            </div>
            <div className="w-full md:w-1/3 text-right">
              <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyreviewSingle;
