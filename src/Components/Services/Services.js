import React, { useEffect, useState } from "react";
import { PhotoProvider } from "react-photo-view";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [Dataservice, setDataService] = useState([]);

  useEffect(() => {
    fetch("https://reviewproject-3de7c.web.app", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ sizelimit: 3 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDataService(data);
      });
  }, []);

  const handleAllService = () => {
    fetch("https://reviewproject-3de7c.web.app", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ sizelimit: 15 }),
    })
      .then((res) => res.json())
      .then((data) => setDataService(data));
  };

  return (
    <div>
      <div className="bg-green-400 mb-5  mx-12 rounded  ">
        <h2 className="text-white font-extrabold shadow p-5   text-center text-2xl ">
          Services {Dataservice.length}
        </h2>
      </div>

      {/* service header end */}
      {/* service card starts */}

      <div className="w-full">
        <div className="bg-slate-100 border sm:p-8  md:p-16  mx-5  rounded">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10  ">
            {Dataservice.map((serv) => (
              <PhotoProvider key={serv.service_id}>
                <ServiceCard servicedata={serv}></ServiceCard>
              </PhotoProvider>
            ))}
          </div>
          <div className="text-center p-10">
            <button onClick={handleAllService} className="  btn btn-primary">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
