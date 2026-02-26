import {createBrowserRouter} from "react-router"
import Login from "../component/auth/login/login"
import Register from "../component/auth/register/register"
import Products from "../component/products/products"
const router = createBrowserRouter([
     {
       path: "/login",
       element: <Login />
     },
     {
       path: "/register",
       element: <Register />
     },
     {
       path: "/",
       element: <Register />
     },
     {
      path: "/products",
      element: <Products />
     }
])

export default router