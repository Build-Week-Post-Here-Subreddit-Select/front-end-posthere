import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

const initialPost ={
    title:"",
    body:"",
};

const PostList = ({ posts, updatePosts }) =>{
    console.log(posts);
    const [editing, setEditing] = useState(false);
    const [postToEdit, setPostToEdit] = useState(initialPost);
    const [newPost, setNewPost] = useState(initialPost)

    const editPost = post =>{
        setEditing(true);
        setPostToEdit(post)
    }

    const saveEdit = e =>{
        e.preventDefault();
        axiosWithAuth()
        .put(`api/posts/${postToEdit.id}`, postToEdit)
        .then((res) =>{
            setEditing(false);
            updatePosts(
                posts.map(color =>{
                    return post.id === postToEdit.id ? res.data : color;
                })
            )
        })
        .catch((err) =>{
            console.log(err.message);
        })
    }

    const cancelEdit = (e) =>{
        setEditing(false);
    }

    const deletePost = post =>{
        axiosWithAuth()
        .delete(`api/posts${post.id}`)
        .then((res) =>{
            updatePosts(
                posts.filter((postItem) =>{
                    return postItem.id !== color.id;
                })
            )
        })
        .catch((err) =>{
            console.log(err.message)
        })

    }

    return(
        <div className="post-wrap">
            <h1>Post Here</h1>
            <ul>
        {posts.map(post => (
          <li
          key={post.post}
          onClick={() => editPost(post)}
        >
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deletePost(post)
                  }
                }>
                  x
              </span>{" "}
              {post.post}
            </span>
           
          </li>
        ))}
      </ul>
      
      
        </div>
    )
}