import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from './navigations/NavBar';
import SideBarHome from "../navigation/SideBarHome";

export default function FullLayout() {
    return (
        <>
            <NavBar />
            <SideBarHome />
            <Outlet />
        </>
    );
}