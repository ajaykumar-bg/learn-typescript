let shirtSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  shirtSize = size;
}

selectSize('large');

console.log(`Shirt size: ${shirtSize}`);