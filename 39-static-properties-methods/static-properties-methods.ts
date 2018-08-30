class PurchaseOrder {
  static statuses = ['APPROVED', 'PENDING', 'REJECTED'];
  static createPONumber(random: string) {
    return `PO_${random}`;
  }
  create(){

  }
}

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
