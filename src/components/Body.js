import React from "react";
import Form from "./Form";

import DashBoardPage from "./DashBoardPage";
import PageNotFound from "./PageNotFound";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Form />,
  },
  {
    path: "/dashboard",
    element: <DashBoardPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter} />;
};
export default Body;
