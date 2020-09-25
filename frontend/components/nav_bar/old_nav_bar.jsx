import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

    const sessionLinks = () => {
        return (
            <div className="logged-out-nav">
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        );
    }

    const personalLinks = () => {
        return (
            <div className="logged-in-nav">
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        );
    }

    return currentUser ? personalLinks() : sessionLinks();
}

