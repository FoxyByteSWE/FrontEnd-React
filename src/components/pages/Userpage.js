import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../style/Userpage.css";
import axios from "axios";
import { UserContext } from "../UserContext";

function UserPage() {
    const {user, setUser} = useContext(UserContext);
    console.log(user[0])

    return (
        <div className="container my-5">
            <h2 className="text-center">Your Page</h2>
            <div className="user-card d-flex flex-row">
                <div className="user-card-left">
                    <div className="user-card-in-left d-flex flex-column align-items-center">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/>
                        <h6>{user[0].Username}</h6>
                        <button type="button" className="btn btn-light">Edit picture</button>
                    </div>
                </div>
                <div className="user-card-info">
                    <div className="user-card-in">
                        <h6 className="b-b-default ">Information</h6>
                        <div className="user-info">
                            <p className="mt-3">Name</p>
                            <div className="mb-4 d-flex flex-row justify-content-between b-b-default">
                                <input className="edit-user-info" placeholder={user[0].Username} ></input>
                                <button type="button" className="btn btn-primary">Edit</button>
                            </div>
                            <p>Email</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="edit-user-info">{user[0].Email}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default UserPage;



