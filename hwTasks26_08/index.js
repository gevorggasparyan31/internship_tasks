
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
 * @param {string} text - string that must be checked
 * @returns {boolean} - returns true if string is palindrome
 */
function isPalindrome(text){
    for (let i=0; i<text.length/2;i++) {
        if(text.at(i) != text.at(-1)) {
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
 * @param {String} text - String parameter
 * @returns [] - Array of all combinations
 */
function stringCombinations(text) {
    let combinations = [];
    let i = 0;

    while(i < text.length) {
        let char = text.charAt(i);
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
 * @param {String} text - String which will be sorted
 * @returns {String} - Sorted string
 */
function sortInAlphabeticalOrder(text) {
    const sortedArray = Array.from(text).sort();
    const sortedString = sortedArray.join('');

    return sortedString;
}

/**
 * TASK 5
 * 
 * @param {String} text - Parameter whose each words' first letters will be converted to upper case
 * @returns {String} - Already converted string 
 */
function firstLetterUpperCase(text) {
    let result = text.split(" ");

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }

    return result.join(" ");
}

/**
 * TASK 6
 * 
 * @param {String} text - String in which we must find the longest word
 * @returns {String} - The longest word
 */
function findLongestWord(text) {
    let stringArray = text.split(" ");
    let longest = text[0];

    for(let i = 1; i < stringArray.length; i++) {
        if (stringArray[i].length > longest.length) {
            longest = stringArray[i];
        }
    }

    return longest;
}

/**
 * TASK 7
 * 
 * @param {String} text - Text which function will check for vowels
 * @returns {Number} - Number of vowel letters
 */
function countVowels(text) {
    let vowels = ['a','e','i','o','u'];
    let vowelCount = 0;

    for (let i of text.toLowerCase()) {
        if(vowels.includes(i)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

/**
 * TASK 8
 * 
 * @param {Number} num - Number which will be checked if it's prime or not
 * @returns {Boolean} - Return value after checking
 */
function isPrime (num) {
    if (num === 1){
        return false;
    }

    else if (num === 2) {
        return true;
    }

    else {
        for(let i = 2; i < num; i++) {
            if (num % i === 0){
                return false;
            }
        }

        return true;

    }
}

/**
 * 
 * @param {*} parameter - Value whose type function detects
 * @returns {*} - Type name
 */
function checkType(parameter) {
    let types = ['object', 'boolean', 'function', 'number', 'string', 'undefined'];

    for (let i = 0; i < types.length; i++) {
        if (typeof parameter === types[i]) {
            return types[i];
        }
    }
}

/**
 * TASK 10
 * 
 * @param {Number} size - Size of rows and columns
 * @returns {[]} - 2D array of identity matrix
 */
function makeIdentityMatrix(size) {
let identityMatrix = [];

    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++){
            identityMatrix.push(i === j ? 1 : 0);
        }
    }

    return identityMatrix;
}

console.log(makeIdentityMatrix(3));
