var Sizes = /** @class */ (function () {
    function Sizes(sizes) {
        this.sizes = sizes;
    }
    Object.defineProperty(Sizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return Sizes;
}());
var sizes = new Sizes(['small', 'medium']);
// invoke getter
console.log(sizes.availableSizes);
// invoke setter
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);
