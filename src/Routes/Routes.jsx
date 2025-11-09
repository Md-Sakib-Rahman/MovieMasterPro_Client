import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import AllMovies from "../Pages/AllMovies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            
            path: '/',
            element: <HomePage/>
        },
        {
            
            path: '/allmovies',
            element: <AllMovies/>
        },
        {
            
            path: '/login',
            element: <Login/>
        },
        {
            
            path: '/register',
            element: <Register/>
        },
    ]
  },
]);