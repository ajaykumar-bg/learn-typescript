var dress;
function createDress(name, price, sizes) {
    return {
        name: name,
        price: price,
        sizes: sizes,
        getAvailableSizes: function () {
            return this.sizes;
        }
    };
}
dress = createDress('Casual Shirt', 570, ['small', 'medium']);
console.log(dress);
//dress.discount = 1;
