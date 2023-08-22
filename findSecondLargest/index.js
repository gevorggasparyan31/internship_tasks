const findSecondLargest = (arr) => {
    let firstLargest = arr[0];
    let secondLargest = arr[0];

    for(let i = 1; i<=arr.length; i++) {
        if (firstLargest < arr[i]) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (secondLargest < arr[i]) secondLargest = arr[i];
    }
    return secondLargest;
}

let array = [1,15,96,65,4,2];
console.log("Second largest number of array: "+findSecondLargest(array));