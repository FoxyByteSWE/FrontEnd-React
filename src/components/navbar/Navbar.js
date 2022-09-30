import React from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiSearch, FiMenu } from 'react-icons/fi';
import "./index.css";
import mainLogo from "../../Logo/logo3.png";
import controller from "./controller"

function Navbar({loginStatus}) {
    
    const {
        search, filteredData, fetchResInfo, handleFilter, handleLogOut, searchWord, wordEntered, clearInput, user
    } = controller();
    useEffect(()=>{
        fetchResInfo()
    },[]);
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand"><img src={mainLogo} alt="Logo" data-testid="logo" /></Link>
            <div className="d-flex flex-column search-container justify-content-center">
                    <form
                    data-testid="search-bar-test"
                    onSubmit={search}
                    className="d-flex flex-row justify-content-center container-search-icon">
                        <input req placeholder= "Search places" 
                        className= 'search-bar form-control me-2' 
                        onChange={handleFilter} 
                        ref={searchWord} 
                        />
                        <button className="search-icon" type="submit"><FiSearch size="25"/></button>
                    </form>
                {
                    filteredData.length !==0 && wordEntered !="" &&
                    <div className="data-result d-flex flex-column shadow mt-3">
                        {
                            filteredData.slice(0,15).map((restaurant, key) => {
                                const path = ((restaurant.Nome).toLowerCase()).replaceAll(' ','-');
                                return (
                                    <Link to={`/place-page/${path}`} 
                                    state={{restaurant}} 
                                    key={key}
                                    onClick={clearInput}
                                    className="data-item text-decoration-none">
                                    {restaurant.Nome}
                                    </Link>
                
                                    )  
                        })}
                    </div>      
                }
            </div>  
            <button className="navbar-toggler" id="hamburger-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FiMenu className="navbar-toggler-icon" size="15"/>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"> 
            {user || loginStatus?           
                    (
                        <>
                            <li className="nav-item">
                                <Link to={`/user-page/${(user.Username).toLowerCase()}`} className="nav-link" data-testid="user-link"><FiUser className="font-nav" size="25"/>Hello {user.Username}</Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={handleLogOut} className="nav-link" data-testid="logout-link"><FiLogOut className="font-nav" size="25"/> Logout</a>
                            </li>
                        </>
                    ):(
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" data-testid="login-link"><FiLogIn className="font-nav" size="25"/> Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link" data-testid="signup-link"><FiUserPlus className="font-nav" size="25"/> Signup</Link>
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
