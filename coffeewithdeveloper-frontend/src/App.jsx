import * as React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { UserProvider } from "./hooks/UserContext";
import FullLayout from "./components/layouts/FullLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/backoffice/dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";

export default function App() {
    return (
        <Router>
            <UserProvider>
                <Routes>
                    <Route element={<FullLayout />}    >
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={ <Login />}></Route>
                    </Route>
                    <Route element={<DashboardLayout />} >
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                    </Route>
                </Routes>
            </UserProvider>
        </Router>
    );
}