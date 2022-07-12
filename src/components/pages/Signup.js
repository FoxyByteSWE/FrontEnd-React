import {React, useState, useRef } from "react";
import { FiUserPlus } from 'react-icons/fi';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { useFormik } from "formik";
import "../../style/Signup.css";
//import * as yup from "yup";

const Signup = () => {

    const [emailReg, setEmailReg] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const usernameRef= useRef(null);
    const emailRef= useRef(null);
    const passwordRef= useRef(null);

    const navigate = useNavigate();

    const signup = () => {
        Axios.post('http://localhost:3001/register', {
            Email: emailReg,
            Username: usernameReg,
            Password: passwordReg,
        }).then((response)=> {
            console.log(response);
        });

        usernameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        navigate('/');
    };
/*
    const userSchema = yup.object().shape({
        username: yup.string().required("Required"),
        email: yup.string().email("Please enter a valid email").required("Required"),
        password: yup.string().min(4).max(15).required("Required"),
    });

    const onSubmit = async (values, actions) => {
        console.log("submitted");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
        },
        validationSchema: userSchema,
        onSubmit,
    });

    ---------da aggiungere dopo ogni form con i campi giusti
    {errors.password && touched.password && <p className="error-msg-validation">{errors.password}</p>}
    ----------- onSubmit={handleSubmit} dentro al tag form
    ----------- onBlur={handleBlur} e value={values.email} in ogni tag input
*/
    return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Sign Up</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiUserPlus className="font-nav" size="50"/>
                            <form className="my-4">
                                <input 
                                type="text"
                                name= "username"
                                onChange={(e) => {setUsernameReg(e.target.value); /*this.handleChange();*/}} 
                                className="form-control my-3 py-2" 
                                placeholder="Username"
                                ref={usernameRef}
                                >
                                </input>
                                <input 
                                type="email"
                                name= "email"
                                onChange={(e) => {setEmailReg(e.target.value); /*this.handleChange();*/}}  
                                className="form-control my-3 py-2" 
                                placeholder="E-mail"
                                ref={emailRef}
                                >
                                </input>
                                <input 
                                type="password"
                                name= "password"
                                onChange={(e) => {setPasswordReg(e.target.value); /*this.handleChange();*/}} 
                                className="form-control my-3 py-2" 
                                placeholder="Password"
                                ref={passwordRef}
                                >                              
                                </input>
                            </form>
                            <button className="btn btn-primary mt-4" type="submit" onClick={signup} >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
