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
  const {
    registerUser,
    signInWithGoogle,
    signInWithGitHub,
    userProfileUpdate,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(photo, email, password);

    //sign up with email and password
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        handleProfileUpdate(name, photo);
        form.reset();
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfileUpdate = (name, image) => {
    const userData = { displayName: name, photoURL: image };
    userProfileUpdate(userData)
      .then(() => {
        console.log("profile updated");
      })
      .then((error) => {
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
              In the simplest terms, a professional trainer is essentially a
              teacher who works in a corporate setting. Rather than providing
              conventional education to children and teenagers, they instead
              provide both mandatory and optional training for the benefit of
              employees at every level.
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
              An international certification standard outlines the requirements
              and specifications a product, process or service must meet to
              ensure its quality is consistent from country to country.
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
              Get 3 months of Premium for free. Choose PayPal from the dropdown
              at checkout to sign up quickly and securely. $9.99/month after
              trial. Cancel anytime.
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
            name="email"
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
