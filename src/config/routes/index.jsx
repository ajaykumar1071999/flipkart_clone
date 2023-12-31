import { useRoutes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Layout from "../../common/layout";
import {HOME_PAGE} from "./constant/constantRoutePath"
import {ABOUT_PAGE} from "./constant/constantRoutePath"

export const AllRoute = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout/>,   
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ABOUT_PAGE,
          element: <About />,
        },
        {
          path: HOME_PAGE,
          element: <Home />,
        },
      ],
    },
  ]);
  return router;
};


