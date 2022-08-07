import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import "./index.css";
import modelView from "./modelView"

function Login() {
    const { login, setUsernameLog, setPasswordLog, loginStatus } = modelView();
    return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Log In</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiLogIn className="font-nav" size="50"/>
                            <form className="my-4" onSubmit={login}>
                                <input type="text" onChange={(e) => {setUsernameLog(e.target.value);}} className="form-control mt-4 py-2" placeholder="Username" ></input>
                                <input type="password" onChange={(e) => {setPasswordLog(e.target.value);}} className="form-control mt-4 py-2" placeholder="Password" ></input>
                                <p className="error-msg-validation"> {loginStatus} </p>
                                <button  className="btn btn-primary btn-form" type="submit">Login</button>
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