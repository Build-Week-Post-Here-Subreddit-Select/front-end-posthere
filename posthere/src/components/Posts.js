import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";



const Posts = (props) => {
  const [editToggle, setEditToggle] = useState(false);
  
  const [editPostInfo, setEditPostInfo] = useState({
    name: props.post.name,
    age: props.post.age,
    email: props.post.email,
  });

  const deletePost = (e) => {
    axiosWithAuth()
      .delete(`https://posthere-subreddit-app.herokuapp.com/api/users/1/posts/1${props.post.id}`)
      .then((res) => {
        props.setList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const editChange = (e) => {
    e.preventDefault();
    setEditPostInfo({
      ...editPostInfo,
      [e.target.name]: e.target.value,
    });
  };
  const editFriend = (e) => {
    e.preventDefault();
    setEditToggle(true);
  };
  const submitEdit = (e) => {
    axiosWithAuth()
      .put(`https://posthere-subreddit-app.herokuapp.com/api/users/1/posts/${props.post.id}`, editPostInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const cancelEdit = (e) => {
    setEditToggle(false);
  };
  return (
      
    <section >
      {editToggle ? (
        <div className="posts-section">
          <form>
            <label> Name:&nbsp;</label>
            <input
              type="text"
              name="name"
              value={editPostInfo.name}
              onChange={editChange}
            />
            <label> Age:&nbsp;</label>
            <input
              type="text"
              name="age"
              value={editPostInfo.age}
              onChange={editChange}
            />
            <label>Email:&nbsp;</label>
            <input
              type="text"
              name="email"
              value={editPostInfo.email}
              onChange={editChange}
            />
            <button onClick={cancelEdit}>Cancel Edit</button>
            <button onClick={submitEdit}>Submit</button>
          </form>
        </div>
      ) : (
        <div className="new-added-posts">
          <p> Name:&nbsp;{props.post.name}</p>
          <p> Age:&nbsp;{props.post.age}</p>
          <p> Email:&nbsp;{props.post.email}</p>
          <button onClick={deletePost}>Delete</button>
          <button onClick={editFriend}>Edit</button>
        </div>
      )}
    </section>
  );
};

export default Posts; 