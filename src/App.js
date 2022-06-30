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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
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
