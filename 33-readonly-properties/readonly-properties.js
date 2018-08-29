var Dress = /** @class */ (function () {
    function Dress(name) {
        this.name = name;
        this.sizes = [];
    }
    Dress.prototype.addSize = function (size) {
        this.sizes.push(size);
    };
    return Dress;
}());
var dress = new Dress('Shirt');
//dress.name = 'ass';
//[ts] Cannot assign to 'name' because it is a constant or a read-only property.
dress.addSize('medium');
console.log(dress);
