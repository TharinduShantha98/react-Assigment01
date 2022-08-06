import React from "react";
import {Outlet} from "react-router-dom"
import NavBar from "../NavidationBar/Nav";


const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    );
};

export default Layout;