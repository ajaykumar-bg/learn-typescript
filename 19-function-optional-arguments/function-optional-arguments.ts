let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (a, b) => {
  if (b) {
    return a * b;
  }
  return a;
};

const sum1 = sumOrder(50);

console.log(`Total sum: ${sum1}`);

const sum2 = sumOrder(50,2);

console.log(`Total sum: ${sum2}`);