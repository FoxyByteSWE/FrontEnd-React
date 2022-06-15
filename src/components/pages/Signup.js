import React from "react";

function Signup() {
    return(
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center">
                        <svg className="my-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                            <form action="">
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="Username"></input>
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="E-mail"></input>
                                <input type="text" name="" className="form-control my-3 py-2" placeholder="Password"></input>
                                <div className="text-center mt-3">
                                    <button className="btn btn-primary">Sign Up</button>
                                    <span className="bi bi-person-circle"></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;