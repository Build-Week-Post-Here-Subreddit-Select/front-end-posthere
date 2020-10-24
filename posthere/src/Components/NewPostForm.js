import React, { useState,useEffect } from "react";
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

import { addPost,editPost, newPostId} from "../actions/CRUD"
import { toggleEdit } from "../actions/editActions";


const NewPostForm = ({ addPost,editPost,isEditing,postToEdit,user_id }) => {
    const [post, setPost] = useState({
        user_id:user_id,
        post_title:"",
        post_text:""
        

    })
    const history = useHistory()
    const [analyzing, setAnalyzing] =useState(false)
    
    useEffect(() => {
        if (isEditing === true) {
           setPost(postToEdit)
        } else {
           setPost({
              user_id:user_id,
              post_title: '',
              post_text: ''
              
           });
        }
     }, [isEditing])
     const cancelEdit = e => {
        e.preventDefault()
        history.push('/postlist')
        window.location.reload()
     }

     const handleFormChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
     }

     const handleSubmit = e => {
        e.preventDefault()
        if (isEditing === false) {
           addPost(post,user_id)
        } else {
           editPost(post)
           toggleEdit(false)
        }
        setAnalyzing(true)
        setTimeout(() => {
            setAnalyzing(false)
           if (newPostId) {
              history.push(`/postlist/${newPostId}`)
           } else {
              history.push(`/postlist`)
           }
        }, 5000)
        setPost({
           post_title: '',
           post_text: ''
        });
     }
    
 return(
        <div className='new-posts'>
            <form onSubmit={handleSubmit}>
                <label>Title:&nbsp;</label>
                <input className="title"
                    name='post_title'
                    value={post.post_title}
                    onChange={handleFormChange}
                    placeholder="Title..."

                />
                <label>Text:&nbsp;</label>
                <input className="text"
                    name='post_text'
                    value={post.post_text}
                    onChange={handleFormChange}
                    placeholder="What's on your mind..."
                />
                <input type='submit' value={isEditing ? 'Edit Post' : 'Submit Post'} />
                {isEditing ? <button onClick={cancelEdit} className='form-btn'>Cancel</button> : ''}
                {/* <button type='submit'>Post</button> */}
            </form>
        </div>
    )
 }
 const mapStateToProps = state => (
    {
       isEditing: state.editingReducer.isEditing,
       postToEdit: state.editingReducer.postToEdit,
       error: state.crudReducer.error,
       user_id: state.loginReducer.id
    }
 )
export default connect(mapStateToProps, { addPost, editPost })(NewPostForm);