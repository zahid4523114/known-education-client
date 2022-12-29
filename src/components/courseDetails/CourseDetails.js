import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FcVideoFile } from "react-icons/fc";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetail = useLoaderData();

  const { id, courseHeader, courseThumb, courseDes } = courseDetail;

  return (
    <div className="p-lg-5 p-md-3 p-3">
      <div className="row col-12">
        <div className="col-lg-7 col-md-12 col-12">
          <div class="card border-0 shadow-lg w-100 m-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={courseThumb}
                  class="img-fluid h-100 rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title">{courseHeader}</h2>
                  <p ref={ref} class="card-text">
                    {courseDes}
                  </p>
                  <Pdf targetRef={ref} filename="course-info.pdf">
                    {({ toPdf }) => (
                      <button
                        onClick={toPdf}
                        className="btn me-lg-3 me-md-3 me-0 btn-danger d-lg-inline d-md-inline d-block"
                      >
                        Download Pdf
                      </button>
                    )}
                  </Pdf>
                  {/* 
                  <Link
                    to={`/course/detail/${id}`}
                    className="btn btn-dark  ms-0 mt-lg-0 mt-md-0 mt-3 "
                  >
                    Premium Access
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side section */}
        <div className="col-lg-5 col-md-12 col-12">
          <div
            class="accordion accordion-flush mt-4 ms-lg-3 ms-0"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Module-1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Introduction about this course</span>
                  </div>
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Why you should buy this corse?</span>
                  </div>
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Guidelines for this course</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Module-2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Module overview</span>
                  </div>
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Module summary</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Module-3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Fundamental things that needed</span>
                  </div>
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Environment set up to start</span>
                  </div>
                  <div className="my-3">
                    <FcVideoFile className="fs-3"></FcVideoFile>{" "}
                    <span>Module summary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
