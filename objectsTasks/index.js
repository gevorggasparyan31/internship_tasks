let user = {
    name: "John",
    lastname: "Johnson"
};

checkProperty(user,"city");
console.log(JSON.stringify(swapKeyAndValue(user)));

//TASK 1 Check if object contains a given property
function checkProperty(obj, prop) {
    if (prop in obj)
            console.log("Object has the property "+prop);
         else
            console.log("Object doesn't have the given property");
}

// TASK 2 Get a copy of the object where the keys become the values and the values are the keys
function swapKeyAndValue(obj) {
    let copy = {};

    for (let key in obj) {
        copy[obj[key]] = key;
    }

    return copy;
}