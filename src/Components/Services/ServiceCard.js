import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ servicedata }) => {
  console.log(servicedata.title);
  let serviceDescription = servicedata.description.slice(0, 50);

  /*
  <a href="https://ibb.co/rsCxY9z"><img src="https://i.ibb.co/jRcymtQ/service6.jpg" alt="service6" border="0"></a>
<a href="https://ibb.co/phCWZnJ"><img src="https://i.ibb.co/rdnbMv4/service5.jpg" alt="service5" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/0ZKZMLM/service4.jpg" alt="service4" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/vj9xNrD/service3.jpg" alt="service3" border="0"></a>
<a href="https://ibb.co/2FGsrWd"><img src="https://i.ibb.co/zmq7gQZ/service2.jpg" alt="service2" border="0"></a>
<a href="https://ibb.co/NFVP1X5"><img src="https://i.ibb.co/Bfzx4mb/service1.jpg" alt="service1" border="0"></a>

  */

  const handlePhotoView = (sid) => {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <PhotoView src={servicedata.img}>
          <img
            className=" h-48  w-full"
            onClick={() => handlePhotoView(servicedata.service_id)}
            src={servicedata.img}
            alt="Shoes"
          />
        </PhotoView>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{servicedata.title}</h2>
        <h2 className="font-bold  text-amber-400 ">
          Price : ${servicedata.price}
        </h2>
        <p>{serviceDescription}...</p>
        <div className="card-actions justify-end">
          <Link to={`details/${servicedata.service_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
