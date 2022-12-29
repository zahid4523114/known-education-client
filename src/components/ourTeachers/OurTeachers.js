import React from "react";
import "./OurTeachers.css";
import teacher1 from "../../images/author-image1.jpg";
import teacher2 from "../../images/author-image2.jpg";
import teacher3 from "../../images/author-image3.jpg";
import teacher4 from "../../images/author-image4.jpg";

const OurTeachers = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="bg-light py-4"
    >
      <div style={{ marginBottom: "100px" }} className="container">
        <div style={{ width: "30%" }} className="mx-auto text-center mb-5">
          <h1 className="fw-bold">Teachers</h1>
          <p className="fs-5">Meet Professional Trainers</p>
        </div>
        <div className="cards-container mx-auto">
          <div style={{ width: "18rem" }} class="card border-0 shadow-lg">
            <img src={teacher1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title fw-bold">Mark Wilson</h4>
              <p class="card-text">
                I design and create websites.I am also responsible for the
                site's technical aspects, such as its performance and capacity,
                which are measures of a website's speed. and how much traffic
                the site can.
              </p>
            </div>
            <div class="card-footer text-center">
              <small class="fw-bold fs-5">Web Developer</small>
            </div>
          </div>

          <div style={{ width: "18rem" }} class="card border-0 shadow-lg">
            <img src={teacher2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title fw-bold">Catherine</h4>
              <p class="card-text">
                The Graphic Designer job description includes the entire process
                of defining requirements, visualizing and creating graphics
                including illustrations, logos, layouts and photos.
              </p>
            </div>
            <div class="card-footer text-center">
              <small class="fw-bold fs-5">Graphics Designer</small>
            </div>
          </div>
          <div style={{ width: "18rem" }} class="card border-0 shadow-lg">
            <img src={teacher3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title fw-bold">Jessie Ca</h4>
              <p class="card-text">
                UX design is all about identifying and solving user problems; UI
                design is all about creating intuitive, aesthetically-pleasing,
                interactive interfaces. UX design usually comes first in the
                product development.
              </p>
            </div>
            <div class="card-footer text-center">
              <small class="fw-bold fs-5">UX&UI Designer</small>
            </div>
          </div>
          <div style={{ width: "18rem" }} class="card border-0 shadow-lg">
            <img src={teacher4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title fw-bold">Andrew Berti</h4>
              <p class="card-text">
                Photography is the art, application, and practice of creating
                durable images by recording light, either electronically by
                means of an image sensor, or chemically by means of a
                light-sensitive material.
              </p>
            </div>
            <div class="card-footer text-center">
              <small class="fw-bold fs-5">Photographer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
