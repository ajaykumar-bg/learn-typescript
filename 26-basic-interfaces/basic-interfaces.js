var dress;
function addDress(name, sizes) {
    return {
        name: name,
        sizes: sizes
    };
}
dress = addDress('Shirt', ['SM', 'LG', 'XL']);
console.log(dress);
