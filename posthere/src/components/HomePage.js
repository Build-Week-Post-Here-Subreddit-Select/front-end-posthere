import React, { useState } from "./node_modules/react";


const HomePage = () =>{
   
    const [newPost, setNewPost] = useState({
        postItems:{
          title:"",
          body:"",
        }
      });

      const handleChange = (e) =>{
        setNewPost({
          loginItems:{
            ...newPost.postItems,
            [e.target.name]: e.target.value
          }
        })
      }
    return(
        <div className= "login-form">
          <h1>Posts</h1>

      <form >
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={newPost.postItems.title}
          onChange={handleChange}
          placeholder="Enter Title"
        />
        <label>Password:</label>
        <input
          placeholder="Enter Password"
          type="text"
          name="body"
          value={newPost.postItems.body}
          onChange={handleChange}

        />
        <button type="submit">Log in</button>
      </form>
    </div>
    )
}
export default HomePage;

// const HomePage = () =>{
//     const [postHere, setPostHere] = useState ([])

//     useEffect(() =>{
//         getData();
//     },[])

//     const getData = () =>{
//         axiosWithAuth()
//         .get("")
//         .then((res) =>{
//             setPostHere(res.data)
//         })
//         .catch((err) => console.log(err))
//     }

//     return(
//         <div className="posts-wrap">
//             <h1>Post here</h1>
//         <PostList posts={postHere} updatePost={setPostHere} />
//         <Posts posts={postHere} />
//         </div>
//     )
// }
// export default HomePage;