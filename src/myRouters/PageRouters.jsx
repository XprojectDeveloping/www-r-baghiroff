import HomePage from "../pages/HomePage";
import Services from "../pages/Services";
import About from "../pages/About";
import ServicesSingle from "../pages/ServicesSingle";
import Contact from "../pages/Contact";
import { useRoutes } from "react-router-dom";

const PageRouters = () => {
  const page_routers = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/services/:id/:slug",
      element: <ServicesSingle />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  const route = useRoutes(page_routers);
  return <>{route}</>;
};
export default PageRouters;
