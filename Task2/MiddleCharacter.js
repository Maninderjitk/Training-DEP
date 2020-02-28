//2- http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    var len = s.length;
    console.log(len);
    var mid = Math.floor(len / 2);
    var result;
    if (len % 2 == 0) {
      result = s[mid - 1] + s[mid];
    }
    else{
        result = s[mid];
    }
     return result;
  }
