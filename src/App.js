import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestuatantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, Cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
