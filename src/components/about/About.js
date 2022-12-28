import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import "./About.css";
import { SlBadge } from "react-icons/sl";
import { GoGraph } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../context/UserContext";

const About = () => {
  const { registerUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(photo, email, password);

    //sign up with email and password
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
      <form
        onSubmit={handleRegister}
        className="user-form bg-light shadow-lg rounded-5 mt-3 p-3"
      >
        <h2 className="my-3 fw-bold">Sign Up</h2>
        <div class="mb-3">
          <input
            name="photo"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Image url"
          />
        </div>
        <div class="mb-3">
          <input
            name="name"
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
            name="password"
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="password"
          />
        </div>
        <Link to="/logIn">
          <p>Already have an account?</p>
        </Link>
        <button className="btn btn-primary w-100  rounded-5">
          Get Started
        </button>
        <div className="d-flex justify-content-center mt-4">
          <span onClick={signInWithGoogle} className="fs-3 d-block">
            <FcGoogle></FcGoogle>
          </span>
          <span onClick={signInWithGitHub} className="ms-4 d-block fs-3">
            <BsGithub></BsGithub>
          </span>
        </div>
      </form>
    </div>
  );
};

export default About;
