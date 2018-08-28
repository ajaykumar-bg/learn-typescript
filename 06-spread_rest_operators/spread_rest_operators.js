var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log(".....Learning spread operator in typescript.....");
var array1 = [1, 2, 3];
var concatArray = array1.concat([5, 6]);
console.log("array1", array1);
console.log("concatArray", concatArray);
var object1 = { 'name': 'Ajay', 'age': 28 };
var concatObject = __assign({}, object1, { 'religion': 'hindu', 'caste': 'ezhava', 'place': 'tvm', 'age': 27 });
console.log("object1", object1);
console.log("concatObject", concatObject);
console.log(".....Learning rest operator in typescript.....");
function sortArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.sort();
}
console.log(sortArgs(7, 5, 8, 3, 9, 2, 1, 4));
