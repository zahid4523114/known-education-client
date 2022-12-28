import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="items-container position-relative">
      <div className="text-box w-75">
        <h1 className="text-white">Distance Learning Education Center</h1>
        <p className="text-white fs-4">
          Our online courses are designed to fit in your industry supporting
          all-around with latest technologies
        </p>
        <button className="btn btn-success rounded-5  fs-5 text-white">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Home;
