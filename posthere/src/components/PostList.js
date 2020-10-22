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
        .put(`https://posthere-subreddit-app.herokuapp.com/api/users/1/posts/${postToEdit.id}`, postToEdit)
        .then((res) =>{
            setEditing(false);
            updatePosts(
                posts.map(post =>{
                    return post.id === postToEdit.id ? res.data : post;
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
        .delete(`https://posthere-subreddit-app.herokuapp.com/api/users/1/posts/1${post.id}`)
        .then((res) =>{
            updatePosts(
                posts.filter((postItem) =>{
                    return postItem.id !== post.id;
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

export default PostList;