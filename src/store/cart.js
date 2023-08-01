import { defineStore } from "pinia";
import { computed, ref } from "vue";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';
import { useProductStore } from "./product";

export const useCartStore = defineStore('useCartStore', () => {
    const cart = ref([]);

    const add_cart = (id, price, category, quantity = 1) => {
        const data =
        {
            id, price, category, quantity
        }

        const findId = cart.value.find(e => e.id === data.id)

        if (findId) {
            alert_add_cart_failed();
        } else {
            cart.value.push(data);
            saveToLocalStorage()
            alert_add_cart();


        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const loadFromLocalStorage = () => {
        if (localStorage.getItem('cart')) {
            cart.value = JSON.parse(localStorage.getItem('cart'))
            return cart.value.map((value, index) => {
                return value;
            })
        }
    }

    const cart_preview = computed(() => {
        const product_store = useProductStore()

        return cart.value.map((product, index) => {
            const findIndexProduct = product_store.products.findIndex(e => e.id == product.id)
            return {
                product: product_store.products[findIndexProduct],
                quantity: cart.value[index].quantity,
                totalProduct: parseFloat(product_store.products[findIndexProduct].price * cart.value[index].quantity).toFixed(2)
            }
        })
    })

    const totalPrice = computed(() => {
        const subTotal = cart.value.reduce((sum, product) => sum + product.price * product.quantity, 0)

        return parseFloat(subTotal).toFixed(2)
    })


    const alert_add_cart = () => {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Add to cart successfully',
            timer: 1500,
        })
    }

    const alert_add_cart_failed = () => {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Product has already add to cart',
            timer: 1500,
        })
    }

    const increare_quantity = (index) => {
        cart.value[index].quantity += 1
        saveToLocalStorage()
    }

    const decreare_quantity = (index) => {
        if (cart.value[index].quantity == 0) {
            remove_cart(index)
        }
        cart.value[index].quantity -= 1
        saveToLocalStorage()


    }

    const remove_cart = (index) => {
        cart.value.splice(index, 1)
        saveToLocalStorage()
    }

    const point = () => {
        let point = 0;
        let quantity = 0;
        const getProduct = loadFromLocalStorage()
        const product = getProduct.map(value => value)
        const getQuantity = product.forEach(value => {
            quantity += value.quantity
        })
        point = quantity * 20;
        return point;
    }
    const userPoint = computed(() => {
        let point = 0;
        let quantity = 0;
        const getProduct = loadFromLocalStorage()
        const product = getProduct.map(value => value)
        const getQuantity = product.forEach(value => {
            quantity += value.quantity
        })
        point = quantity * 20;
        return point;
    })





    return { add_cart, loadFromLocalStorage, cart, cart_preview, increare_quantity, decreare_quantity, remove_cart, totalPrice, point, userPoint }
})