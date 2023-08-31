//FUNDAMENTALS

/**
 * TASK 8
 *
 * @param {[]} arr - just an array
 * @param args - several elements that function need to filter out from array
 * @returns {*[]} - already filtered array
 */
function filterOut (arr, ...args) {
    let filteredArr = [];

    for (let item of arr) {
        if(!args.includes(item)) {
            filteredArr.push(item);
        }
    }

    return filteredArr;
}

// let arr = [1,5,6,3,5,10,12];
// console.log(filterOut(arr,5,3));

/**
 * TASK 14
 *
 * @param keysObj - object of keys and values that function must change in object
 * @param obj - object whose keys function must rename
 * @returns {{}} - object with already renamed keys
 */
function renameKeys (keysObj, obj) {
   return Object.keys(obj).reduce((newObj, key) => {
        let newKey = keysObj[key] !== undefined ? keysObj[key] : key;
        newObj[newKey] = obj[key];
        return newObj;
    },{});
}
//
// let origObj = {
//     name: "Sergio",
//     age: 54,
//     city: "San Antonio"
// };
// let keys = {
//     name: 'fullName',
//     age: 'yearsOld'
// };
// console.log(JSON.stringify(renameKeys(keys,origObj)));

/**
 * TASK 21
 *
 * @param {[*]} arr - array
 * @param {Number} n - number of which element function must return
 * @returns {[*]} - result array with every nth element of original array
 */
function everyNthElement (arr, n) {
    //with reduce
   return arr.reduce((result,currentElement,index) => {
        if((index + 1) % n === 0){
            result.push(currentElement)
        }
        return result;
    },[]);

    //with for
    // const result = [];
    // for (let i = 0; i < arr.length; i+=n) {
    //     result.push(arr[i]);
    // }
    // return result;
}

// console.log(everyNthElement([1,2,3,4,5,6,7,8,9],3));
