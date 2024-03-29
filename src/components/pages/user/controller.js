import { useState, useContext } from "react";
import { API } from '../../../config';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function controller() {
    const [usernameLog, setUsernameLog] = useState('');
    const [emailLog, setEmailLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [error, setError] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const { user, setUser } = useContext(UserContext);
    // const usernameRef = useRef(null);
    // const passwordRef = useRef(null);
    const navigate = useNavigate();
    async function login(e) {
        e.preventDefault();
        const response = await fetch(API + '/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameLog,
                password: passwordLog,
            }) // body data type must match "Content-Type" header
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            return alert(message);
        }
        const result = await response.json();
        setUser(result);
        localStorage.setItem('user', JSON.stringify(result));
        navigate(`/user-page/${usernameLog}`);
    };

    async function signup(e) {
        e.preventDefault();
        console.log({
            api: API + '/users',
            usernameLog, passwordLog, emailLog
        });
        const response = await fetch(`${API}/register`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'cors', // no-cors, *cors, same-origin
            body: JSON.stringify({
                username: usernameLog,
                password: passwordLog,
                email: emailLog
            }) // body data type must match "Content-Type" header
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.message}`;
            return alert(message);
        }

        const result = await response.json();
        setUser(result);
        localStorage.setItem('user', JSON.stringify(result));
        navigate(`/user-page/${usernameLog}`);
    }

    async function update() {
        const response = await fetch(`${API}/users`, {
            method: 'PUT', // GET, POST, *PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'cors', // no-cors, *cors, same-origin
            body: JSON.stringify({
                email: user.Email,
                password: passwordLog
            }) // body data type must match "Content-Type" header
        })
        if (!response.ok) {
            const message = `An error has occured: ${response.message}`;
            return alert(message);
        }
        else return alert('success!')
    }

    async function deleteUser(e) {
        e.preventDefault();
        const response = await fetch(`${API}/users/${user.Email}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            const message = `An error has occured: ${response.message}`;
            return alert(message);
        }
        setUser(null);
        localStorage.clear();
        navigate('/');
    }

    return {
        login,
        setUsernameLog,
        setPasswordLog,
        setEmailLog,
        error,
        loginStatus,
        signup,
        user,
        update,
        deleteUser
    }
}