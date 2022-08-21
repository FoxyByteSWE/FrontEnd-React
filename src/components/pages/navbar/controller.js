import { useContext, useState, useRef } from "react";
import { API } from '../../../config';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";



export default function controller() {
	const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
    
    async function fetchResInfo() {
        const response = await fetch('http://localhost:3001/restaurants');
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            return alert(message);
        }
        const result = await response.json();
        setRestaurantes(result);
    }

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

    const [searchRest, setSearchRest] = useState([]);
    const [keyword, setKeyword] = useState(null);
    
    const navigate = useNavigate();
    const handleLogOut = () => {
        setUser(null);
        localStorage.clear();
        navigate('/');
    };
    const search = e => {
    e.preventDefault();
    if (searchWord.current.value) setKeyword(searchWord.current.value);
    navigate('/search?s='+ searchWord.current.value);
    }

    async function fetchRest(s) {
        const response = await fetch('http://localhost:3001/search?s=' + s,
            {
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            return alert(message);
        }
        const result = await response.json();
        setSearchRest(result);
    }

    return {
        search,
        fetchRest, setKeyword, keyword,
        searchRest, setSearchRest,
    	restaurantes,
    	filteredData,
        fetchResInfo,
        handleFilter,
        handleLogOut,
        searchWord,
        wordEntered,
        clearInput,
        user
    }

}