// 3-https://www.codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript
function compose(Function1st,function2nd) {
  return function(...args){
  return Function1st(function2nd(...args));}
}
