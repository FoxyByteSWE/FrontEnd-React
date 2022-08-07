import React from 'react';
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiMenu } from 'react-icons/fi';
import "../style/Navbar.css";
import mainLogo from "../Logo/Logo.png";
import { UserContext } from "../components/UserContext";
import Search from "./Search";

function Navbar({loginStatus}) {  
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        setUser(null);
        navigate('/');
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand"><img src={mainLogo} alt="Logo" /></Link> 
            <button className="navbar-toggler" id="hamburger-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FiMenu className="navbar-toggler-icon" size="15"/>
            </button>
        <Search />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"> 
            {user || loginStatus === true ?           
                    (
                        <>
                            <li className="nav-item">
                                <Link to={`/user-page/${(user.Username).toLowerCase()}`} className="nav-link"><FiUser className="font-nav" size="25"/>Hello {user.Username}</Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={handleLogOut} className="nav-link"><FiLogOut className="font-nav" size="25"/></a>
                            </li>
                        </>
                    ):(
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link"><FiLogIn className="font-nav" size="25"/> Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link"><FiUserPlus className="font-nav" size="25"/> Signup</Link>
                            </li>
                        </>
                        )
                    }            
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;
