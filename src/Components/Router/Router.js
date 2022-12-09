import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import MyReviews from "../MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Private_Add_service from "../Private_Add_service/Private_Add_service";

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
        path: "/addservice",
        element: (
          <Private_Add_service>
            <AddService></AddService>
          </Private_Add_service>
        ),
      },

      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`
https://review-server-three.vercel.app
/details/${params.id}`),
      },
    ],
  },
]);
