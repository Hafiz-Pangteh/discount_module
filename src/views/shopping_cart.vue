<template>
    <h1>Shopping Cart</h1>
    <p> Your point is:{{ point }}</p>
    <div class="row">
        <div class="col-9 mt-3">
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Unit price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cart, index) in carts" :key="index">
                        <td>
                            <img :src="cart.product.image" alt="" class="img-thumbnail" width="100">
                            {{ cart.product.title }}
                        </td>
                        <td>{{ cart.product.price }} $</td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="cart_store.decreare_quantity(index)">-</button>
                            <span class="mx-2">{{ cart.quantity }}</span>
                            <button class="btn btn-sm btn-secondary" @click="cart_store.increare_quantity(index)">+</button>
                        </td>
                        <td>{{ cart.totalProduct }} $</td>
                        <td>
                            <button class="btn btn-danger" @click="cart_store.remove_cart(index)">ลบ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-3 mt-3">
            <discount />
            <priceInterface />
        </div>
    </div>
</template>
 
<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cart';
import discount from './discount.vue';
import priceInterface from './price.vue';

const cart_store = useCartStore();
const carts = computed(() => cart_store.cart_preview)
const point = computed(() => cart_store.userPoint)
</script>
 
<style lang="scss" scoped></style>