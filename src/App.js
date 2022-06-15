import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import ErrorPage from "./components/pages/ErrorPage";
import Placepage from "./components/pages/Placepage";
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
          <Route path="/home" element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/place-page" element={<Placepage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
