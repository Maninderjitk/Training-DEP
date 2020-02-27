
//4-http://www.codewars.com/kata/word-count
function countWords(str) {
  str = str.trim();
  if (!str){
    return 0;
  } 
  str=str.split(/[\s]+/);
  var len=str.length;
  return len;
}
