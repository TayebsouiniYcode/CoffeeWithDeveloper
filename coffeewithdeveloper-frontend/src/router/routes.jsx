import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import FullLayout from "../components/layouts/FullLayout";

export const router = createBrowserRouter( [
    {
        path: "/",
        element: <FullLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);