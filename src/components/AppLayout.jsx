import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Body from "./Body";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import MenuShimmer from "./Shimmer/MenuShimmer";
import Landingpage from "./Landingpage";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const Profile = lazy(() => import("./Profile"));
const Search = lazy(() => import("./Search"));


const Layout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Sidebar/>
      <Outlet />
      <Footer/>
    </Provider>
  );
};
const LandingLayout = () => {
  return (
    <Provider store={store}>
      <Landingpage />
      <Sidebar/>
      <Footer/>
    </Provider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/landingpage",
    element: <LandingLayout />,
    errorElement: <Error/>,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",element: <Body />,
      },
      {
        path: "restaurant/:id",element: <RestaurantMenu />,
      },
      {
        path: "/cart",element: <Cart />,
      },
      {
        path: "/search",element: (<Suspense fallback={<MenuShimmer numberOfCards={6} />}>{" "}<Search /></Suspense>),
      },
      {
        path: "/profile",
        element: (<Suspense fallback={<MenuShimmer numberOfCards={6} />}><Profile /></Suspense>),
      },
    ],
  },
]);

