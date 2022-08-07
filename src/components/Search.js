import React from 'react';
import { useState, useRef, useEffect } from "react";
import { FiSearch } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import "../style/Search.css";

function Search () {
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

    return(
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
            {filteredData.length !== 0 &&
                <div className="data-result d-flex flex-column shadow mt-3">
                    { 
                        filteredData.slice(0,15).map((restaurant, key) => {
                            const path = ((restaurant.Nome).toLowerCase()).replaceAll(' ','-');
                            return <Link to={`/place-page/${path}`} state={{restaurant}} key={key} className="data-item text-decoration-none" onClick={clearInput}>{restaurant.Nome}</Link>
                                    
                    })}
                </div>      
            }
        </div> 
    );
}

export default Search;