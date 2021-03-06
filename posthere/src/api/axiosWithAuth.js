import axios from "axios"

export const axiosWithAuth = () =>{
    const token = localStorage.getItem("token")

    return axios.create({
        header:{
            Authorization:token
        },
        baseURL:"https://posthere-subreddit-app.herokuapp.com/"
    })
}