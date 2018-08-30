interface SizesInterface {
  availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

interface DressInterface extends SizesInterface {
  readonly name: string;
  categories: string[];
  addSizes(size: string): void;
  updateSizes(sizes: string[]): void;
  addCategory(category: string): void;
}

class Dress extends Sizes implements DressInterface {
  public categories: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public addSizes(size: string) {
    this.sizes.push(size);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  public addCategory(category: string) {
    this.categories.push(category);
  }
}

const dress = new Dress('Shirt', ['SM', 'LG']);

console.log(dress.availableSizes);

dress.addSizes('LG');

//dress.updateSizes(['LG']);

dress.addCategory('Dress Apparels');

console.log(dress.availableSizes);

console.log(dress);
