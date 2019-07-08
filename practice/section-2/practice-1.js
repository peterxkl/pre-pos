'use strict';

function countSameElements(collection) {
  var x=[0,0,0,0,0,0,0,0,0];
  var result=[{key: 'a', count: 0},
  {key: 'e', count: 0},
  {key: 'h', count: 0},
  {key: 't', count: 0},
  {key: 'f', count: 0},
  {key: 'c', count: 0},
  {key: 'g', count: 0},
  {key: 'b', count: 0},
  {key: 'd', count: 0}];
  for(var i=0;i<collection.length;i++){
    if(collection[i]=='a'){
      x[0]+=1;
    }
    if(collection[i]=='e'){
      x[1]+=1;
    }
    if(collection[i]=='h'){
      x[2]+=1;
    }
    if(collection[i]=='t'){
      x[3]+=1;
    }
    if(collection[i]=='f'){
      x[4]+=1;
    }
    if(collection[i]=='c'){
      x[5]+=1;
    }
    if(collection[i]=='g'){
      x[6]+=1;
    }
    if(collection[i]=='b'){
      x[7]+=1;
    }
    if(collection[i]=='d'){
      x[8]+=1;
    }

  }
  for(var j=0;j<result.length;j++){
    result[j].count=x[j];
  }
  
  return result;
}
