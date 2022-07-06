import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Favourites from "./components/pages/Favourites";
import ErrorPage from "./components/pages/ErrorPage";
import PlacePage from "./components/pages/PlacePage";
import Userpage from "./components/pages/Userpage";
import Signup from "./components/pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import ".//style/App.css";


function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  Axios.get("http://localhost:3001/restaurants").then((response) => {
    setRestaurantes(response.data);
  });
  
  return (
    <Router>
      <div className="App">
        <Navbar placeholder="Search places" restaurantes={restaurantes}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/place-page" element={<PlacePage/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/user-page" element={<Userpage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;


/*
        {
          restaurantes?.length > 0 ?
          (
          <div className="restaurant-result">
              {restaurantes.map((res)=>(
              <RestaurantCard res={res} />
              ))}
          </div>
          ) :
          (
          <div className="empty">
              <h2>No restaurantes found</h2>
          </div>
          )
        }
*/