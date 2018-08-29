interface Sizes {
  sizes: string[];
}

interface Dress extends Sizes {
  name: string;
  getAvailableSizes(): void;
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
console.log(dress);