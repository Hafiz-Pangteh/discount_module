<template >
  <navbar />
  <div class="container">
    <router-view />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import navbar from './components/nav_bar.vue';
import { useProductStore } from './store/product';
import { useCartStore } from './store/cart';
import { useDiscountStore } from './store/discount_store';


const product_store = useProductStore();
const cart_store = useCartStore();
const discount_store = useDiscountStore();

onMounted(() => product_store.fetch_product())
onMounted(() => cart_store.loadFromLocalStorage())
onMounted(() => discount_store.loadDiscountLocalStorage())
</script>
<style lang="scss" scoped></style>