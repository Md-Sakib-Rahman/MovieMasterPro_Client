import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import AllMovies from "../Pages/AllMovies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MovieDetails from "../Pages/MovieDetails";
import PrivateRoutes from "./PrivateRoutes";
import Watchlist from "../Pages/Watchlist";
import AddMoviePage from "../Pages/AddMoviePage";
import MyCollection from "../Pages/MyCollection";
import UpdateMovie from "../Pages/UpdataMovie";
import ErrorPage from "../Pages/ErrorPage";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
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
        {
            
            path: '/addmovies',
            element: <PrivateRoutes><AddMoviePage/></PrivateRoutes>
        },
        {
            
            path: '/mycollection',
            element: <PrivateRoutes><MyCollection/></PrivateRoutes>
        },
        {
            
            path: '/movies/update/:id',
            element: <PrivateRoutes><UpdateMovie/></PrivateRoutes>
        },
    ]
  },
]);