interface Sizes {
  sizes: string[];
}

interface Dress extends Sizes {
  name: string;
  price: number;
  discount?: number;
  getAvailableSizes(): void;
}

let dress: Dress;

function createDress(name: string, price: number, sizes: string[]): Dress {
  return {
    name,
    price,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

dress = createDress('Casual Shirt', 570,['small', 'medium']);
console.log(dress);


//dress.discount = 1;