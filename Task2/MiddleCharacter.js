<<<<<<< HEAD
//2- http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    var len = s.length;
    console.log(len);
    var mid = Math.floor(len / 2);
    var result;
    if (len % 2 == 0) {
      result = s[mid - 1] + s[mid];
    }else{
        result = s[mid];
    }
    return result;
  }
=======
//2- http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    var len = s.length;
    console.log(len);
    var mid = Math.floor(len / 2);
    var result;
    if (len % 2 == 0) {
      result = s[mid - 1] + s[mid];
    }else{
        result = s[mid];
    }
     return result;
  }
>>>>>>> f0e5c118996beca9cf29c31d6136ff0be295e53e
