// 2-https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
function add(argu) {
  let fn = function (agruNext) {
    return add(argu + agruNext);
  };
  fn.valueOf = function () {
    return argu;
  };
  return fn;
}