import About from "../pages/About";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
const routeConfig = {
  routes: [
    {
      component: Home,
      path: "/",
      exact: true,
    },
    {
      component: About,
      path: "/about",
      exact: true,
    },
    {
      component: Dashboard,
      path: "/dashboard",
      exact: true,
    },
  ],
};

export default routeConfig;
