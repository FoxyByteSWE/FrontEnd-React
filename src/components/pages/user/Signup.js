import React from "react";
import { FiUserPlus } from 'react-icons/fi';
import "./index.css";
import modelView from "./modelView";

const Signup = () => {
    const { signup, setUsernameLog, setPasswordLog, setEmailLog, error } = modelView();

return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Sign Up</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiUserPlus className="font-nav" size="50"/>
                            <form className="my-4" onSubmit={signup}>
                                <input
                                onChange={(e) => {setUsernameLog(e.target.value);}}
                                type="text"
                                name= "username"
                                className="form-control py-2 mt-4" 
                                placeholder="Username"
                                minLength="4"
                                required
                                />
                                <input
                                onChange={(e) => {setEmailLog(e.target.value);}}
                                type="email"
                                name= "email"                              
                                className="form-control py-2 mt-4" 
                                placeholder="E-mail"
                                required
                                />
                                <input
                                onChange={(e) => {setPasswordLog(e.target.value);}}
                                type="password"
                                name= "password"                                         
                                className="form-control py-2 mt-4" 
                                placeholder="Password"
                                minLength="6"
                                required
                                />  
                                <p className="error-msg-validation">{error.message}</p>
                                <button className="btn btn-primary btn-form" type="submit" >Sign Up</button>                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;