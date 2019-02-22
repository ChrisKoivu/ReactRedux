import { CREATE_CONTACT } from '../actions/actionTypes';

const initialState = {
  contact: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case CREATE_CONTACT:      
      return {
        ...state,
        contact: action.payload
      };
    default:
      return state;
  }
}