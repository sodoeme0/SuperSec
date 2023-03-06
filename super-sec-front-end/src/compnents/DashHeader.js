import { Link } from "react-router-dom";

import React from 'react'

const DashHeader = () => {
    const content = (
        <nav className=" header sticky-top navbar navbar-dark navbar-expand-lg bg-dark shadow small mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="dash.html">
                    <span className="brand-gradient">SuperSec+</span>
                </a>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/dash" class="p-2" style={{ textDecoration: 'none' }}>Shifts</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/dash/personal" class="p-2" style={{ textDecoration: 'none' }}>Personal</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/dash/templates" class="p-2" style={{ textDecoration: 'none' }}>Shift Templates</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="#" style={{ textDecoration: 'none' }}>LogOut</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )

    return content
}

export default DashHeader