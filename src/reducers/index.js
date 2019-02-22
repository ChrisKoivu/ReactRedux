import { combineReducers } from 'redux'
import PostReducer from './PostReducer'
import UserReducer from './UserReducer'
import ContactReducer from './ContactReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  contacts: ContactReducer,
  posts: PostReducer,
  users: UserReducer,
  // add form reducer for redux form
  form: formReducer
});