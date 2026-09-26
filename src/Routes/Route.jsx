import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import ErrorHandle from "../Pages/ErrorHandle/ErrorHandle";
// import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        // errorElement: <ErrorHandle></ErrorHandle>,
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
            loader: ()=> fetch('trending.json').then(res=> res.json()),
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