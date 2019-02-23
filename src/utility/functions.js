/** updated passed state object array with passed updated object,
 *  state object array has a unique id key for each object
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

       // verify if object is empty 
  export function isObjectEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
      }
      // no keys in passed obj, so it is empty
      return true;
  }