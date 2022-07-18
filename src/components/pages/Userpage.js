import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../style/Userpage.css";
import Axios from "axios";
import { UserContext } from "../UserContext";

function UserPage() {
    const {user, setUser} = useContext(UserContext);
    const emailEdit = user[0].Email;
    const [usernameEdit, setUsernameEdit] = useState(user[0].Username);
    const [imageUpload, setImageUpload] = useState(null);
   /* const [userObj, setUserObj] = useState ([
        {Email: emailEdit, Username: usernameEdit, Foto: "img"},
    ]);*/

    const update = (emailEdit) => {
        Axios.put('http://localhost:3001/update', {
            Email: emailEdit,
            Username: usernameEdit,
        }).then((response)=> {
            console.log(usernameEdit);
            const userObj= [
                {Email: emailEdit, Username: usernameEdit, Foto: "img"},
            ];
            setUser(userObj);
        });
    };

    const upload = (emailEdit) => {
        Axios.put('http://localhost:3001/upload', {
            Email: emailEdit,
            Foto: imageUpload,
        }).then((response)=> {
            console.log(response.config);
        });
    };
    //console.log(emailEdit)
    //console.log(usernameEdit);
    const uploadImage = () => {
        if (imageUpload== null) return;
        upload(emailEdit);

    };
    return (
        <div className="container my-5">
            <h2 className="text-center">Your Page</h2>
            <div className="user-card d-flex flex-row">
                <div className="user-card-left">
                    <div className="user-card-in-left d-flex flex-column align-items-center">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/>
                        <h6>{user[0].Username}</h6>
                        <input type="file" className="btn btn-light" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                        <button onClick={uploadImage} className="btn btn-light">Change Image</button>
                    </div>
                </div>
                <div className="user-card-info">
                    <div className="user-card-in">
                        <h6 className="b-b-default ">Information</h6>
                        <div className="user-info">
                            <p className="mt-3">Name</p>
                            <div className="mb-4 d-flex flex-row justify-content-between b-b-default">
                                <input className="edit-user-info" placeholder={user[0].Username} onChange={(e) => {setUsernameEdit(e.target.value);}} ></input>
                                <button type="button" className="btn btn-primary" onClick={()=>update(emailEdit)}>Edit</button>
                            </div>
                            <p>Email</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="edit-user-info">{user[0].Email}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            

        </div>
    );
}

export default UserPage;



