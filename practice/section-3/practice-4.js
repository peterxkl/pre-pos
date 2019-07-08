'use strict';

function createUpdatedCollection(collectionA, objectB) {
  //first step
  var array=[];
  var object = {}; 
  for(var i= 0; i< collectionA.length; i++){ 
      var item = collectionA[i]; 
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
   //second step
   var collectionB=objectB.value;
   for(var i=0;i<array.length;i++){
     var x=array[i].key;
     for(var j=0;j<collectionB.length;j++){
       if(x==collectionB[j]){
        array[i].count-=parseInt(array[i].count/3);
         break;
       }
     }
   }
   return array;
}
