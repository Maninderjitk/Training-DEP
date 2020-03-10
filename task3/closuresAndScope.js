//  3-https://www.codewars.com/kata/closures-and-scopes/train/javascript
function createFunctions(number) {
    var callbacks = [];
    for (let index = 0; index < number; index++) {
        callbacks.push(function () {
            return index;
        });
    }
    return callbacks;
}