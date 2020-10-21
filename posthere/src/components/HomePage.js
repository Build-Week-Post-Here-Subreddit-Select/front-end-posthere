import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";


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
        <>
        <PostList posts={postHere} updatePost={setPostHere} />
        <Posts posts={postHere} />
        </>
    )
}
export default HomePage;