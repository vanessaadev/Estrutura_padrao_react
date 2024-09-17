import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index.jsx"


function MyRoutes() {
    return (
        <Routes>
            <Route path="/" exact Component={Home} />
        </Routes>
    )
}

export default MyRoutes;
