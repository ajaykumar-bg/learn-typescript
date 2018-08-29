class Dress {
  public sizes: string[] = [];

  constructor(readonly name: string) {}

  public addSize(size: string) {
    this.sizes.push(size);
  }
}

let dress = new Dress('Shirt');

//dress.name = 'ass';
//[ts] Cannot assign to 'name' because it is a constant or a read-only property.

dress.addSize('medium');

console.log(dress);
