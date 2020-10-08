
// isEven()
function isEven(num){
  if(num % 2 === 0){
    return true;}
  else{
    return false}
}


// method 2 of isEven(): evaluate the Boolean statement directly and return the answer.
// function isEven(num){
  //  return num % 2 === 0;
//}

//factorial()

function factorial(num){
  //define the result variable
  var result=1;

  //calculate the factorial and store it in the result
  for(var i=2; i<=num; i++){
    result=result*i;
  }

  //return the result
  return result
}

//kebabToSnake()
//google with general word like here:
// javascript replace character string
function kebabToSnake(str){
  var newStr =  str.replace(/-/g,"_");
  return newStr
}
