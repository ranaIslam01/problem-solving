function sumArray(input){
  const {arr} = input;
  if(
    !Array.isArray(arr)
  ){
    return "invaild input";
  }
  const total = arr.reduce((a,b) => a+b, 0);
  return total;

}
console.log(sumArray({arr: [3,4,6]}));

function isEven(input) {
  if(
    typeof input !== 'number'
  )return "invalid input";

  if(input % 2 === 0){
    return true;
  }else{
    return false;
  }

}

console.log(isEven(21));

function capitalize(input){
  if(
    typeof input !== 'string'
  ){
    return "invalid Input";
  }
  if(input.length === 0){
    return "";
  }

  return input[0].toUpperCase() + input.splice(1,2);

}
console.log(capitalize("rana islam"));
 
