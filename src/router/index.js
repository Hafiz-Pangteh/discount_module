import { createRouter, createWebHistory } from "vue-router";
import home_product from '../views/home_product.vue';
import shopping_cart from '../views/shopping_cart.vue';

const routes = [
    {
        path: '/',
        name: 'home_product',
        component: home_product,
    },
    {
        path: '/shopping_cart',
        name: 'shopping_cart',
        component: shopping_cart,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router