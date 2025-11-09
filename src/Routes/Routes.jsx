import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            // index: true,
            path: '/',
            element: <HomePage/>
        }
    ]
  },
]);