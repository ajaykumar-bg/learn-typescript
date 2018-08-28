var coupon = 'pizza25';
function normalizeCoupon(cpn) {
    return cpn.toUpperCase();
}
var couponMsg = "Final coupon : " + normalizeCoupon(coupon);
console.log(couponMsg);
