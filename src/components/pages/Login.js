import React, { useState, useRef, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import Axios from 'axios';
import { UserContext } from "../UserContext";
import "../../style/LoginSignup.css";
import { object } from "yup";

function Login() {
    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const {user, setUser} = useContext(UserContext);
    const usernameRef= useRef(null);
    const passwordRef=useRef(null);
    const navigate = useNavigate();

   // Axios.defaults.withCredentials = true;

    const login = () => {
       Axios.post('http://localhost:3001/login', {
            Username: usernameLog,
            Password: passwordLog,
        }).then((response)=> {
            if(response.data.message) {
                setLoginStatus(response.data.message);
                console.log(response.data)
            } else {
                const info = response.data[0];
                setUser(info);
                navigate('/');
            }
       });
    };


    useEffect(()=> {
        Axios.get("http://localhost:3001/login").then((response) => {
            console.log(response);
        });
    }, []);

    return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Log In</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiLogIn className="font-nav" size="50"/>
                            <form className="my-4">
                                <input type="text" onChange={(e) => {setUsernameLog(e.target.value);}} className="form-control mt-4 py-2" placeholder="Username" ></input>
                                <input type="password" onChange={(e) => {setPasswordLog(e.target.value);}} className="form-control mt-4 py-2" placeholder="Password" ></input>
                                <p className="error-msg-validation"> {loginStatus} </p>
                                <button onClick={login} className="btn btn-primary btn-form" type="button">Login</button>
                            </form>
                            <p className="text-center">Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;