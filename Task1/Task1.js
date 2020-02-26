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
    return eval(value1+operation+value2);
}
//4 -http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    if(d<=2)
    return d*40;
    if(d>=3&& d<=6)
    return d*40-20;
    if(d>=5)
    return d*40-50;
  }