//-----------RECURSION TASKS---------------
/**
 * TASK 2
 * 
 * @param {Number} num1 - first number
 * @param {Number} num2 - second number
 * @returns {Number} - greatest common divisor
 */
function greatestCommonDivisor (num1, num2) {
    if (num2 === 0) {
        return num1;
    }

    return greatestCommonDivisor(num2, num1 % num2);
}

/**
 * TASK 4
 * 
 * @param {[]} arr - array whose elements function must summarize
 * @returns {Number} - summary of elements
 */
function recursiveArraySum (arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        return arr[0] + recursiveArraySum(arr.slice(1));
    }
}

/**
 * TASK 8
 * 
 * @param {*} arr - 
 * @param {*} left - most left element index in array
 * @param {*} right - most right element index in array
 * @param {*} trgt - value of the target element which we're looking for
 * @returns {Number} - index of the element we're looking for
 */
function recursivelyBinarySearch (arr,left,right, trgt) {
    let middle = Math.floor((left + right) / 2);

    if(left > right){
        return -1;
    }

    if(arr[middle] === trgt) {
        return middle;
    }

    if(arr[middle] > trgt) {
        return recursivelyBinarySearch(arr,left,middle - 1,trgt);
    }

    return recursivelyBinarySearch(arr,middle + 1, right, trgt);

}

// let array = [2, 3, 4, 10, 40];
// console.log("index of element: "+recursivelyBinarySearch(array,0,array.length - 1,3));

/**
 * 
 * @param {[]} arr - array where function must do the sorting
 * @returns {[]} - already sorted array
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));

  
    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
  
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}

// let array = [19,6,7,1,98,5];
// console.log(mergeSort(array));


//-----------ARRAY TASKS---------------
/**
 * TASK 32
 * 
 * @param {*} array - array where function will find the target
 * @param {*} target - target which function needs to find
 * @returns 
 */
function isContaining (array, target) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            result.push(array[i]);
        }
    }

    return result;
}

/**
 * TASK 33
 * 
 * @param {[]} originalArray - array which will be emptied
 * @returns {[]} - array where function copied elements from the original array
 */
function emptyArray (originalArray) {
    const copiedArray = [...originalArray];
    originalArray.length = 0;
    
    return copiedArray;
}

// let array = [2, 3, 4, 10, 40];
// let copied = emptyArray(array);
// console.log("original array: " + array);
// console.log("copied array: " + copied);

/**
 * TASK 50
 * 
 * @param {[]} array - array where function will look for numbers 
 * @returns {Number} - summary of the numbers
 */
function sumNumbers (array) {
    let sum = 0;
    for (let i = 0; i<array.length; i++) {
        if(typeof array[i] === 'number') {
            sum += array[i];
        }
    }

    return sum;
}

// console.log(sumNumbers([2, "11", 3, "a2", false, 5, 7, 1]));

/**
 * 
 * @param {[]} arr - array where function must find the arrays
 * @returns {Number} - number of arrays in array
 */
function countNestedArrays (arr) {
    let count = 0;

    arr.map(element => Array.isArray(element) ? count++ : 0);

    return count;
}

// const arr = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
// console.log(countNestedArrays(arr));