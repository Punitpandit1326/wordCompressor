import React from 'react';
import { Link } from 'react-router-dom';
// import ThemeButton from './Button'
// import PropTypes from 'prop-types';


export default function Navbar(props) {
    return (
        <React.Fragment>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Ceo</a></li>
                                    <li><a className="dropdown-item" href="/">Digital Marketing</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Web Development</a></li>
                                    <li><a className="dropdown-item" href="/">App Development</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex"></div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>Enable Dark Mode
                        </div>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}