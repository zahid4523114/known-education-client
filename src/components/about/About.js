import React from "react";
import { FaUsers } from "react-icons/fa";
import "./About.css";
import { SlBadge } from "react-icons/sl";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="about-us-container container"
    >
      <div className="about-us">
        <h1 className="my-4">
          Start your journey to a better life with online practical courses
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <span
            style={{
              backgroundColor: "#29CA8E",
              borderRadius: "50%",
            }}
            className="px-3 py-2 fs-2 text-white"
          >
            <FaUsers></FaUsers>
          </span>
          <div className="ms-3">
            <h3 className="fw-bold">Professional Trainers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              id odio sequi commodi perferendis non eius, autem dicta in at!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span
            style={{
              backgroundColor: "#29CA8E",
              borderRadius: "50%",
            }}
            className="px-3 py-2 fs-2 text-white"
          >
            <SlBadge></SlBadge>
          </span>
          <div className="ms-3">
            <h3 className="fw-bold">International Certifications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              id odio sequi commodi perferendis non eius, autem dicta in at!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span
            style={{
              backgroundColor: "#29CA8E",
              borderRadius: "50%",
            }}
            className="px-3 py-2 fs-2 text-white"
          >
            <GoGraph></GoGraph>
          </span>
          <div className="ms-3">
            <h3 className="fw-bold">Free for 3 months</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              id odio sequi commodi perferendis non eius, autem dicta in at!
            </p>
          </div>
        </div>
      </div>
      <form className="user-form bg-light shadow-lg rounded-5 mt-3 p-3">
        <h2 className="my-3 fw-bold">Sign Up</h2>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="full name"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="password"
          />
        </div>
        <Link>
          <p>Already have an account?</p>
        </Link>
        <button className="btn btn-primary  rounded-5">Get Started</button>
        <div className="d-flex justify-content-center mt-4">
          <span className="fs-3 d-block">
            <FcGoogle></FcGoogle>
          </span>
          <span className="ms-4 d-block fs-3">
            <BsGithub></BsGithub>
          </span>
        </div>
      </form>
    </div>
  );
};

export default About;
