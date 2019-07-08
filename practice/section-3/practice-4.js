'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var array=[];
  var obj = {}; 
  var valueb = objectB.value;
  for(var i= 0, l = collectionA.length; i< l; i++){ 
      var item = collectionA[i]; 
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
          key:key,
          count: obj[key]
    }
    array.push(object1);
  }
  for(let i = 0;i<valueb.length;i++){
    for(let index in array){
      if(valueb[i]==array[index].key){
        array[index].count-=parseInt(array[index].count/3);
        break;
      }
  }
}
  console.log(array);
  return array;
}
