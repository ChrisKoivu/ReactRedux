import { FETCH_POSTS, ADD_POST, DELETE_POST, UPDATE_POST, EDIT_POST } from '../actions/actionTypes';

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
        posts: updateObjectInArray(state.posts, action.payload)
      };      
    
    default:
      return state;
  }
}


function updateObjectInArray(array, post) {
  return array.map( (item => {
      if(post.id !== item.id) {
          // This isn't the item we care about - keep it as-is
          return item;
      }
      
      // Otherwise, this is the one we want - return an updated value
      return {
          ...item,
          ...post
      }; 
  }));
}