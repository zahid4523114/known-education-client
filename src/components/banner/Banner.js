import React from "react";
import Home from "../home/Home";
import Services from "../services/Services";
import About from "../about/About";
import OurTeachers from "../ourTeachers/OurTeachers";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Banner = () => {
  return (
    <div>
      <Home></Home>
      <Services></Services>
      <About></About>
      <OurTeachers></OurTeachers>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Banner;
