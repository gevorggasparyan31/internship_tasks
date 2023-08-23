let user = {
    name: "John",
    lastname: "Johnson"
};

checkProperty(user,"city");
console.log(JSON.stringify(swapKeyAndValue(user)));

function checkProperty(obj, prop) {
    if (prop in obj)
            console.log("Object has the property "+prop);
         else
            console.log("Object doesn't have the given property");
}

function swapKeyAndValue(obj) {
    let copy = {};

    for (let key in obj) {
        copy[obj[key]] = key;
    }

    return copy;
}