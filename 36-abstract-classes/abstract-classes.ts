abstract class Sizes {
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
    super(sizes);
  }

  public addCategory(category: string) {
    this.categories.push(category);
  }
}

//Cannot create an instance of an abstract class.
//const size = new Sizes;


const dress = new Dress('Casual Shirt', ['SM', 'LG']);
console.log(dress.availableSizes);
dress.addCategory('Dress Apparels');
dress.addCategory('Shirts');
console.log(dress);