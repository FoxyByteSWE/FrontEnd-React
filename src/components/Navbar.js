import React from 'react'
import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiSearch } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import "../style/Navbar.css";
import "../style/Search.css";
import mainLogo from "../Logo/Logo.png";
import { UserContext } from "../components/UserContext";

function Navbar({placeholder}) {   
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/restaurants')
        .then(res => res.json())
        .then(data => setRestaurantes(data))
    });
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
        navigate('/');
    };
    return(
        <div className="nav-bar d-flex flex-row justify-content-between">
            <Link to="/" className="logo"><img src={mainLogo} alt="Logo" /></Link>
            <div className="d-flex flex-column search-container justify-content-center">
                <div className="d-flex flex-row">
                    <input placeholder= {placeholder} className= 'search-bar form-control me-2' onChange={handleFilter} ref={searchWord}/>
                    <div className="search-icon">
                        {wordEntered.length === 0 ? (
                            <FiSearch size="25"/>
                        ) : (
                            <AiOutlineClose size="25" id="clearBtn" onClick={clearInput} />
                        )}                        
                    </div>
                </div>
                {filteredData.length !== 0 &&
                <div className="data-result d-flex flex-column shadow">
                    { 
                        filteredData.slice(0,15).map((restaurant, key) => {
                            const path = ((restaurant.Nome).toLowerCase()).replaceAll(' ','-');
                            return <Link to={`/place-page/${path}`} state={{restaurant}} key={key} className="data-item" onClick={clearInput}>{restaurant.Nome}</Link>
                                     
                    })}
                </div>      
                }
            </div>    
                <ul className="nav-links d-flex flex-row justify-content-between">
                    {user?              
                    (
                        <>
                            <li>
                                <Link to={`/user-page/${(user[0].Username).toLowerCase()}`} className="text-decoration-none"><FiUser className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <a onClick={handleLogOut} className="text-decoration-none"><FiLogOut className="font-nav" size="25"/></a>
                            </li>
                        </>
                    ):(
                        <>
                            <li>
                                <Link to="/login" className="text-decoration-none"><FiLogIn className="font-nav" size="25"/></Link>
                            </li>
                            <li>
                                <Link to="/sign-up" className="text-decoration-none"><FiUserPlus className="font-nav" size="25"/></Link>
                            </li>
                        </>
                        )
                    }                  
                </ul>
        </div>
    );
}

export default Navbar;
/*
{`/user-page/${username}`}
*/