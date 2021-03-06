import React, { useState } from "./node_modules/react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "/node_modules/react-router-dom"

const Signupfn = () =>{
    const [newUser, setNewUser] = useState({
        signUpItems:{
            username:"",
            password:"",
            email:"",
            name:""
         }
    })

    const history = useHistory();


    const handleChange = (e) =>{
        setNewUser({
            signUpItems:{
                ...newUser.signUpItems,
                [e.target.name]: e.target.value
            }
        })
    }

    const signUp = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post("api/auth/register",newUser.signUpItems)
        .then((res) =>{
            console.log(res)
            window.localStorage.setItem("token", res.data.payload)
            history.push("/login")
        })
        .catch((err) => console.log({err: err.message}))
    }

    return(
        <form onSubmit={signUp}>
            <h1>Sign up</h1>
        <label htmlFor='firstName'>
            <input
                type='text'
                name='username'
                placeholder="Create Username"
                value={newUser.signUpItems.username}
                onChange={handleChange}
                />
            </label>  
            <label htmlFor='lastName'>
            <input
                type='password'
                name='password'
                placeholder="Create Password"
                value={newUser.signUpItems.password}
                onChange={handleChange}
                />
            </label>  
  
        {/* <label htmlFor='createUsername'>
            <input
                type='text'
                name='createUsername'
                placeholder="Create Username"
                value={newUser.signUpItems.createUsername}
                onChange={handleChange}
                />
            </label>   */}

            <label htmlFor='createPassword'>
            <input
                type='text'
                name='email'
                placeholder="Email"
                value={newUser.signUpItems.email}
                onChange={handleChange}
                />
            </label>

            <label htmlFor='verifyPassword'>
            <input
                type='text'
                name='name'
                placeholder="Name"
                value={newUser.signUpItems.name}
                onChange={handleChange}
                />
            </label>

            <button type="submit">Sign Up</button>


        </form>
    )

}
export default Signupfn;
