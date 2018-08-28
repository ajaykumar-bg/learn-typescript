const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
  return orders >= 4;
}

if (offerDiscount(pizzas)) {
  console.log(`You have a discount!`);
} else {
  console.log(`Buy more than 4 pizzas for a discount!`);
}