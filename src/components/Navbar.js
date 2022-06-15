import React from "react";
import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { FiLogIn, FiUserPlus, FiSearch, FiMenu } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import "../style/Navbar.css";


function Navbar() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
/*<button onClick={showNavbar} className="exit-btn mobile-menu-btn"><AiOutlineClose size="30" /></button>  */
    return(
        <div className="navbar">
            <Link to="/home" className="logo">Logo</Link>
                    <form className="d-flex search-container" role="search">
                                <input className="search-bar form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                                <button className="search-btn" type="submit"><FiSearch size="25"/></button>
                    </form>
                        <button onClick={showNavbar} ref={navRef} className="exit-btn mobile-menu-btn"><AiOutlineClose size="30" /></button>
                        <ul onClick={showNavbar} ref={navRef} className="nav-links">
                            <li>
                                <Link to="/login" className="text-decoration-none">Login<FiLogIn className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <Link to="/sign-up" className="text-decoration-none">Sign Up<FiUserPlus className="font-nav" size="25"/></Link>
                            </li>
                        </ul>
            <button onClick={showNavbar} className="mobile-menu-btn hamburger-btn"><FiMenu size="30" /></button>  
        </div>
    );
}

export default Navbar;