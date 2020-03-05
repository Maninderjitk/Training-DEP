//2- http://www.codewars.com/kata/get-the-middle-character
function getMiddle(givenString) {
  var stringLength = givenString.length;
  var mid = Math.floor(stringLength / 2);
  var result;
  if (stringLength % 2 === 0) {
    result = givenString[mid - 1] + givenString[mid];
  } else {
    result = givenString[mid];
  }
  return result;
}