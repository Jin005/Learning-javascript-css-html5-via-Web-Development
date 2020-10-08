//1. *****printReverse()******
function printReverse(arr){
  for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
  }
}

printReverse([1,2,3,4])

//2. ***** isUniform()*****
// function isUniform(arr){
//
//   for(var i=0;i<=arr.length-1;i++){
//     if(arr[i+1]===arr[i]){
//       console.log("true");
//     }else{
//       console.log("false");
//     }
//   }
// }

function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i<arr.length; i++){
    if(arr[i] !== first){
      return false;
    }
  }return true;
}

//3. ******** sumArray()******

function sumArray(arr){
  var total=0;
  arr.forEach(function(element){
    total+=element;
  });
  return total;
  }


//4. ******** max() ******
function max(arr){
  var max = arr[0];

  for(var i=1; i<arr.length; i++){
    if(arr[i]>max){
      max=arr[i];
    }
  } return max;
}
