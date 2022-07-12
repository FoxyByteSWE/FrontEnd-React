import {React, useState, useRef, useContext} from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import Axios from 'axios';
import { UserContext } from "../UserContext";

function Login() {
    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const {user, setUser} = useContext(UserContext);

    const usernameRef= useRef(null);
    const passwordRef=useRef(null);

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            Username: usernameLog,
            Password: passwordLog,
        }).then((response)=> {

            if(response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setUser(response.data);
            }
            console.log(user.Email)
        });
        usernameRef.current.value = '';
        passwordRef.current.value = '';
    };
   
    return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Log In</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiLogIn className="font-nav" size="50"/>
                            <form className="my-4">
                                <input type="text" onChange={(e) => {setUsernameLog(e.target.value);}} className="form-control my-3 py-2" placeholder="Username" ref={usernameRef}></input>
                                <input type="password" onChange={(e) => {setPasswordLog(e.target.value);}} className="form-control my-3 py-2" placeholder="Password" ref={passwordRef}></input>
                                <p className="login-message">
                                    {loginStatus}
                                </p>
                            </form>
                                
                            <button onClick={login} className="btn btn-primary my-4">Login</button>
                            <p className="text-center">Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;