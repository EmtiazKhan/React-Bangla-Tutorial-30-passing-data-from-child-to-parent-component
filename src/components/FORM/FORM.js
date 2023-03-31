import React, { useState } from "react";
import style from "./form.module.css"
function FORM() {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");

    const [user,setUser] = useState({
        name : '',
        email : '',
        password : ''
    })
    const {name,email,password} = user;

    const handleNameChange = (e) =>{
        setUser({name: e.target.value,email,password});
    }

    const handleEmailChange = (e) =>{
        setUser({name,email: e.target.value,password});
    }
    const handlePasswordChange = (e) =>{
        setUser({name,email,password: e.target.value});
    }
    const handleSubmit = (e) =>{
        console.log("form is submitted");

        console.log(user);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}> 
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}  required />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password"  value={password} onChange={handlePasswordChange} required />
                </div>

                <div className={style.formGroup}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
export default FORM;