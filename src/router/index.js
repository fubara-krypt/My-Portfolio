import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllProjects from "../components/sections/all-projects";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-projects",
    element: <AllProjects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
