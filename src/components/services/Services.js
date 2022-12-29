import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div data-aos="fade-down" className="card-container">
      <div className="">
        <div class="card" style={{ width: "20rem" }}>
          <h1 className="p-3 bg-success text-white">01</h1>
          <div class="card-body py-5 ">
            <h3 className="fw-bold ">Trending courses</h3>
            <p class="card-text">
              In higher education a course is a unit of teaching that typically
              lasts one academic term, is led by one or more instructors, and
              has a fixed roster of students.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div class="card" style={{ width: "20rem" }}>
          <h1 className="p-3 bg-success text-white">02</h1>
          <div class="card-body py-5 ">
            <h3 className="fw-bold ">Tech&Technology</h3>
            <p class="card-text">
              In higher education Tech&Technology is a unit of teaching that
              typically lasts one academic term, is led by one or more
              instructors, and has a fixed roster of students.
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
              In higher education a Certified Teacher is a unit of teaching that
              typically lasts one academic term, is led by one or more
              instructors, and has a fixed roster of students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
