import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    CRUD_ACTIONS,
    CRUD_ACTIONS_SUCCESS,
    CRUD_ACTIONS_FAIL,
    

} from "../actions/CRUD"

const initialState={
    posts: [],
    post: {},
    isFetching: false,
    post_id: '',
    error: ''
}
export const crudReducer = (state = initialState, action) => {
    switch (action.type) {
       case GET_POSTS:
          return {
             ...state,
             isFetching: true
          }
       case GET_POSTS_SUCCESS:
          return {
             ...state,
             posts: action.payload,
             isFetching: false,
             error: ''
          }
       case GET_POSTS_FAIL:
          return {
             ...state,
             isFetching: false,
             error: action.payload
          }
          case CRUD_ACTIONS:
         return {
            ...state,
            isFetching: true
         }
      case CRUD_ACTIONS_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: ''
         }
      case CRUD_ACTIONS_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
          default:
         return state
   }
}