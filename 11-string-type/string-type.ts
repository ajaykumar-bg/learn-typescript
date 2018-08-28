const coupon: string = 'pizza25';

function normalizeCoupon(cpn: string): string {
  return cpn.toUpperCase();
}

const couponMsg: string = `Final coupon : ${normalizeCoupon(coupon)}`;

console.log(couponMsg);