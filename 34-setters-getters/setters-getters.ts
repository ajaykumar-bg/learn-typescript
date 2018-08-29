class Sizes {
  constructor(private sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }

}

const sizes = new Sizes(['small', 'medium']);

// invoke getter
console.log(sizes.availableSizes);
// invoke setter
sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes);