//2-https://www.codewars.com/kata/extract-nested-object-reference
Object.prototype.hash = function (string) {
    var arr = string.split('.');
    var arrLength = arr.length;
    var statement = this;
    for (let i = 0; i < arrLength; i++) {
        statement = statement[arr[i]];
        if (statement == undefined) {
            return undefined;
        }
    } return statement;
}