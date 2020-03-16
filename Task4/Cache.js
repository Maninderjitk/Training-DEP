//3-https://www.codewars.com/kata/525481903700c1a1ff0000e1/solutions/javascript
function cache(func) {
    let cacheArr = new Array();
    let cacheObject = {};
    return function check(arg1, arg2) {
        let arguArr = new Array();
        arguArr.push(arg1);
        arguArr.push(arg2);
        let key = JSON.stringify(arguArr);
        if (cacheArr.includes(key)) {
            return cacheObject[key];
        }
        else {
            cacheArr.push(key);
            cacheObject[key] = func(arg1, arg2);
            return cacheObject[key];
        }
    };
}