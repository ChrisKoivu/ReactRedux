import axios from 'axios';
import store from '../store';

import { fetchPosts, fetchUsers } from '../actions/actions';

/**
 * Get all users
 */

export function getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        store.dispatch(fetchUsers(response.data));
        return response;
      });
  }
  

/**
 * Get all posts
 */

  export function getPosts(){
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      store.dispatch(fetchPosts(response.data));
      return response;
    });
  }


