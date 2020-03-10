// 1-
function prefill(length, value) {
    if (isNaN(length) || length === Infinity || typeof (length) == "boolean" || length % 1 !== 0 || Number(length) == "NaN" || Number(length) < 0) {
        throw new TypeError(length + " is invalid");
    }
    else {
        if (!value) {
            value = undefined;
        }
        return arr = new Array(Number(length)).fill(value);
    }
}