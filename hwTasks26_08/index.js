const { componentChars } = require("mdurl/encode");

/**
 * TASK 1
 * 
 * @param {number} num - number that must be reversed
 * @returns {number} - reversed number
 * 
 */
function reverseNum(num){
    let digit, reversedNum = 0;

    while (num) {
        digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = num/10 | 0; // using bitwise operator to take integer part
    }
    
    return reversedNum;
}

/**
 * TASK 2
 * 
 * @param {string} str - string that must be checked
 * @returns {boolean} - returns true if string is palindrome
 */
function isPalindrome(str){
    for (let i=0; i<str.length/2;i++) {
        if(str.at(i) != str.at(-1)) {
            console.log("Given string is NOT palindrome!");
            return false;
        }

        console.log("Given string is palindrome!");
        return true;
    }
}

/**
 * TASK 3
 * 
 * @param {String} str - String parameter
 * @returns [] - Array of all combinations
 */
function stringCombinations(str) {
    let combinations = [];
    let i = 0;
    while(i < str.length) {
        let char = str.charAt(i);
        let arrTemp = [char];

        for (let x in combinations) {
            arrTemp.push("" + combinations[x] + char);
        }
        combinations = combinations.concat(arrTemp);
        i++;
    }
    
    return combinations;
}

/**
 * TASK 4
 * 
 * @param {String} inputString - String which will be sorted
 * @returns {String} - Sorted string
 */
function sortInAlphabeticalOrder(inputString) {
    const sortedArray = Array.from(inputString).sort();
    const sortedString = sortedArray.join('');
    return sortedString;
}