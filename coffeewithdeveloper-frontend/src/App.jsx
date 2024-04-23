import * as React from "react";
import { router } from "./router/routes.jsx";

import {
    RouterProvider,
} from "react-router-dom";

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}