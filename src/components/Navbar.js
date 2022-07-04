import React from "react";
//import { useRef } from "react";
import {Link} from 'react-router-dom';
//import { useLocation } from "react-router";
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiSearch, FiHeart } from 'react-icons/fi';
//import {AiOutlineClose} from 'react-icons/ai'
import "../style/Navbar.css";
import "../style/Search.css";
import mainLogo from "../Logo/Logo.png";

function Navbar() {
    /*const path = useLocation().pathname;
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }*/
    return(
        <div className="nav-bar d-flex flex-row justify-content-between">
            <Link to="/" className="logo"><img src={mainLogo} alt="Logo" /></Link>
            <div className="search-container d-flex flex-row">
                <input placeholder= 'Search Places ...' className= 'search-bar form-control me-2'/>
                <button className="search-btn" type="submit"><FiSearch size="25"/></button>
            </div>
                <ul className="nav-links d-flex flex-row justify-content-between">
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
        </div>
    );
}

export default Navbar;