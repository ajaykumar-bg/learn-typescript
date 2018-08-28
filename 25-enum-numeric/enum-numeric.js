var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
(function (Sizes) {
    Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
})(Sizes || (Sizes = {}));
var selectedSize = 1;
console.log("Sizes", Sizes);
console.log("Sizes.Large", Sizes.Medium);
console.log("Sizes[selectedSize]", Sizes[selectedSize]);
