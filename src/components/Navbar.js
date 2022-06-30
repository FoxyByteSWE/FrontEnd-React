import React from "react";
import { useRef } from "react";
import {Link} from 'react-router-dom';
import { useLocation } from "react-router";
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiMenu, FiHeart } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import "../style/Navbar.css";
import mainLogo from "../Logo/Logo.png";
import Search from "./Search";

function Navbar() {
    const path = useLocation().pathname;
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

/*<button onClick={showNavbar} className="exit-btn mobile-menu-btn"><AiOutlineClose size="30" /></button>  */
    return(
        <div className="navbar">
            <Link to="/" className="logo"><img src={mainLogo} alt="Logo" /></Link>
                        <button onClick={showNavbar} ref={navRef} className="exit-btn mobile-menu-btn"><AiOutlineClose size="30" /></button>
                        <Search/>
                        <ul onClick={showNavbar} ref={navRef} className="nav-links">
                            <li>
                                <Link to="/favourites" className="text-decoration-none"><FiHeart className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <Link to="/user-page" className="text-decoration-none"><FiUser className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <Link to="/favourites" className="text-decoration-none"><FiLogOut className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-decoration-none"><FiLogIn className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <Link to="/sign-up" className="text-decoration-none"><FiUserPlus className="font-nav" size="25"/></Link>
                            </li>
                        </ul>
            <button onClick={showNavbar} className="mobile-menu-btn hamburger-btn"><FiMenu size="30" /></button>  
        </div>
    );
}

export default Navbar;