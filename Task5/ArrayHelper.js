// 1-https://www.codewars.com/kata/array-helpers
Array.prototype.square = function () {
    var givenArr = this;
    var squareArr = [];
    givenArr.forEach(squareElement);
    function squareElement(element, index) {
        squareArr[index] = Math.pow(element, 2);
    }
    return squareArr;
}

Array.prototype.cube = function () {
    var givenArr = this;
    var cubeArr = [];
    givenArr.forEach(cubeElement);
    function cubeElement(element, index) {
        cubeArr[index] = Math.pow(element, 3);
    }
    return cubeArr;
}

Array.prototype.average = function () {
    var givenArr = this;
    var avg = 0;
    givenArr.forEach(element => avg += element);
    avg = (avg / givenArr.length);
    return avg;
}

Array.prototype.sum = function () {
    var givenArr = this;
    var sum = 0;
    givenArr.forEach(element => sum += element);
    return sum;
}

Array.prototype.even = function () {
    var givenArr = this;
    var evenArr = [];
    givenArr.forEach(evenElement);
    function evenElement(element, index) {
        if (element % 2 == 0) {
            evenArr.push(element);
        }

    }
    return evenArr;
}

Array.prototype.odd = function () {
    var givenArr = this;
    var oddArr = [];
    givenArr.forEach(oddElement);
    function oddElement(element, index) {
        if (element % 2 !== 0) {
            oddArr.push(element);
        }

    } return oddArr;
}



