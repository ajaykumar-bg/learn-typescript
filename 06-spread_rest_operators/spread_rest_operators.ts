console.log(".....Learning spread operator in typescript.....");

var array1 = [1,2,3];
const concatArray = [...array1,5,6];

console.log("array1", array1);
console.log("concatArray", concatArray);


var object1 = {'name': 'Ajay', 'age': 28};
const concatObject = {...object1,'religion': 'hindu','caste': 'ezhava','place': 'tvm','age': 27};

console.log("object1", object1);
console.log("concatObject", concatObject);




console.log(".....Learning rest operator in typescript.....");

function sortArgs(...args) {
    return args.sort();
}
console.log(sortArgs(7,5,8,3,9,2,1,4));