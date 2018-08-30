abstract class Sizes {
  //If Property 'sizes' is private, then not accessible outside class 'Sizes'.
  //If Property 'sizes' is protected, so accessible within extended classes of 'Sizes'.
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

class Dress extends Sizes {
  public categories: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  public addCategory(category: string) {
    this.categories.push(category);
  }
}

const dress = new Dress('Shirt', ['small', 'medium']);

console.log(dress.availableSizes);

dress.updateSizes(['large']);

console.log(dress.availableSizes);
console.log(dress);