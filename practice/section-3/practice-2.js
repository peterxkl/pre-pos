'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionB=objectB.value;
  for(var i=0;i<collectionA.length;i++){
    var x=collectionA[i].key;
    for(var j=0;j<collectionB.length;j++){
      if(x==collectionB[j]){
        collectionA[i].count-=parseInt(collectionA[i].count/3);
        break;
      }
    }
  }
  return collectionA;
}
