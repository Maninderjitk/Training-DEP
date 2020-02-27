// 1- https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
function printArray(array){
    return array.toString();
  }
  // 2- https://www.codewars.com/kata/opposite-number
  function opposite(number) {
    return (-1* number);
  }
  // 3- http://www.codewars.com/kata/basic-mathematical-operations
  function basicOp(operation, value1, value2)
  {
    var result;
    if(operation==="+"){
      result=value1+value2;
      return result;
    }
    if(operation==="-"){
      result=value1-value2;
      return result;
    }
    if(operation==="*"){
      result=value1*value2;
      return result;
    }
    if(operation==="/"){
      result=value1/value2;
      return result;
    }
  }
//4 -http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    var noOfDays=d;
    var amount;
    if(noOfDays<=2){
      amount=noOfDays*40
      return amount;
    }
    if(noOfDays>=3&& noOfDays<=6){
      amount=noOfDays*40-20;
      return amount;
    }
    if(noOfDays>=5){ 
      amount=noOfDays*40-50;
      return amount;
    }
}