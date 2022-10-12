import About from "../Componants/About/About";
import Blog from "../Componants/Blog/Blog";
import Home from "../Componants/Home/Home";
import Statistics from "../Componants/Statistics/Statistics";
import Topic from "../Componants/Topic/Topic";
import Topics from "../Componants/Topics/Topics";
import Quiz from "../Quiz/Quiz";

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
        {path: '/home',
        
        element:<Home/>},
        {path:'/topics',
        loader: async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics/>},
        {path:'/topics/:id',
        loader:async ({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Topic></Topic>},
        {path:'/statistics', element: <Statistics/>},
        {path:'/blog', element: <Blog/>},
        {path:'/quiz', element: <Quiz/>},
        {path: '/about', element: <About/>}
      ]
    },
  ])

  export default router;