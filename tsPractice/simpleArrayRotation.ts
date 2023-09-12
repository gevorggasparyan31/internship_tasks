function checkRA(arr:any []) {
    let isAscending = true;
    let isDescending = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            isDescending = false;
        } else if (arr[i] < arr[i - 1]) {
            isAscending = false;
        }

        if (!isAscending && !isDescending) {
            return "rotated ascending";
        }
    }

    if (isAscending) {
        return "just ascending";
    } else if (isDescending) {
        return "descending :(";
    }
}

console.log(checkRA([1,2,3,4,]));
