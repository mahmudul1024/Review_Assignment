import { createBrowserRouter } from "react-router-dom";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import MyReviews from "../MyReviews/MyReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myreview",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://review-server-three.vercel.app/details/${params.id}`),
      },
    ],
  },
]);
