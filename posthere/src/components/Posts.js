import React, { useState, useEffect } from "react";

const Posts = ({ posts }) =>{
    const [postData, setPostData] = useState([])

    useEffect(() =>{
        const generatePostData = posts.map((_, i) => ({
            value: Math.floor(Math.random() * (posts.length * 2)) + 1,
            key: `${i + 1}`
          }));
          setPostData(generatePostData);
        }, [posts]);
    

    return(
        <div className="post-wrap">
        <h1>Post Here</h1>
        </div>
    )
} 
export default Posts;