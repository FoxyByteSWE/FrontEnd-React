import React from "react";
import { FiUserPlus } from 'react-icons/fi';

function Signup() {
    return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Sign Up</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiUserPlus className="font-nav" size="50"/>
                            <form className="my-4">
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="Username"></input>
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="E-mail"></input>
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="Password"></input>
                                    
                            </form>
                            <button className="btn btn-primary mt-4">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;