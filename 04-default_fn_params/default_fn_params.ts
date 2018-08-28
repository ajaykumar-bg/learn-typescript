let sumOrder : (price:number, quantity:number) => number;

sumOrder = (x,y=1) => x*y;

sumOrder(5,4);