import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import OurTeachers from "../components/ourTeachers/OurTeachers";
import Review from "../components/review/Review";
import Contact from "../components/contact/Contact";
import Courses from "../components/courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/home",
        element: <Banner></Banner>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/ourTeachers",
        element: <OurTeachers></OurTeachers>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
