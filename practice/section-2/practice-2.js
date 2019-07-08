'use strict';

function countSameElements(collection) {
  var array=[];
  var object = {}; 
  for(var i= 0; i< collection.length; i++){ 
      var item = collection[i]; 
      var num = 0;
      if(item.length>1){
        num= parseInt(item.replace(/[^0-9]/ig,""));
        item = item.substring(0,1);
        object[item] = object[item] ? object[item] +num : num
      }
      else{
        object[item] = (object[item] +1 ) || 1; 
      }
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
