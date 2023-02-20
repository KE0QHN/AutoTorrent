import React, { useState } from "react";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <h1>KPG Developer Panel</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="user" placeholder="example" id="username" name="username"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        </div>
    )
}