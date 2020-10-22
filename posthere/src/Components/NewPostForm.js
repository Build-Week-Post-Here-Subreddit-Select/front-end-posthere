import React, { useState } from "react";

import {axiosWithAuth} from '../api/axiosWithAuth'

const NewPostForm = () => {
    
    const [input, setInput] = useState({
            post_title: "",
            post_text: ""
            
    })

     const handleFormChange = e => {
        console.log("something changed")
        setInput({
                ...input,
                [e.target.name]: e.target.value
            })   
    }

 
    

    const newPost = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://posthere-subreddit-app.herokuapp.com/api/users/1/posts/', input)
            .then(addedPost=> {
                console.log(addedPost)
            })
            .catch(err => {
                console.log({err: err.message})
            })
            .finally(() => {
        
                setInput({
                    post_title: "",
                    post_text: ""
                    
                })
                console.log(input)
               
            })
           
    }
 return(
        <div className='new-posts'>
            <form onSubmit={(e) => newPost(e)}>
                <label>Title:&nbsp;</label>
                <input className="title"
                    name='post_title'
                    value={input.post_title}
                    onChange={(e) => handleFormChange(e)}
                    placeholder="Title..."

                />
                <label>Text:&nbsp;</label>
                <input className="text"
                    name='post_text'
                    value={input.post_text}
                    onChange={(e) => handleFormChange(e)}
                    placeholder="What's on your mind..."
                />
                {/* <label>Email:&nbsp;</label>
                <input
                    name='email'
                    value={input.email}
                    onChange={(e) => handleFormChange(e)}
                /> */}
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}
export default NewPostForm;