
/**
 * This file is a library of functions used in this project.
 * I am wanting to keep the components as clean as possible 
 * by putting this logic in here
 *
 */



/**
 * passing in the state object and creating a new immutable state
 * array with the payload object update
 * @param {*} stateObjArr 
 * @param {*} payloadObj 
 */
  export function updateObjectInArray(stateObjArr, payloadObj) {  
    return stateObjArr.map( (item => {
        if(payloadObj.id !== item.id) {
            // not target item, so return it
            return item;
        }
        
        // target item, return updated value
        return {
            ...item,
            ...payloadObj
        }; 
    }));
  }

  /**
   * Since i am pulling data from two data sources, I am doing
   * a join to get an author name from the user array, and 
   * matching it to a user id in the post array
   * @param {*} userArray 
   * @param {*} userId 
   */

  export function getAuthorName(userArray, userId){      
       // search the users array and return author name   
        return userArray.map( (item => {
            if(item.id !== userId) {
                // no match return null
                return null;
            }     
            // item matches, return author name         
            return item.name;
        }));   
  }

  /**
   * verify if a passed in object is empty
   * @param {*} obj 
   */
  export function isObjectEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
      }
      // no keys in passed obj, so it is empty
      return true;
  }