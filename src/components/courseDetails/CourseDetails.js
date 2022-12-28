import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetail = useLoaderData();

  const { id, courseHeader, courseThumb, courseDes } = courseDetail;

  return (
    <div class="card m-3" style={{ maxwidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={courseThumb} class="img-fluid rounded-start" alt="..." />
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
                  className="btn btn-danger d-lg-inline d-md-inline d-block"
                >
                  Download Pdf
                </button>
              )}
            </Pdf>

            <Link
              to={`/course/detail/${id}`}
              className="btn btn-dark ms-lg-3 ms-md-3 ms-0 mt-lg-0 mt-md-0 mt-3 "
            >
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
