import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from './navigations/NavBar';

export default function FullLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}