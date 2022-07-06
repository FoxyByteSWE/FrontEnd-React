import React from "react";
import {Link} from 'react-router-dom';
import { FiLogIn, FiLogOut, FiUserPlus, FiUser, FiSearch, FiHeart } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import "../style/Navbar.css";
import "../style/Search.css";
import mainLogo from "../Logo/Logo.png";
import { useState } from "react";

function Navbar({placeholder, restaurantes}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
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

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };

    return(
        <div className="nav-bar d-flex flex-row justify-content-between">
            <Link to="/" className="logo"><img src={mainLogo} alt="Logo" /></Link>
            <div className="d-flex flex-column search-container justify-content-center">
                <div className="d-flex flex-row">
                    <input placeholder= {placeholder} className= 'search-bar form-control me-2' onChange={handleFilter} />
                    <div className="search-icon">
                        {filteredData.length === 0 ? (
                            <FiSearch size="25"/>
                        ) : (
                            <AiOutlineClose size="25" id="clearBtn" onClick={clearInput} />
                        )}                        
                    </div>
                </div>
                {filteredData.length !== 0 &&
                <div className="data-result d-flex flex-column shadow">
                    {filteredData.slice(0,15).map((value, key) => {
                        console.log(value)
                        return <Link to="/place-page" state={{value}} key={key} className="data-item" target="_blank">{value.Nome}</Link>
                    })}
                </div>      
                }
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