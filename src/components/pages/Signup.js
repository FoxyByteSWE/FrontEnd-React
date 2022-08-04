import React from "react";
import {useState } from "react";
import { FiUserPlus } from 'react-icons/fi';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../../style/LoginSignup.css";
import * as yup from "yup";

const Signup = () => {
    const [emailReg, setEmailReg] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const navigate = useNavigate();
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
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
        },
        validationSchema: userSchema,
        onSubmit,
    });

    const signup = () => {
        if(!errors.email && !errors.username && !errors.password) {
            Axios.post('http://localhost:3001/register', {
                Email: emailReg,
                Username: usernameReg,
                Password: passwordReg,
            });
            navigate('/login');
        }
    };

return(
        <div className="container my-5">
            <h2 className="page-title text-center mb-4">Sign Up</h2>
            <div className="row pt-4">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body text-center py-5">
                            <FiUserPlus className="font-nav" size="50"/>
                            <form className="my-4" onSubmit={handleSubmit}>
                                <input
                                value={values.username}
                                onChange={(e) => {setUsernameReg(e.target.value); handleChange(e)}}
                                type="text"
                                name= "username"
                                className="form-control py-2 mt-4" 
                                placeholder="Username"
                                onBlur={handleBlur}
                                />
                                <p className="error-msg-validation">{errors.username && touched.username && errors.username}</p>
                                <input
                                value={values.email}
                                onChange={(e) => {setEmailReg(e.target.value); handleChange(e)}}
                                type="email"
                                name= "email"                              
                                className="form-control py-2 mt-4" 
                                placeholder="E-mail"
                                onBlur={handleBlur} 
                                />
                                <p className="error-msg-validation">{errors.email && touched.email && errors.email}</p>
                                <input
                                value={values.password}
                                onChange={(e) => {setPasswordReg(e.target.value); handleChange(e)}}
                                type="password"
                                name= "password"                                         
                                className="form-control py-2 mt-4" 
                                placeholder="Password"
                                onBlur={handleBlur}
                                />  
                                <p className="error-msg-validation">{errors.password && touched.password && errors.password}</p>
                                <button className="btn btn-primary btn-form" type="submit" onClick={signup} >Sign Up</button>                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;