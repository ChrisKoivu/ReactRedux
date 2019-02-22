import { FETCH_POSTS, ADD_POST, EDIT_POST, UPDATE_POST, FETCH_USERS, CREATE_CONTACT, DELETE_POST } from './actionTypes';

export const fetchUsers = (users) =>  {
    return {
      type: FETCH_USERS,
      payload: users
    }       
};


export const fetchPosts = (posts) =>  {
  return {
    type: FETCH_POSTS,
    payload: posts
  }       
};


 export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
       dispatch({
        type: ADD_POST,
        payload: post
      }) 
    );
};
     
export function createContact(contact) { 
  return {
    type: CREATE_CONTACT,
    payload: contact
  }
}

export function updatePost(item){
  return {
    type: UPDATE_POST,
    payload: item
  }
}

export function deletePost(item) {
  return {
    type: DELETE_POST,
    payload: item
  }
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  }
}


 