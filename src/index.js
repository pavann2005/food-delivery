import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import {
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuCard from "./components/RestaurantMenuCard";

import userContext from "./utilis/UserContext";

import { Provider } from "react-redux";
import appStore from "./utilis/appStore";

import Cart from "./components/Cart";

// Lazy Loading
const Grocery = lazy(() =>
  import("./components/Grocery")
);

// Main Layout
const AppLayout = () => {
  const [loggedinInfo, setLoggedinInfo] =
    useState();

  useEffect(() => {
    const newData = {
      name: "Soham S",
    };

    setLoggedinInfo(newData.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{
          isLoggedUser: loggedinInfo,
          setLoggedinInfo,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

// Router Configuration
const appRouter = createHashRouter([
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
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1>Loading Grocery...</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuCard />,
      },
    ],

    errorElement: <Error />,
  },
]);

// Render App
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <RouterProvider router={appRouter} />
);
