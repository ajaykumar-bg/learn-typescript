var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress(name, sizes) {
        var _this = _super.call(this, sizes) || this;
        _this.name = name;
        _this.sizes = sizes;
        _this.categories = [];
        return _this;
    }
    Dress.prototype.addCategory = function (category) {
        this.categories.push(category);
    };
    return Dress;
}(Sizes));
//Cannot create an instance of an abstract class.
//const size = new Sizes;
var dress = new Dress('Casual Shirt', ['SM', 'LG']);
console.log(dress.availableSizes);
dress.addCategory('Dress Apparels');
dress.addCategory('Shirts');
console.log(dress);
