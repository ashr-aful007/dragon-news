import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import TramsAndCondision from "../Pages/TramsAndCondision/TramsAndCondision";
import Profile from "../Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
     {
          path: '/',
          element:<Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch(`https://dragon-news-server-self-three.vercel.app/news`)
               },
               {
                    path: '/category/:id',
                    element: <Catagory></Catagory>,
                    loader: ({params}) => fetch(`https://dragon-news-server-self-three.vercel.app/category/${params.id}`)
               },
               {
                    path: '/news/:id',
                    element: <PrivateRoute><News></News></PrivateRoute>,
                    loader: ({params}) => fetch(`https://dragon-news-server-self-three.vercel.app/news/${params.id}`)
                    
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               },
               {
                    path: '/trams',
                    element: <TramsAndCondision></TramsAndCondision>
               },
               {
                    path: '/profile',
                    element: <PrivateRoute><Profile></Profile></PrivateRoute>
               }
          ]
     }
])