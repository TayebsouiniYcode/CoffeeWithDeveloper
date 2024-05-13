import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from './navigations/NavBar';
import SideBar from "../navigation/SideBar";
import HorizontalNavigationBar from "./navigations/HorizontalNavigation";

export default function DashboardLayout() {
    return (
        <>
            <SideBar />
            <div class="p-4 sm:ml-64">
                <HorizontalNavigationBar />
                <Outlet />
            </div>
            
        </>
    );
}