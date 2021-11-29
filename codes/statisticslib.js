/**
 * Get the size of any array or sequece
 * @param {Array<Number>} arr The numbers
 * @returns The length of elements
 */
function size(arr) {
    return arr.length
}

function sum(arr) {
    let s = 0

    for (let x of arr) {
        s += x
    }

    return s
}

/**
 * Get the average of any array or sequence
 * @param {Array<Number>} arr The numbers
 * @returns The mean of elements
 */
function avg(arr) {
    return sum(arr) / size(arr)
}

// ...

module.exports = { size, sum, avg }