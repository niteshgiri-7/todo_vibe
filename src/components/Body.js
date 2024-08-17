import React from "react";
import Form from "./Form";

import DashBoardPage from "./DashBoardPage";
import PageNotFound from "./PageNotFound";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Form/>
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
