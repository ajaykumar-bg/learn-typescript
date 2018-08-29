interface Sizes {
  sizes: string[];
}

interface Dress extends Sizes {
  name: string;
  discount?: number;
  getAvailableSizes(): void;
  [key: number]: string;
}

let dress: Dress;

function createDress(name: string, sizes: string[]): Dress {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

dress = createDress('Shirt', ['small', 'medium']);
dress[1] = 'abc';
dress.discount = 1;

console.log(dress);
