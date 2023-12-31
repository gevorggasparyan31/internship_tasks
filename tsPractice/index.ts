const a:number[] = [4,2,5,60,10,9,15];
const b:number[] = [67,12,0,2,1,0];
const v = 22;

console.log(primitiveSumPairExists(a,b,v));
console.log(objectSumPairExists(a,b,v));
function primitiveSumPairExists(a,b,v):boolean{
    for(let i = 0; i < a.length; i++) {
        const target = v - a[i];
        for(let j = 0; j < b.length; j++) {
            if(b[j] === target){
                return true;
            }
        }
    }
    return false;
}
function objectSumPairExists (a,b,v):boolean {
    const objB = b.reduce(function (aggregation,value){
        aggregation[value] = true;
        return aggregation;
    },{});

    for (let i = 0; i < a.length; i++) {
        const target = v - a[i];
        if(objB[target] === true) {
            return true;
        }
    }
    return false;
}
