<template >
    <div class="row mt-2">
        <div class="col mb-2" v-for="(product, index) in list" :key="index">
            <div class="card" style="width: 19rem;">
                <img :src="product.image" class="card-image-top mx-auto mt-3" alt="" style="width: : 12rem; height: 12rem">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text"> Category {{ product.category }}</p>
                    <p class="card-text">Price {{ product.price }} $</p>
                    <button class="btn btn-success"
                        @click="cart_store.add_cart(product.id, product.price, product.category)">Add to
                        Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useProductStore } from '../store/product';
import { useCartStore } from '../store/cart';

const product_store = useProductStore();
const list = computed(() => product_store.list_product)

const cart_store = useCartStore()
</script>
<style lang="scss" scoped></style>