import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/login-security.png";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../context/UserContext";

const LogIn = () => {
  const { loggedInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(photo, email, password);

    //sign in with email and password
    loggedInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row mx-auto col-12 p-lg-5 p-3">
      <div className="col-lg-6 col-md-12 col-12">
        <form
          onSubmit={handleLogin}
          className=" bg-light container-fluid shadow-lg rounded-5 mt-3 p-3"
        >
          <h2 className="my-3 fw-bold">Log In</h2>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
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
          <Link to="/signUp">
            <p>Create an account.</p>
          </Link>
          <button className="btn btn-primary w-100 rounded-5">Log In</button>
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
      <div className="col-lg-6 col-md-12 col-12">
        <img src={logo} className="img-fluid mt-5 d-lg-block d-none" alt="" />
      </div>
    </div>
  );
};

export default LogIn;
