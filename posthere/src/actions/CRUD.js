import { axiosWithAuth } from "../api/axiosWithAuth"

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'
export const CRUD_ACTIONS = 'CRUD_ACTIONS'
export const CRUD_ACTIONS_SUCCESS = 'CRUD_ACTIONS_SUCCESS'
export const CRUD_ACTIONS_FAIL = 'CRUD_ACTIONS_FAIL'
export let newPostId



 export const getPosts = (user_id) => dispatch => {
    dispatch({ type: GET_POSTS })
    axiosWithAuth()
       .get(`/user/${user_id}`)
       .then(res => {
          console.log(res)
          dispatch({ type: GET_POSTS_SUCCESS, payload: res.data })
       })
       .catch(err => {
          console.log(err)
          dispatch({ type: GET_POSTS_FAIL, payload: err })
       })
 }

 export const addPost = (post,user_id) => dispatch => {
    dispatch({ type: CRUD_ACTIONS })
    console.log(post)
    axiosWithAuth()
       .post(`/users/${user_id}/posts/`, post)
       .then(res => {
          newPostId = res.data.post_id
          dispatch({ type: CRUD_ACTIONS_SUCCESS, payload:res.data })
       })
       .catch(err => {
          console.log(err)
          dispatch({ type: CRUD_ACTIONS_FAIL, payload: err })
       })
 }
 export const editPost = (post,user_id) => dispatch => {
    dispatch({ type: CRUD_ACTIONS })
    axiosWithAuth()
       .put(`/users/${user_id}/posts/${post.id}`, post)
       .then(res => {
          newPostId = post.id
          dispatch({ type: CRUD_ACTIONS_SUCCESS, payload:res.data })
       })
       .catch(err => {
          console.log(err)
          dispatch({ type: CRUD_ACTIONS_FAIL, payload: err })
       })
 }

 export const deletePost = (post,user_id) => dispatch => {
    dispatch({ type: CRUD_ACTIONS })
    axiosWithAuth()
       .delete(`/user/${user_id}/post/${post.id}`)
       .then(res => {
          dispatch({ type: CRUD_ACTIONS_SUCCESS })
       })
       .catch(err => {
          console.log(err)
          dispatch({ type: CRUD_ACTIONS_FAIL, payload: err })
       })
 }