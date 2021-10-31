import About from "../pages/About";
import Home from "../pages/Home";
import {SpotifyLogin} from "../SpotifyLogin"

const routeConfig = {
  routes: [
    {
      component: Home,
      path: "/",
      exact: true,
    },
    {
      component: About,
      path: "/",
      exact: true,
    },{
      component:SpotifyLogin,
      path:"/auth",
      exact:false
    }
  ],
};

export default routeConfig;
