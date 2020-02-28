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
