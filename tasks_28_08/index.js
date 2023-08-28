/**
 * TASK 9
 *
 * @param {string} text - Parameter which will be checked for lower and upper cases
 * @returns {string} - String value with already swapped cases
 */
function swapCases (text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toLowerCase()) {
            result += text[i].toUpperCase();
        } else {
            result += text[i].toLowerCase();
        }
    }

    return result;
}

/**
 * TASK 14
 *
 * @param {*} arr - Array which will be checked for duplicate elements
 * @returns {*} - Array without duplicate elements
 */
function removeDuplicates (arr) {
    return arr.filter((val, index) => arr.indexOf(val) === index);
}

/**
 * TASK 17
 *
 * @param {*} arr - Array that must be shuffled
 * @returns {*} - Already shuffled array
 */
function shuffleArray (arr) {
    for (let i = 0; i < arr.length ; i++) {
        let j = Math.round(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
