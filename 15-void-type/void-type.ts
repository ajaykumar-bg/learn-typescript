let selectedName: string = 'Ajay';

function selectName(name: string): void {
  selectedName = name;
}

selectName('Raj');

console.log(selectedName);