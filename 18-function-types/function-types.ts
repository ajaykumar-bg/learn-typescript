let orderTotal: (price: number, quantity: number) => number;

orderTotal = (a, b) => a * b;

const totalPrice = orderTotal(10, 4);

console.log(`Total Price: ${totalPrice}`);