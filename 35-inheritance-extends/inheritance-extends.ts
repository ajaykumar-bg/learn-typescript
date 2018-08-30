class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

class Dress extends Sizes {
  public categories: string[] = [];

  constructor(readonly name: string, public sizes: string[]) {
    //Constructors for derived classes must contain a 'super' call.
    super(sizes);
  }

  public addCategory(category: string) {
    this.categories.push(category);
  }
}

const dress = new Dress('Shirt', ['small', 'medium']);
console.log(dress.availableSizes);
dress.addCategory('Dress Apparels');
console.log(dress);