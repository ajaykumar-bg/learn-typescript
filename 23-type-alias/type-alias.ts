type Size = 'SMALL' | 'MEDIUM' | 'LARGE';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'SMALL';

const selectSize: Callback = x => {
  pizzaSize = x;
};

selectSize('MEDIUM');