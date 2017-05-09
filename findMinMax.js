//function to find the maximum and minimum elements of an array
const findMinMax = (value) => {
  //initialize an empty array
  let answer = [];
  //to check when the number is the min and max number in the list
  for (let j=1; j<=value.length; j++) {
    if (value[0] == value[j]){
      value.splice(j, 1);
    }
    //if not the min and max then use the d builtin math method
    else{
      answer.push(Math.min.apply(Math,value), Math.max.apply(Math,value));
      return answer;
    }
  answer.push(value[0]);
  return answer;
  }
}