const { createBrowserRouter } = require("react-router-dom");
const { default: NotFound } = require("../Componants/NotFound/NotFound");
const { default: Roots } = require("../Componants/Roots/Roots");


const router = createBrowserRouter([
    {
      path: '/',
      element: <Roots />,
      errorElement: <NotFound/>,
    //   loader: productsAndCartData,
    //   children: [
    //     { path: '/', element: <Home /> },
    //     { path: '/home', element: <Home /> },
    //     { path: '/shop', element: <Shop /> },
    //     { path: '/cart', element: <Cart /> },
    //     { path: '/about', element: <About /> },
    //   ],
    },
  ])

  export default router;