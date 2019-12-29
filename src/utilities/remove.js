"use strict";
exports.__esModule = true;
/**
 * Removes element from array.
 * @param array
 * @param element
 * @returns Array without element, or if element isn't in array, unmodified array
 */
function remove(array, element) {
    var index = array.indexOf(element);
    if (index === -1)
        return array;
    return array.slice(0, index).concat(array.slice(index + 1));
}
exports["default"] = remove;
