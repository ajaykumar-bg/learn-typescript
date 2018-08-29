class Dress {
  name: string;
  sizes: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addSizes(size: string) {
    this.sizes.push(size);
  }
}

const dress = new Dress('Shirt');

dress.addSizes('Large');

console.log(dress);