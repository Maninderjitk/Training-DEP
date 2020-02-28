//2- http://www.codewars.com/kata/get-the-middle-character
function partitionOn(pred, items) {
    var temp = [];
    var position = 0, index = 0;
    for (var i = 0; i < items.length; i++) {
        if (!pred(items[i])) {
            temp[position] = items[i];
            position++;
            index = position;
        }
    }
    for (var i = 0; i < items.length; i++) {
        if (pred(items[i])) {
            temp[position] = items[i];
            position++;
        }
    }
    for (var i = 0; i < items.length; i++) {
        items[i] = temp[i];
    }
    return index;

}
