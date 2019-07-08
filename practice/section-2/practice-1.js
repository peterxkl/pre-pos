'use strict';

function countSameElements(collection) {
  var array=[];
  var object = {}; 
  for(var i= 0; i< collection.length; i++){ 
      var item = collection[i]; 
      var num = 0;
      object[item] = (object[item] +1 ) || 1; 
  } 
  for(let key in object) {
    var object1 ={
        key:key,
        count: object[key]
    }
    array.push(object1);
  }
  return array; 
}
