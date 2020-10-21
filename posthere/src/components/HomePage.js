import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import PostList from "./PostList"
import Posts from "./Posts"

const HomePage = () =>{
    const [postHere, setPostHere] = useState ([])

    useEffect(() =>{
        getData();
    },[])

    const getData = () =>{
        axiosWithAuth()
        .get("/api/posts")
        .then((res) =>{
            setPostHere(res.data)
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="posts-wrap">
            <h1>Post here</h1>
        <PostList posts={postHere} updatePost={setPostHere} />
        <Posts posts={postHere} />
        </div>
    )
}
export default HomePage;