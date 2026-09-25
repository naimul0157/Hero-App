import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
// import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[{
            index: true,
            path:'/',
            Component: Home
        },
        {
            path: '/apps',
            loader: () => fetch('trending.json').then(res => res.json()),
            Component: Apps
        },
        {
            path:'/installation',
            Component: Installation
        },
        {
            path: '/:id',
            loader: ()=> fetch('trending.json').then(res => res.json()),
            Component: AppsDetails
        }
    
    ]
    }
])