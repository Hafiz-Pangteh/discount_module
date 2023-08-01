<template >
    <h4>Total Price</h4>
    <p>Sub total:{{ cart_store.totalPrice }} $</p>
    <p>Coupon discount:{{ couponDiscount }} $</p>
    <p>On top discount:{{ onTopDiscount }} $</p>
    <p>Seasonal discount:{{ seasonalDiscount }} $</p>
    <p>Total price:{{ parseFloat(totalPrice).toFixed(2) }} $</p>
</template>
<script setup>
import { useCartStore } from '../store/cart';
import { useDiscountStore } from '../store/discount_store';
import { usePriceStore } from '../store/price_store';


const cart_store = useCartStore();
const discount_store = useDiscountStore();
const price_store = usePriceStore();


const subTotal = cart_store.totalPrice;
const couponDiscount = price_store.getCouponDiscountPrice('coupon');
const onTopDiscount = price_store.getonTopDiscountPrice('on Top');
const seasonalDiscount = price_store.getSeasonalDiscountPrice('Seasonal');
const totalPrice = subTotal - couponDiscount - onTopDiscount - seasonalDiscount;
</script>
<style lang="scss" scoped></style>