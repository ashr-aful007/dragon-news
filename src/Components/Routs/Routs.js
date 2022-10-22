import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
     {
          path: '/',
          element:<Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch(`http://localhost:5000/news`)
               },
               {
                    path: '/category/:id',
                    element: <Catagory></Catagory>,
                    loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
               },
               {
                    path: '/news/:id',
                    element: <PrivateRoute><News></News></PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                    
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               }
          ]
     }
])