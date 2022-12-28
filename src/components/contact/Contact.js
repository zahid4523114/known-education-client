import React from "react";
import logo from "../../images/contact-image.jpg";

const Contact = () => {
  return (
    <div
      data-aos="fade-zoom-out"
      style={{ backgroundColor: "#3F51B5" }}
      className="w-100 min-vh-75 p-lg-5 p-md-4 p-3"
    >
      <div className=" row col-12">
        <form className="col-lg-7 col-md-12 col-12">
          <div style={{ width: "50%" }} className="text-white my-5">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="fs-5">we love conversations. let us talk!</p>
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control p-3"
              id="exampleFormControlInput1"
              placeholder="full name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control p-3"
              id="exampleFormControlInput1"
              placeholder="email"
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-light p-2 d-lg-block d-none rounded-5">
            Send message
          </button>
          <button className="btn btn-light p-2 d-lg-none d-block container-fluid rounded-5">
            Send message
          </button>
        </form>
        <div className="col-5 mt-lg-5 d-lg-block d-none">
          <img src={logo} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
