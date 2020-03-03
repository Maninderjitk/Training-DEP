//2- http://www.codewars.com/kata/get-the-middle-character
function partitionOn(pred, items) {
    var temp = [];
    var position = 0, index = 0;

    items.forEach(element => {
        if (!pred(element)) {
            temp.push(element);
            index++;
        }
    });

    items.forEach(element => {
        if (pred(element)) {
            temp.push(element);

        }
    });

    items = temp.slice();
    return index;

}
