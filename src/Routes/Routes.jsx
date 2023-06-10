import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Courses from "../Components/Home/Courses/Courses";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "courses",
          element: <Courses></Courses>,
          loader: fetch
        },
        {
          path: "signIn",
          element: <SignIn></SignIn>
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);