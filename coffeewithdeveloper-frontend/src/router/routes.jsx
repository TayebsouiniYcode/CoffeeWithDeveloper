import React from "react";
import {createBrowserRouter} from "react-router-dom";
import FullLayout from "../components/layouts/FullLayout";
import Login from "../pages/login";
import Home from "../pages/Home";
import DashboardLayout from "../components/layouts/DashboardLayout";

export const router = createBrowserRouter( [
    {
        path: "/test",
        element: <div>This is test route</div>
    },
    {
        element: <FullLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <div>This is register page</div>
            },
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        element: <DashboardLayout />,
        children : [
            {
                path: "/dashboard",
                element: <div>Test</div>
            }
        ]
    }
]);