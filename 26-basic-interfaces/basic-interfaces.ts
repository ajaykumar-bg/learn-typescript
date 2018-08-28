interface Dress {
  name: string;
  sizes: string[];
}

let dress: Dress;

function addDress(name: string, sizes: string[]): Dress {
  return {
    name,
    sizes,
  };
}

dress = addDress('Shirt', ['SM', 'LG', 'XL']);
console.log(dress);
