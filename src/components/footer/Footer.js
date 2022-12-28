import React from "react";

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      style={{ backgroundColor: "black" }}
      className="w-100 min-vh-50 p-lg-5 p-md-4 px-2 py-4"
    >
      <div className="row col-12 text-white container">
        <div className="col-lg-4 col-md-6 col-12">
          <h1>Headquarter</h1>
          <p>Dhaka,Bangladesh</p>
          <p>Dhaka,H-block,Road-12</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <h1>Contact Info</h1>
          <p>+8801734095414, +8801732551335</p>
          <p>dewanmohammodzahidhasan@gmail.com</p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <h1>Quick Links</h1>
          <p>Career</p>
          <p> Investor</p>
          <p> Terms & Conditions</p>
          <p> Refund Policy</p>
        </div>
      </div>
      <p className="text-light">@Copyright-Dewan Mohammod Zahid Hasan</p>
    </div>
  );
};

export default Footer;
