let food: { name: string; price: number; getName(): string } = {
  name: 'Biriyani',
  price: 120,
  getName() {
    return food.name;
  },
};

console.log(food.getName());