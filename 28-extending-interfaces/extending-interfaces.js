var dress;
function createDress(name, sizes) {
    return {
        name: name,
        sizes: sizes,
        getAvailableSizes: function () {
            return this.sizes;
        }
    };
}
dress = createDress('Shirt', ['small', 'medium']);
console.log(dress);
