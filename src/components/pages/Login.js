import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center">
                            <svg className="my-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                            <form action="">
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="Username"></input>
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="Password"></input>
                                <div className="text-center mt-3">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="mt-3 text-center">Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;