import React, { useState,useEffect } from "react";
import { connect } from 'react-redux'


import { useParams, useHistory } from 'react-router-dom'
import { toggleEdit, setPostToEdit } from "../actions/editActions";
import { deletePost,getPosts } from "../actions/CRUD";


const Posts = ({ post,toogleEdit,setPostToEdit,deletePost }) => {
  const { post_title, post_text, dated } = post
  const id = useParams().id
  const history = useHistory()

  useEffect(() => {
    getPosts(id)
 }, [])

  const editThePost = e =>{
    toogleEdit(true)
    setPostToEdit(post)
    history('/postlist')
  }
  const deleteThePost = e =>{
    deletePost(post)
    history.push('/postlist')
  }
  const cancelEdit = e => {
    e.preventDefault()
    history.push('/posts')
    window.location.reload()
 }
 const handleBack = e => {
  history.push('/postslist');
}


  return (
      
   
         <div className='post-and-back'>
            <img className='back-btn'  alt='Go Back' onClick={handleBack} />
            <div className='post-div'>
              
               <h1 className='post-h1'>Suggested Subreddit: </h1>
               <div className='post-top-div'>
                  <h3 className='post-h3'>{dated}</h3>
                  <div className='post-btn-div'>
                     <img className='post-btn update-btn' alt='Edit' onClick={editThePost} />
                     <img className='post-btn delete-btn'  alt='Delete' onClick={deleteThePost} />
                  </div>
               </div>
               <div className='post-div1'><h3 >{post_title}</h3></div>
               <div className='post-div2'><h4 >{post_text}</h4></div>
            </div>
         </div>
      
  );
};
const mapStateToProps = state => (
  {
     post: state.crudReducer.post
  }
)

export default connect(mapStateToProps, {  toggleEdit,setPostToEdit, deletePost })(Posts); 