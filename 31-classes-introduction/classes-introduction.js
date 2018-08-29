var Dress = /** @class */ (function () {
    function Dress(name) {
        this.sizes = [];
        this.name = name;
    }
    Dress.prototype.addSizes = function (size) {
        this.sizes.push(size);
    };
    return Dress;
}());
var dress = new Dress('Shirt');
dress.addSizes('Large');
console.log(dress);
