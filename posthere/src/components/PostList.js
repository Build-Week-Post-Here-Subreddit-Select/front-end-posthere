import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import Posts from "./Posts";
import NewPostForm from "./NewPostForm"

const PostList = ({refresh, setRefresh}) => {
  const [list, setList] = useState([]);
  const [post, setPost] = useState({ post_title: "", post_text: ""});

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axiosWithAuth()
      .get("/posts")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log({err: err.message}));
  };

  const handleChanges = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    axiosWithAuth()
      .post("/posts", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setPost({ post_title: "", post_text: "" });
    setRefresh(!refresh)

  };

  return (
    <div>
      <section>
        <NewPostForm
          handleChanges={handleChanges}
          submit={onSubmit}
          post={post}
        />
      </section>

      <section>
        {list.map((post) => {
          return <Posts key={post.id} post={post} setList={setList} />;
        })}
      </section>
    </div>
  );
};

export default PostList; 