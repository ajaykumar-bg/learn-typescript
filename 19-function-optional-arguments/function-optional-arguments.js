var sumOrder;
sumOrder = function (a, b) {
    if (b) {
        return a * b;
    }
    return a;
};
var sum1 = sumOrder(50);
console.log("Total sum: " + sum1);
var sum2 = sumOrder(50, 2);
console.log("Total sum: " + sum2);
