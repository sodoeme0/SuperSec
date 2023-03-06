import { Outlet } from "react-router-dom";

import React from 'react'

const DashFooter = () => {
    const content = (

        <nav className=" navbar fixed-bottom navbar-dark navbar-expand-lg bg-dark shadow small mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="dash.html">
                    <span className="brand-gradient">Role: Manager</span>
                </a>
            </div>
        </nav>

    )

    return content
}

export default DashFooter