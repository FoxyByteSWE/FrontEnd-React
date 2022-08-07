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
import React, { Component, useEffect }  from 'react';
import { useState, useMemo } from "react";
import "./style/App.css";
import { UserContext } from "./components/UserContext";
import Axios from "axios";

function App() {
  Axios.defaults.withCredentials = true; 
  const [user, setUser] = useState(null);
  const userValue = useMemo(()=>({user, setUser}), [user, setUser]);
  const [loginStatus, setLoginStatus] = useState('');
  useEffect(()=> {
      Axios.get("http://localhost:3001/login").then((response) => {
          setLoginStatus(response.data.LoggedIn);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={userValue}>
          <Navbar loginStatus={loginStatus}/>
        </UserContext.Provider>
        <UserContext.Provider value={userValue}>
          <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/place-page/:path" element={<PlacePage/>} />
                <Route path="/favourites" element={<Favourites/>}/>
                <Route path="/user-page/:username" element={<Userpage />}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </div>
        </UserContext.Provider>
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