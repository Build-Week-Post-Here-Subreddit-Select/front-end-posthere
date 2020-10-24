import {
    TOGGLE_EDITING,
    POST_TO_EDIT
} from "../actions/editActions"

const initialState = {
    isEditing: false,
    postToEdit: {}
 }
 
 export const editingReducer = (state = initialState, action) => {
    switch (action.type) {
       case TOGGLE_EDITING:
          return {
             ...state,
             isEditing: action.payload,
          }
       case POST_TO_EDIT:
          return {
             ...state,
             postToEdit: action.payload
          }
       default:
          return state
    }
 }