import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL, 
    LOGIN,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT
} from "../actions/loginActions"
const initialState = {
    isFetching: false,
    id: {},
    token: '',
    error: '',
    registerError: '',
 }

export const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case REGISTER:
         return {
            ...state,
            isFetching: true
         }
      case REGISTER_SUCCESS:
         window.localStorage.setItem('first', true)
         window.localStorage.removeItem('error')
         return {
            ...state,
            isFetching: false,
            id: {},
            error: '',
            registerError: false,
            first: true
         }
      case REGISTER_FAIL:
         window.localStorage.setItem('error', true)
         return {
            ...state,
            id: {},
            isFetching: false,
            registerError: true
         }
      case LOGIN:
          console.log(action.payload)
         return {
            ...state,
            isFetching: true
         }
      case LOGIN_SUCCESS:
         window.localStorage.setItem('token', action.payload.token)
         
         return {
             ...state,
                username: action.payload.user.username,
                token: action.payload.token,
                id: action.payload.user_id
         }
      case LOGIN_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case LOGOUT:
         window.localStorage.removeItem('id')
         window.localStorage.removeItem('token')
         return {
            ...state
         }
      default:
         return state
   }
}
