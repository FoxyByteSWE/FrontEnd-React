import React from 'react';
import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiSearch, FiMenu } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import "../style/Navbar.css";
import "../style/Search.css";
import mainLogo from "../Logo/Logo.png";
import { UserContext } from "../components/UserContext";

function Navbar({loginStatus}) {  
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/restaurants')
        .then(res => res.json())
        .then(data => setRestaurantes(data)).catch(err => alert(err.message || err))
    },[]);
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = restaurantes.filter((value) => {
            return value.Nome.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        } 
    };

    const searchWord=useRef(null);
    const clearInput = () => {
        setFilteredData([]);
        searchWord.current.value = '';
        setWordEntered("");
      };

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        setUser(null);
        localStorage.clear();
        navigate('/');
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand"><img src={mainLogo} alt="Logo" /></Link>
            <div className="d-flex flex-column search-container justify-content-center">
                <div className="d-flex flex-row justify-content-center container-search-icon">
                    <input placeholder= "Search places" className= 'search-bar form-control me-2' onChange={handleFilter} ref={searchWord}/>
                    <div className="search-icon">
                        {wordEntered.length === 0 ? (
                            <FiSearch size="25"/>
                        ) : (
                            <AiOutlineClose size="25" id="clearBtn" onClick={clearInput} />
                        )}                        
                    </div>
                </div>
                {filteredData.length !==0 &&
                <div className="data-result d-flex flex-column shadow mt-3">
                    { 
                        filteredData.slice(0,15).map((restaurant, key) => {
                            const path = ((restaurant.Nome).toLowerCase()).replaceAll(' ','-');
                            return <Link to={`/place-page/${path}`} state={{restaurant}} key={key} className="data-item text-decoration-none" onClick={clearInput}>{restaurant.Nome}</Link>
                                     
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
