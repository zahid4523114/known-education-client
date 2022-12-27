import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="card-container">
      <div className="">
        <div class="card" style={{ width: "20rem" }}>
          <h1 className="p-3 bg-success text-white">01</h1>
          <div class="card-body py-5 ">
            <h3 className="fw-bold ">Trending courses</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div class="card" style={{ width: "20rem" }}>
          <h1 className="p-3 bg-success text-white">02</h1>
          <div class="card-body py-5 ">
            <h3 className="fw-bold ">Books&Library</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div class="card" style={{ width: "20rem" }}>
          <h1 className="p-3 bg-success text-white">03</h1>
          <div class="card-body py-5 ">
            <h3 className="fw-bold ">Certified Teacher</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
