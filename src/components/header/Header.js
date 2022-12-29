import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div>
      <nav class="navbar  p-3 navbar-expand-lg bg-body-tertiary">
        <div class="container d-lg-flex justify-content-lg-center align-items-lg-center">
          <Link class="navbar-brand fs-4 fw-bold" href="#">
            Known
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav d-lg-flex justify-content-lg-center align-items-lg-center me-auto mb-2 mb-lg-0">
              <li class="ms-lg-5 nav-item">
                <Link
                  to="/home"
                  class="nav-link fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="ms-lg-5 nav-item">
                <Link to="/about" class="nav-link fw-bold " href="#">
                  About
                </Link>
              </li>
              <li class="ms-lg-5 nav-item">
                <Link to="/ourTeachers" class="nav-link fw-bold" href="#">
                  Teachers
                </Link>
              </li>
              <li class="ms-lg-5 nav-item">
                <Link to="/courses" class="nav-link fw-bold" href="#">
                  Courses
                </Link>
              </li>
              <li class="ms-lg-5 nav-item">
                <Link to="/contact" class="nav-link fw-bold" href="#">
                  Contact
                </Link>
              </li>
              {user?.email ? (
                <li class="ms-lg-5 nav-item">
                  <Link onClick={signOutUser} class="nav-link fw-bold" href="#">
                    <span>Log Out</span>
                  </Link>
                </li>
              ) : (
                <li class="ms-lg-5 nav-item">
                  <Link to="/logIn" class="nav-link fw-bold" href="#">
                    Log In
                  </Link>
                </li>
              )}
            </ul>
            <span
              style={{
                backgroundColor: "#29CA8E",
                borderRadius: "50%",
                fontSize: "20px",
              }}
              className="text-white ms-lg-4 ms-0 px-2 py-1"
            >
              <BsTelephone></BsTelephone>
            </span>
            <span class="navbar-text ms-2">+8801734095414</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
