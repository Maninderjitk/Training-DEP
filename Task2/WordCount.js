
//4-http://www.codewars.com/kata/word-count
function countWords(str) {
  givenString = givenString.trim();
  if (!givenString) {
    return 0;
  }
  givenString = givenString.split(/[\s]+/);
  var stringLength = givenString.length;
  return stringLength;
}
