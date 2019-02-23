import { FETCH_POSTS, ADD_POST, DELETE_POST, UPDATE_POST, EDIT_POST } from '../actions/actionTypes';
import * as functions from '../utility/functions.js';

const initialState = {
  posts:[],
  post: {}
};

export default function(state = initialState, action) {
 
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
      case ADD_POST :
      return { 
          ...state,
          posts: [...state.posts, action.payload]
      }
    
    case DELETE_POST:
      return Object.assign({}, state, {
        posts: [...state.posts.filter(post => post.id !== action.payload)],
      });    
    // load post edit form with values of current post
    case EDIT_POST:
      return {
        ...state,
        post: action.payload
      };
    // save data from post edit form
    case UPDATE_POST:
      return {
        ...state,
        // returns new immutable state object
        posts: functions.updateObjectInArray(state.posts, action.payload)
      };      
    
    default:
      return state;
  }
}

