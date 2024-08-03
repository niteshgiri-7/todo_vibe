import React from "react";
import Form from "./Form";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import DashBoardPage from "./DashBoardPage";
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Navigate to="/login" replace />
  },
  {
    path: "/login",
    element: <Form />,
  },
  {
    path: "/dashboard",
    element: <DashBoardPage />,
  },
 
]);
const Body = () => {

  return <RouterProvider router={appRouter} />;
};
export default Body;
