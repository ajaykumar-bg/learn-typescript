class Dress {
  public sizes: string[] = [];

  constructor(private name: string) {
    this.name = name;
  }

  public addSizes(size: string) {
    this.sizes.push(size);
  }
}

const dress = new Dress('Shirt');

dress.addSizes('Large');

console.log(dress);