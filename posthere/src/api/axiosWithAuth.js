import axios from "axios"

export const axiosWithAuth = () =>{
    const token = localStorage.getItem("token")

    return axios.create({
        headers:{
            authorization:`Bearer ${token}`
        },
        baseURL:"https://posthere-subreddit-app.herokuapp.com/api"
    })
}