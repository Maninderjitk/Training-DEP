// 4-https://www.codewars.com/kata/function-composition-1
function compose(...func) {
  return function (args) {
    for (let i = func.length - 1; i >= 0; i--) {
      args = func[i](args);
    }
    return args;
  }
}