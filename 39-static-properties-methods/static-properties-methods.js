var PurchaseOrder = /** @class */ (function () {
    function PurchaseOrder() {
    }
    PurchaseOrder.createPONumber = function (random) {
        return "PO_" + random;
    };
    PurchaseOrder.prototype.create = function () {
    };
    PurchaseOrder.statuses = ['APPROVED', 'PENDING', 'REJECTED'];
    return PurchaseOrder;
}());
/*
static keyword denotes that a member variable, or method,
can be accessed without requiring an instantiation of the class to which it belongs
*/
/*
const purchaseOrder = new PurchaseOrder();
purchaseOrder.create();
*/
//No need to create an object to access a static property or method
console.log(PurchaseOrder.statuses);
console.log(PurchaseOrder.createPONumber('0001'));
