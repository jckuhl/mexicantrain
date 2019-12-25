/**
 * Removes element from array.
 * @param array 
 * @param element 
 * @returns Array without element, or if element isn't in array, unmodified array
 */
export default function remove<T>(array:T[], element:T): T[] {
    const index = array.indexOf(element);
    if(index === -1) 
        return array;
    return array.slice(0, index).concat(array.slice(index+1));
}