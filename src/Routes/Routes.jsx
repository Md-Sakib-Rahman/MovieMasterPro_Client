import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import AllMovies from "../Pages/AllMovies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MovieDetails from "../Pages/MovieDetails";
import PrivateRoutes from "./PrivateRoutes";
import Watchlist from "../Pages/Watchlist";


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
            element: <PrivateRoutes><AllMovies/></PrivateRoutes>
        },
        {
            
            path: '/login',
            element: <Login/>
        },
        {
            
            path: '/register',
            element: <Register/>
        },
        {
            
            path: '/moviedetails/:id',
            element: <PrivateRoutes><MovieDetails/></PrivateRoutes>
        },
        {
            
            path: '/watchlist',
            element: <PrivateRoutes><Watchlist/></PrivateRoutes>
        },
    ]
  },
]);