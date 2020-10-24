import { combineReducers } from 'redux'

import { editingReducer } from "./editingReducer";
import { crudReducer } from "./CRUDReducer"
import { loginReducer } from "./loginReducers"
export const reducerCombo = combineReducers({
    editingReducer,
    crudReducer,
    loginReducer

})
//combines all reducers to make the store look cleaner