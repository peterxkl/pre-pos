'use strict';

function countSameElements(collection) {
  var array=[];
  var obj = {}; 
  for(var i= 0, l = collection.length; i< l; i++){ 
      var item = collection[i]; 
      var num = 0;
      if(item.length>1){
        num= parseInt(item.replace(/[^0-9]/ig,""));
        item = item.substring(0,1);
        obj[item] = obj[item] ? obj[item] +num : num
      }
      else{
        obj[item] = (obj[item] +1 ) || 1; 
      }
  } 
  for(let key in obj) {
        var object1 ={
        name:key,
        summary: obj[key]
    }
    array.push(object1);
  }
 // console.log(array);
  return array; 
}
