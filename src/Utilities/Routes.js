import About from "../Componants/About/About";
import Blog from "../Componants/Blog/Blog";
import Home from "../Componants/Home/Home";
import Statistics from "../Componants/Statistics/Statistics";
import Topics from "../Componants/Topics/Topics";

const { createBrowserRouter } = require("react-router-dom");
const { default: NotFound } = require("../Componants/NotFound/NotFound");
const { default: Roots } = require("../Componants/Roots/Roots");


const router = createBrowserRouter([
    {
      path: '/',
      element: <Roots />,
      errorElement: <NotFound/>,
      children: [
        {path: '/', element:<Home/>},
        {path: '/home', element:<Home/>},
        {path:'/topics', element: <Topics/>},
        {path:'/statistics', element: <Statistics/>},
        {path:'/blog', element: <Blog/>},
        {path: '/about', element: <About/>}
      ]
    },
  ])

  export default router;