import React, { useState, useContext } from "react";
import RestaurantCard from "../../restaurantcard/RestaurantCard";
import "../../../style/Userpage.css";
import controller from "./controller"
import { AvatarGenerator } from "random-avatar-generator";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

function UserPage() {
const {setPasswordLog, user, update, deleteUser} = controller();
const avatarGenerator = new AvatarGenerator();
const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
})
const formOptions = { resolver: yupResolver(formSchema) }
const { register, handleSubmit, reset, formState } = useForm(formOptions)
const { errors } = formState
    return (
        <div className="container my-5">
            <div className="d-flex flex-row justify-content-between info-container">
                <div className="d-flex flex-column justify-content-between">
                    <img src={avatarGenerator.generateRandomAvatar()} width = "100" className="rounded-circle align-self-center" alt="..."></img>
                    <h2 className="text-center">{user.Username}</h2>
                    <p className="p-2 text-center">{user.Email}</p>
                </div>
                <div>
                    <h3>Cambia la password</h3>
                    <form onSubmit={handleSubmit(update)} className="d-flex flex-column justify-content-between">
                        <div className="form-group">
                            <input
                            name="password" 
                            {...register('password')}
                            type = "password" 
                            className={`form-control mt-4 py-2 ${errors.password ? 'is-invalid' : ''}`} 
                            placeholder="Nuova password" 
                            required>
                            </input>
                            <div className="invalid-feedback">{
                                errors.password?
                            errors.password.message: null}</div>
                        </div>
                        <div className="form-group">
                        <input
                        name="confirmPwd" 
                        {...register('confirmPwd')}
                        onChange={(e) => {setPasswordLog(e.target.value);}} 
                        type = "password" 
                        className={`form-control mt-4 py-2 ${errors.password ? 'is-invalid' : ''}`} 
                        placeholder="Conferma password" required>
                        </input>
                        <div className="invalid-feedback">{
                            errors.confirmPwd? errors.confirmPwd.message: ""}</div>
                        </div>
                        <button  className="btn btn-primary btn-form" type="submit">Cambia</button>
                    </form>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={deleteUser}>Eimina profilo</button>
                </div>
            </div>
            <h2 className="user-section-title">Your Favourites</h2>
            <div className='user-favs'>
            {
                user.favList && user.favList.map((restaurant, index) => {
                    return (   
                        <div className="col-sm my-3" key={index}>
                            <RestaurantCard restaurant={restaurant}/>
                        </div>
                    )
                    })
            }
            </div>
        </div>
    );
}

export default UserPage;



