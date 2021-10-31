import About from "../pages/About";
import Home from "../pages/Home";
<<<<<<< HEAD
import Dashboard from "../pages/Dashboard";
=======
import {SpotifyLogin} from "../SpotifyLogin"

>>>>>>> main
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
    },{
      component:SpotifyLogin,
      path:"/auth",
      exact:false
    }
  ],
};

export default routeConfig;
