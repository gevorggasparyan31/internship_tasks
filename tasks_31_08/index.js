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

}

// console.log(everyNthElement([1,2,3,4,5,6,7,8,9],3));

/**
 * TASK 17
 *
 * @param {[]} array - array of random elements
 * @param {[]} filter - array of boolean value elements
 * @returns {*[][]} - 2 arrays of groups
 */
function groupFilter (array, filter) {
    let group1 = [];
    let group2 = [];

    for (let i = 0; i < array.length; i++) {
        if(filter[i]) {
            group1.push(array[i]);
        } else {
            group2.push(array[i]);
        }
    }

    return [group1,group2];
}

// let arr = [1,2,3,4,5,6];
// let filter = [true,false,false,true,false,true];
//
// console.log("True values: "+groupFilter(arr,filter));

//66 to do

/**
 * TASK 50
 *
 * @param hours
 * @param minutes
 * @returns {string} - String of concatenated hours,minutes and meridiem
 */
function integerToMerridie (hours,minutes) {
    const meridiem = (hours > 12) ? 'PM' : 'AM';
    const formattedMinutes = (minutes < 10) ? '0' + minutes: minutes;

    if (hours >= 11 && hours <= 23 && minutes >=0 && minutes <= 59){
        const formattedHours = (hours % 12 === 0) ? hours : hours % 12;

        return formattedHours+":"+formattedMinutes+" "+meridiem;
    } else {
        return hours+":"+formattedMinutes+" "+meridiem;
    }
}

console.log(integerToMerridie(19,35));