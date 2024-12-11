import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MyApp
                </Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-link">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link">
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
