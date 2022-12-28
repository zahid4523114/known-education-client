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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
