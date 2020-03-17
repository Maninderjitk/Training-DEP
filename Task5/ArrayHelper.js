// 1-https://www.codewars.com/kata/array-helpers
Array.prototype.square = function () {
    let givenArr = this;
    let squareArr = [];
    givenArr.forEach((element, index) => {
        squareArr[index] = Math.pow(element, 2);
    });
    return squareArr;
}

Array.prototype.cube = function () {
    let givenArr = this;
    let cubeArr = [];
    givenArr.forEach((element, index) => {
        cubeArr[index] = Math.pow(element, 3);
    });
    return cubeArr;
}

Array.prototype.average = function () {
    let givenArr = this;
    let avg = 0;
    givenArr.forEach(element => avg += element);
    avg = (avg / givenArr.length);
    return avg;
}

Array.prototype.sum = function () {
    let givenArr = this;
    let sum = 0;
    givenArr.forEach(element => sum += element);
    return sum;
}

Array.prototype.even = function () {
    let givenArr = this;
    let evenArr = [];
    givenArr.forEach((element, index) => {
        if (element % 2 === 0) {
            evenArr.push(element);
        }
    });
    return evenArr;
}

Array.prototype.odd = function () {
    let givenArr = this;
    let oddArr = [];
    givenArr.forEach((element, index) => {
        if (element % 2 !== 0) {
            oddArr.push(element);
        }
    });
    return oddArr;
}



