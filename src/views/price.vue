<template >
    <h4>Total Price</h4>
    <p>Sub total:{{ cart_store.totalPrice }} $</p>
    <p>Coupon discount:{{ couponDiscount }} $</p>
    <p>On top discount:{{ onTopDiscount }} $</p>
    <p>Seasonal discount:{{ seasonalDiscount }} $</p>
    <p>Total price:{{ totalPrice.toFixed(2) }} $</p>
</template>
<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cart';
import { usePriceStore } from '../store/price_store';


const cart_store = useCartStore();
const price_store = usePriceStore();


const subTotal = cart_store.totalPrice;
const couponDiscount = computed(() => price_store.getCouponDiscountPrice);
const onTopDiscount = computed(() => price_store.getonTopDiscountPrice);
const seasonalDiscount = computed(() => price_store.getSeasonalDiscountPrice);
const totalPrice = computed(() => subTotal - couponDiscount.value - onTopDiscount.value - seasonalDiscount.value);
</script>
<style lang="scss" scoped></style>