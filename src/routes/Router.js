import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import OurTeachers from "../components/ourTeachers/OurTeachers";
import Review from "../components/review/Review";
import Contact from "../components/contact/Contact";
import LogIn from "../components/login/LogIn";
import SignUp from "../components/signUp/SignUp";
import Courses from "../components/courses/Courses";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import CourseDetails from "../components/courseDetails/CourseDetails";
import CheckoutPage from "../components/checkoutPage/CheckoutPage";

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
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://known-education-server.vercel.app/course/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/course/detail/:id",
        loader: ({ params }) =>
          fetch(
            `https://known-education-server.vercel.app/course/detail/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
