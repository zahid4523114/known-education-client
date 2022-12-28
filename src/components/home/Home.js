import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="items-container position-relative">
      <div className="text-box w-75">
        <h1 className="text-white">Distance Learning Education Center</h1>
        <p className="text-white fs-4">
          Our online courses are designed to fit in your industry supporting
          all-around with latest technologies
        </p>
        <Link to="/courses">
          <button className="btn btn-success rounded-5  fs-5 text-white">
            Explore more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
