import React from "react";
import NavBar from "../navigation/NavBar";
import { Outlet } from "react-router-dom";

export default function FullLayout() {
    return <>
        <NavBar />
        <Outlet />
    </>
}