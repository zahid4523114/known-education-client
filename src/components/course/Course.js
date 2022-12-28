import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, courseHeader, courseThumb, price, ratings } = course;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ width: "18rem" }}
      class="card my-4 "
    >
      <img className="" src={courseThumb} alt="" />
      <div class="card-header text-center">{courseHeader}</div>
      <div class="card-body">
        <h5 class="card-title">Price: ${price}</h5>
        <h5 class="card-title">Ratings: {ratings}</h5>
        <Link to={`/course/${id}`} class="btn btn-primary container-fluid">
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Course;
