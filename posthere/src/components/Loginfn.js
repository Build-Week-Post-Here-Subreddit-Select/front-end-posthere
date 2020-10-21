import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../api/axiosWithAuth";

const Loginfn = () =>{
    const [user,setUser] = useState({
        loginItems:{
            username:"",
            password:"",
        }
    })


    const history = useHistory();

    const handleChange = (e) =>{
        setUser({
            loginItems:{
                ...user.loginItems,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post("https://posthere-subreddit-app.herokuapp.com/api/auth/login",user.loginItems)
        .then((res) =>{
            console.log(res)
            window.localStorage.setItem("token", res.data.payload)
            history.push("/homepage")
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className= "login-form">
          <h1>Posthere</h1>

      <form onSubmit={login}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.loginItems.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <label>Password:</label>
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={user.loginItems.password}
          onChange={handleChange}

        />
        <button type="submit">Log in</button>
      </form>
    </div>
    )
}
export default Loginfn;
