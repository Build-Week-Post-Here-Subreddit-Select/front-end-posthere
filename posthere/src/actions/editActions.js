export const TOGGLE_EDITING = 'TOGGLE_EDITING'
export const POST_TO_EDIT = 'POST_TO_EDIT'

export const toggleEdit = bool => {
   return {
      type: TOGGLE_EDITING,
      payload: bool
   }
}

export const setPostToEdit = post => {
   return {
      type: POST_TO_EDIT,
      payload: post
   }
}